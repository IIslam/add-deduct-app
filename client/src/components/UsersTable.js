import React from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { TeamTableHeader, NoData } from "../components";
import { DELETE_USER, UPDATE_USER_STATUS } from "../api";
import { Table, Pagination, Button } from "semantic-ui-react";

export class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: 10,
      dataPerPage: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    let { tableData } = props;
    let { activePage, pageSize, dataPerPage } = state;

    // Table first page data
    if (activePage === 1) {
      if (tableData === null) {
        return { dataPerPage: [] };
      }
      if (tableData !== dataPerPage) {
        let initialData = tableData.slice(0, pageSize);
        return { dataPerPage: initialData };
      }
    } else {
      // Other pages data
      let start = pageSize * (activePage - 1);
      let end = pageSize * activePage;
      let pageData = tableData.slice(start, end);
      return { dataPerPage: pageData };
    }
  }

  deleteHandler = (user) => {
    const DELETE_API_URL = DELETE_USER + "/" + user;
    fetch(DELETE_API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((msg) => {
        toast.success("Successfully deleted user", {
          className: "bg-success font-weight-bold",
          progressClassName: "progress-bar bg-white",
        });
      })
      .catch((err) => {
        toast.error(err, {
          className: "bg-danger rounded font-weight-bold",
          progressClassName: "progress-bar bg-white",
        });
      });
  };

  statusHandler = ({ username, active }) => {
    const CHANGE_STATUS_API_URL = UPDATE_USER_STATUS + "/" + username;
    console.log(CHANGE_STATUS_API_URL);
    fetch(CHANGE_STATUS_API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        active: !active,
      }),
    })
      .then((res) => res.json())
      .then((msg) => {
        const { status } = msg;
        status === "Disabled"
          ? toast.success(
              "Successfully disabled user account. Refersh the page to see the update.",
              {
                className: "bg-success font-weight-bold",
                progressClassName: "progress-bar bg-white",
              }
            )
          : toast.success(
              "Successfully enabled user account. Refersh the page to see the update.",
              {
                className: "bg-success font-weight-bold",
                progressClassName: "progress-bar bg-white",
              }
            );
      })
      .catch((err) => {
        toast.error(err, {
          className: "bg-danger rounded font-weight-bold",
          progressClassName: "progress-bar bg-white",
        });
      });
  };

  pagesHandler = (e, { activePage }) => {
    this.setState({ activePage });
  };

  render() {
    let { activePage, pageSize, dataPerPage } = this.state;
    let { tableKeys, tableData } = this.props;
    let colSpan = tableKeys.length;

    if (tableData) {
      let rowsCount = tableData.length;
      if (rowsCount === 0) {
        return <NoData />;
      }
      return (
        <div className="shadow rounded p-5 mt-5">
          <Table id="display-table" celled striped>
            <Table.Header>
              <Table.Row>
                <TeamTableHeader header={tableKeys} />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {dataPerPage.map((row, i) => {
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{row.username}</Table.Cell>
                    <Table.Cell>
                      {row.active ? "Active" : "Disabled"}
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        positive={!row.active}
                        secondary={row.active}
                        onClick={() => this.statusHandler(row)}
                      >
                        {row.active ? "Disable Account" : "Activate Account"}
                      </Button>
                      <Button
                        negative
                        onClick={() => this.deleteHandler(row.username)}
                      >
                        Delete Account
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
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
          <ToastContainer />
        </div>
      );
    }
  }
}

UsersTable.propTypes = {
  tableKeys: PropTypes.arrayOf(String).isRequired,
  tableData: PropTypes.arrayOf(Object),
};
