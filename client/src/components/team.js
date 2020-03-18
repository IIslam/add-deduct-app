import React from "react";
import PropTypes from "prop-types";
import {
    Container,
} from "semantic-ui-react";
import {
    TeamHeader,
    TeamBody
} from "../components";

export class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    handleUpload() {
        console.log('hello');

    }

    handleUpload() {
        console.log('hello')
    }

    render() {
        return (
            <Container fluid className='bg-light p-5' style={{ height: '100vh' }}>
                <div className='offset-md-3 col-md-6 border bg-white rounded p-5'>
                    <TeamHeader name={this.props.teamName} />
                    <TeamBody
                        team={this.props.teamName}
                        file="samples-sa.xlsx" />
                </div>
            </Container>
        );
    }
}

Team.protoTypes = {
    teamName: PropTypes.string.isRequired,
}