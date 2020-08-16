import _ from "lodash";
import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Container, Message } from "semantic-ui-react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { SUBMIT_DATA_API, GET_DEADLINE_API } from "../api";
import { TeamHeader, TeamContent, TeamTable, PageSize } from ".";

export class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excelData: [],
      totalCount: 0,
      pageSize: 10,
      expired: false,
      today: moment().format("YYYY/MM/DD"),
    };
  }

  componentDidMount = () => {
    this.fetchDeadline();
  };

  fetchDeadline = async () => {
    const ops = {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    };

    const response = await fetch(GET_DEADLINE_API, ops);
    const { status, expired, deadline } = await response.json();
    if (status === 200) {
      this.setState({ expired, today: deadline });
    }
  };

  dataDisplayHandler = (data) => {
    let { tableHeader } = this.props;
    let header = tableHeader.map((value) => {
      return _.camelCase(value);
    });

    if (JSON.stringify(data[0]) === JSON.stringify(header)) {
      toast.success(
        "Correct file. You can now visualize your data in the table below.",
        {
          className: "bg-success font-weight-bold",
          progressClassName: "progress-bar bg-white",
        }
      );

      this.setState({
        excelData: data,
        totalCount: data.slice(1).length,
      });
    } else {
      toast.error(
        "Wrong file. Please use the file provided in the Before Upload section.",
        {
          className: "bg-danger rounded font-weight-bold",
          progressClassName: "progress-bar bg-white",
        }
      );
    }
  };

  submitTableHandler = (event) => {
    event.preventDefault();
    let collectionName = this.props.collection;
    let data = this.state.excelData;

    // prevent submit when wrong file if chosen
    if (data.length > 0) {
      fetch(SUBMIT_DATA_API, {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify({
          what_to_submit: data,
          where_to_submit: collectionName,
        }),
      })
        .then(() => {
          toast.success("Data successfully submitted.", {
            className: "bg-success font-weight-bold",
            progressClassName: "progress-bar bg-white",
          });
        })
        .catch((err) => {
          toast.error("Failed to submit data to db." + err, {
            className: "bg-danger rounded font-weight-bold",
            progressClassName: "progress-bar bg-white",
          });
        });
    } else {
      toast.error("Data won't be submitted, wrong file has been uploaded.", {
        className: "bg-danger rounded font-weight-bold",
        progressClassName: "progress-bar bg-white",
      });
    }
  };

  pageSizeHandler = (sizeValue) => {
    this.setState({ pageSize: sizeValue });
  };

  render() {
    let { excelData, totalCount, pageSize, expired, today } = this.state;
    let { teamName, filePath, tableHeader } = this.props;
    let minHeight = pageSize >= 10 && pageSize <= 25 ? "180vh" : "520vh";
    if (!expired) {
      return (
        <Container fluid className="bg-light p-5" style={{ height: minHeight }}>
          <div className="border bg-white rounded p-5">
            <TeamHeader team={teamName} />
            <TeamContent
              team={teamName}
              file={filePath}
              deadline={today}
              displayData={this.dataDisplayHandler}
              onSubmitTable={this.submitTableHandler}
            />
            <div className="row pl-3">
              <PageSize onChangeHandler={this.pageSizeHandler} />
            </div>
            <TeamTable
              headerArray={tableHeader}
              bodyArray={excelData}
              totalCount={totalCount}
              pageSize={pageSize}
            />
            <ToastContainer />
          </div>
        </Container>
      );
    } else {
      return (
        <Message negative>
          <Message.Header>Sorry but you can't submit data</Message.Header>
          <p>{`The deadline for submission was ${today}.`}</p>
        </Message>
      );
    }
  }
}

Team.propTypes = {
  teamName: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  tableHeader: PropTypes.arrayOf(String).isRequired,
};
