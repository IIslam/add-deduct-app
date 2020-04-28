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
    KEYS,
    TEAMS,
    YEARS,
    MONTHS
} from "../util";
import { PaneContent } from "../components";
import { fetchDataRequest } from "../helpers"

export class ViewData extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            year: '',
            month: '',
            teamName: '',
            exportedData: null
        }
    }

    handleChange = (e, { value, title }) => {
        this.setState({
            [title]: value
        })
    }

    resetHandler = () => {
        this.setState({
            year: '',
            month: '',
            teamName: '',
            exportedData: null
        })
    }

    searchHandler = () => {
        let { year, month, teamName } = this.state;
        fetchDataRequest(year, month, teamName)
            .then(data => {
                this.setState({
                    exportedData: data
                })
            })
    }

    render() {
        let { year, month, teamName, exportedData } = this.state;
        return (
            <Container fluid className="bg-white p-5" style={{ height: "100vh" }}>
                <div>
                    <Header as="h2" floated color="red">
                        Data Visualization
                        </Header>
                    <Divider clearing />
                </div>
                <div className="mt-5">
                    <Header as="h5" floated color="black">
                        Choose a date and a team name to view their submitted data:
                    </Header>
                    <div className="d-flex flex-row">
                        <Dropdown
                            fluid
                            search
                            selection
                            value={year}
                            title={"year"}
                            options={YEARS}
                            className="w-25 mr-3"
                            placeholder="Select a Year"
                            onChange={this.handleChange}
                        />
                        <Dropdown
                            fluid
                            search
                            selection
                            value={month}
                            title={"month"}
                            options={MONTHS}
                            className="w-25 mr-3"
                            placeholder="Select a Month"
                            onChange={this.handleChange}
                        />
                        <Dropdown
                            fluid
                            search
                            selection
                            options={TEAMS}
                            value={teamName}
                            title={"teamName"}
                            className="w-25 mr-3"
                            placeholder="Select a Team"
                            onChange={this.handleChange}
                        />
                        <Button
                            color='red'
                            className='mr-3'
                            onClick={this.searchHandler}
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
                    exportedData &&
                    <PaneContent
                        tableKeys={KEYS[teamName]}
                        tableData={exportedData}
                        paneFile={teamName + "_" + year + "_" + month}
                    />
                }
            </Container>
        );
    }
}