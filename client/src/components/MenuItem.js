import React from "react";
import PropTypes from "prop-types";
import { EXPORT_DATA_API } from "../api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { PaneHeader, PaneContent } from "../components";
import { Tab, Dropdown, Button, Icon } from "semantic-ui-react";

export class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            records: null,
            month: 'january',
            year: '2020',
            collection: this.props.fileName
        }
    }

    handleClick = () => {
        this.fetchData();
    }

    resetHandler = () => {
        this.setState({
            month: 'january',
            year: '2020',
            records: null
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.fileName !== prevState.collection) {
            return {
                collection: nextProps.fileName,
                records: null,
            };
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.fileName !== this.props.fileName) {
            this.setState({
                collection: this.props.fileName,
                records: null,
            });
        }
    }

    fetchData = () => {

        let { month, year, collection } = this.state;

        if (month === null || year === null) {
            toast.error("Neither Month nor Year values can't be null", {
                className: "bg-danger rounded font-weight-bold",
                progressClassName: 'progress-bar bg-white'
            })
        }
        else {
            let date = month + '_' + year;
            let table = collection.replace(/-/, "_");

            let API = EXPORT_DATA_API + '/' + table + '/' + date;
            fetch(API, {
                headers: { "Content-Type": "application/json" },
                method: 'GET'
            }).then(res => {
                return res.json();
            }).then(teamData => {
                this.setState({
                    records: teamData
                });
            }).catch(err => {
                throw err;
            })
        }
    }

    handleMonthChoice = (e, { value }) => {
        this.setState({
            month: value
        })
    }

    handleYearChoice = (e, { value }) => {
        this.setState({
            year: value
        })
    }

    render() {
        let { year, month, records } = this.state;
        let { paneHeader, fileName, paneKeys, months, years } = this.props;
        return (
            <Tab.Pane className='p-5'>
                <ToastContainer />
                <PaneHeader paneTeamName={paneHeader} />
                <div className="mt-5 d-flex flex-row">
                    <Dropdown
                        placeholder='Select Year'
                        fluid
                        search
                        selection
                        options={years}
                        className="w-25 mr-3"
                        defaultValue={year}
                        onChange={this.handleYearChoice}
                    />
                    <Dropdown
                        placeholder='Select Month'
                        fluid
                        search
                        selection
                        options={months}
                        className="w-25 mr-3"
                        defaultValue={month}
                        onChange={this.handleMonthChoice}
                    />
                    <Button
                        color='red'
                        className='mr-3'
                        onClick={this.handleClick}
                    >
                        <Icon name='search' inverted />
                        Search
                    </Button>
                    <Button
                        basic
                        onClick={this.resetHandler}
                    >
                        <Icon name='redo' />
                        Reset
                    </Button>
                </div>
                {
                    records &&
                    <PaneContent paneFile={fileName} tableKeys={paneKeys} tableData={records} />
                }
            </Tab.Pane>
        )
    }
}

MenuItem.propTypes = {
    years: PropTypes.arrayOf(String).isRequired,
    months: PropTypes.arrayOf(String).isRequired,
    fileName: PropTypes.string.isRequired,
    paneKeys: PropTypes.arrayOf(String).isRequired,
    paneHeader: PropTypes.string.isRequired,
}