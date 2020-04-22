import React from "react";
import PropTypes from "prop-types";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Table, Pagination, Dimmer, Loader } from "semantic-ui-react";
import { TeamTableHeader, TeamTableBody, NoData } from "../components";

export class PaneContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            pageSize: 10,
            dataPerPage: []
        }
    }

    static getDerivedStateFromProps(props, state) {

        let { tableData } = props;
        let { activePage, pageSize, dataPerPage } = state;

        // Table first page data
        if (activePage === 1) {
            if (tableData === null) {
                return { dataPerPage: [] }
            }
            if (tableData !== dataPerPage) {
                let initialData = tableData.slice(0, pageSize);
                return { dataPerPage: initialData };
            }
        }
        else {  // Other pages data
            let start = (pageSize) * (activePage - 1);
            let end = pageSize * activePage;
            let pageData = tableData.slice(start, end);
            return { dataPerPage: pageData };
        }
    }

    pagesHandler = (e, { activePage }) => {
        this.setState({ activePage });
    }


    render() {

        let { activePage, pageSize, dataPerPage } = this.state;
        let { paneFile, tableKeys, tableData } = this.props;
        let colSpan = tableKeys.length;

        if (tableData) {
            let rowsCount = tableData.length;
            if (rowsCount === 0) {
                return (
                    <div className='mt-5'>
                        <NoData />
                    </div>
                )
            }
            return (
                <div>
                    <div className='d-flex flex-row mt-5'>
                        <ReactHTMLTableToExcel
                            id='test-table-xls-button'
                            className='download-table-xls-button ui basic button'
                            table='data-table'
                            filename={paneFile}
                            sheet='Sheet1'
                            buttonText='Export Table as XLS'
                        />
                    </div>
                    {/* Exported Table */}
                    <Table id='data-table' hidden>
                        <Table.Header>
                            <Table.Row>
                                <TeamTableHeader header={tableKeys} />
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <TeamTableBody rows={tableData} />
                        </Table.Body>
                    </Table>
                    {/* Displayed Table */}
                    <Table id='display-table' celled striped>
                        <Table.Header>
                            <Table.Row>
                                <TeamTableHeader header={tableKeys} />
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <TeamTableBody rows={dataPerPage} />
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan={colSpan}>
                                    <Pagination
                                        activePage={activePage}
                                        totalPages={Math.ceil(rowsCount / pageSize)}
                                        onPageChange={this.pagesHandler}
                                    />
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            )
        } else {
            return (
                <div className="p-3">
                    <Dimmer active inverted>
                        <Loader inverted>Fetching Data</Loader>
                    </Dimmer>
                </div>
            )
        }
    }
}

PaneContent.propTypes = {
    paneFile: PropTypes.string.isRequired,
    tableKeys: PropTypes.arrayOf(String).isRequired,
    tableData: PropTypes.arrayOf(Object)
}