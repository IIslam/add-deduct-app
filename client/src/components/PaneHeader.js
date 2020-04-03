import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

export const PaneHeader = (props) => {
    return (
        <div className='d-flex flex-row'>
            <Header size='medium' color='red' dividing>
                {props.paneTeamName}
            </Header>
        </div>
    )
}

PaneHeader.propTypes = {
    paneTeamName: PropTypes.string.isRequired
}