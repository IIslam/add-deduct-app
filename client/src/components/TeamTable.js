import React from "react";
import PropTypes from "prop-types";
import { Table, Pagination } from "semantic-ui-react";
import {
    TeamTableHeader,
    TeamTableBody
} from "../components";

export class TeamTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            dataPerPage: props.bodyArray.slice(1, 10)
        }
    }

    static getDerivedStateFromProps(props, state) {

        let { bodyArray, pageSize } = props;
        let { dataPerPage, activePage } = state;

        // Table first page data
        if (activePage === 1) {
            if (bodyArray !== dataPerPage) {
                let removeKeys = bodyArray.slice(1)
                let initialData = removeKeys.slice(0, pageSize);
                return { dataPerPage: initialData };
            }
        }
        else {  // Other pages data
            let start = (pageSize) * (activePage - 1);
            let end = pageSize * activePage;
            let pageData = bodyArray.slice(start, end);
            return { dataPerPage: pageData };
        }
    }

    changePageHandler = (e, { activePage }) => {
        this.setState({ activePage });
    }

    render() {

        let { activePage, dataPerPage } = this.state;
        let { bodyArray, headerArray, pageSize, totalCount } = this.props;
        let colSpan = headerArray.length;

        if (bodyArray.length !== 0) {
            return (
                <div className="p-3">
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>
                                <TeamTableHeader header={headerArray} />
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <TeamTableBody rows={dataPerPage} />
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan={colSpan}>
                                    <Pagination
                                        className='float-right'
                                        totalPages={Math.ceil(totalCount / pageSize)}
                                        activePage={activePage}
                                        onPageChange={this.changePageHandler}
                                    />
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            );
        } else {
            return (
                <div className="p-3">
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <TeamTableHeader header={headerArray} />
                            </Table.Row>
                        </Table.Header>
                    </Table>
                </div>
            )
        }
    }
}

TeamTable.propTypes = {
    headerArray: PropTypes.array.isRequired,
    bodyArray: PropTypes.array.isRequired,
    totalCount: PropTypes.number.isRequired
}
