import React from "react";
import {
    Header,
    Divider,
    Container
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class SubmissionDateScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDate: new Date()
        }
    }

    changeHandler = (date) => {
        this.setState({
            selectedDate: date
        })
    }

    render() {
        let { selectedDate } = this.state;
        return (
            <Container fluid className="bg-white p-5" style={{ height: "100vh" }}>
                <div>
                    <Header as="h2" floated="left" color="red">
                        Submission Date Deadline
                    </Header>
                    <Divider clearing />
                </div>
                <div className="mt-5 shadow rounded p-5 text-center">
                    <DatePicker
                        peekNextMonth
                        showYearDropdown
                        showMonthDropdown
                        scrollableMonthYearDropdown
                        selected={selectedDate}
                        onChange={this.changeHandler}
                        className="rounded bg-white border border-dark p-2 text-center"
                    />
                </div>
            </Container>
        );
    }
}