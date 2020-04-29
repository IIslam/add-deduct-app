import React from "react";
import {
    Icon,
    Header,
    Button,
    Divider,
    Dropdown,
    Container
} from "semantic-ui-react";
import {
    ExportWorkBook
} from "../components";
import {
    YEARS,
    FILES,
    MONTHS
} from "../util";
import {
    additionRequest,
    newHiresRequest,
    deductionRequest,
    profileChangeRequest,
    salaryAdjustmentRequest
} from "../helpers";

export class HRFilesScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            year: '',
            month: '',
            fileName: '',
            dataToExport: null
        }
    }

    handleClick = () => {
        let { year, fileName, month } = this.state;
        switch (fileName) {
            case 'addition': {
                additionRequest(year, month).then(data => {
                    this.setState({
                        dataToExport: data
                    })
                })
                break;
            }
            case 'deduction': {
                deductionRequest(year, month).then(data => {
                    this.setState({
                        dataToExport: data
                    })
                })
                break;
            }
            case 'new hires': {
                newHiresRequest(year, month).then(data => {
                    this.setState({
                        dataToExport: data
                    })
                })
                break;
            }
            case 'salary adjustment': {
                salaryAdjustmentRequest(year, month).then(data => {
                    this.setState({
                        dataToExport: data
                    })
                })
                break;
            }
            case 'profile change': {
                profileChangeRequest(year, month).then(data => {
                    this.setState({
                        dataToExport: data
                    })
                })
                break;
            }
            default: {
                this.setState({
                    dataToExport: null
                })
            }
        }

    }

    resetHandler = () => {
        this.setState({
            month: '',
            year: '',
            fileName: '',
            dataToExport: null
        })
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

    handleFileChoice = (e, { value }) => {
        this.setState({
            fileName: value
        })
    }

    render() {
        let { year, month, fileName, dataToExport } = this.state;
        let workBookName = fileName + "_" + month + "_" + year + ".xlsx";
        return (
            <Container fluid className="bg-white p-5" style={{ height: "100vh" }}>
                <div>
                    <Header as='h2' floated='left' color="red">
                        Download Files
                    </Header>
                    <Divider clearing />
                </div>
                <div className="mt-5 shadow rounded p-5">
                    <Header as="h5" floated color="black">
                        Choose a date and a file name to download their excel sheet:
                    </Header>
                    <div className="mt-2 d-flex flex-row">
                        <Dropdown
                            placeholder='Select Year'
                            fluid
                            search
                            selection
                            value={year}
                            options={YEARS}
                            className="w-25 mr-3"
                            onChange={this.handleYearChoice}
                        />
                        <Dropdown
                            placeholder='Select Month'
                            fluid
                            search
                            selection
                            value={month}
                            options={MONTHS}
                            className="w-25 mr-3"
                            onChange={this.handleMonthChoice}
                        />
                        <Dropdown
                            placeholder='Select File'
                            fluid
                            search
                            selection
                            value={fileName}
                            options={FILES}
                            className="w-25 mr-3"
                            onChange={this.handleFileChoice}
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
                </div>
                {
                    dataToExport &&
                    <ExportWorkBook
                        name={workBookName}
                        data={dataToExport}
                    />
                }
            </Container>
        )
    }
}