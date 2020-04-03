import React from "react";
import PropTypes from "prop-types";
import { Header, Divider } from "semantic-ui-react";

export class TeamHeader extends React.Component {
    render() {
        return (
            <div>
                <Header as='h2' floated='left' color="red">
                    {this.props.team + " Team"}
                </Header>
                <Divider clearing />
            </div>
        );
    }
}

TeamHeader.protoTypes = {
    team: PropTypes.string.isRequired,
    filePath: PropTypes.string.isRequired
}