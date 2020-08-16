import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import {
  Header,
  Divider,
  Container,
  Form,
  Button,
  Message,
  Table,
} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import { SET_DEADLINE_API, GET_DEADLINE_API, DEL_DEADLINE_API } from "../api";

export class SubmissionDateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: Date.now(),
      today: moment().format("YYYY/MM/DD"),
      expired: true,
    };
  }

  componentDidMount = async () => {
    const { today } = this.state;
    const { deadline, _id } = await this.fetchDeadline();
    if (deadline === today) {
      // make sure there is only one deadline in db
      this.deleteDeadline(_id);
    }
  };

  changeHandler = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  deleteDeadline = async (id) => {
    const ops = {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    };
    await fetch(DEL_DEADLINE_API + `/${id}`, ops);
  };

  fetchDeadline = async () => {
    const ops = {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    };

    const response = await fetch(GET_DEADLINE_API, ops);
    const { status, expired, deadline, _id } = await response.json();
    if (status === 200) {
      this.setState({ expired, today: deadline });
    }

    return { expired, deadline, _id };
  };

  submitHandler = async () => {
    const { selectedDate, today } = this.state;
    const targetDate = moment(selectedDate).format("YYYY/MM/DD");
    const matched = targetDate <= today;
    if (!matched) {
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ endDate: selectedDate }),
      };

      const res = await fetch(SET_DEADLINE_API, options);
      const { insertedCount } = await res.json();

      if (insertedCount === 1) {
        this.setState({
          deadlineSet: true,
        });

        toast.success(
          "You successfully set the deadline for teams to submit their data.",
          {
            className: "bg-success font-weight-bold",
            progressClassName: "progress-bar bg-white",
          }
        );
      }
    } else {
      toast.error(
        `Deadline can't be ${targetDate}. Please select another day.`,
        {
          className: "bg-danger rounded font-weight-bold",
          progressClassName: "progress-bar bg-white",
        }
      );
    }
  };

  render() {
    let { selectedDate, today, expired } = this.state;
    if (expired) {
      return (
        <Container fluid className="bg-white p-5" style={{ height: "100vh" }}>
          <div>
            <Header as="h2" floated="left" color="red">
              Submission Date Deadline
            </Header>
            <Divider clearing />
          </div>
          <Form className="shadow rounded p-5">
            <Form.Field className="d-flex flex-row justify-content-between">
              <label>Select Submission Date for All Teams</label>
              <DatePicker
                peekNextMonth
                showYearDropdown
                showMonthDropdown
                scrollableMonthYearDropdown
                selected={selectedDate}
                onChange={this.changeHandler}
                className="rounded bg-white border border-dark p-2 text-center"
              />
            </Form.Field>
            <Button color="red" fluid onClick={this.submitHandler}>
              Submit Date
            </Button>
          </Form>
          <ToastContainer />
        </Container>
      );
    } else {
      return (
        <Container fluid className="bg-white p-5">
          <div className="shadow rounded p-5">
            <Message
              success
              header="Your deadline submission was successful"
              content={`You may submit another deadline ${moment(today)
                .endOf("day")
                .fromNow()}.`}
            />
            <div className="mt-5">
              <Header as="h4">Previous Deadlines</Header>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Deadline</Table.HeaderCell>
                    <Table.HeaderCell>Expires</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{today}</Table.Cell>
                    <Table.Cell>
                      {moment(today).endOf("day").fromNow()}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </Container>
      );
    }
  }
}
