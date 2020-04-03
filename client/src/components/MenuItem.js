import React from "react";
import PropTypes from "prop-types";
import { Tab } from "semantic-ui-react";
import { EXPORT_DATA_API } from "../api";
import { PaneHeader, PaneContent } from "../components";

export class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            records: [],
            collection: this.props.fileName
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.fileName !== prevState.collection) {
            return { collection: nextProps.fileName };
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.fileName !== this.props.fileName) {
            this.setState({ collection: this.props.fileName });
            this.fetchData();
        }
    }

    fetchData = () => {
        let API = EXPORT_DATA_API + '/' + this.state.collection;
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

    render() {
        let { records } = this.state;
        let { paneHeader, fileName, paneKeys } = this.props;
        return (
            <Tab.Pane className='p-5'>
                <PaneHeader paneTeamName={paneHeader} />
                <PaneContent paneFile={fileName} tableKeys={paneKeys} tableData={records} />
            </Tab.Pane>
        )
    }
}

MenuItem.propTypes = {
    paneHeader: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    paneKeys: PropTypes.arrayOf(String).isRequired
}