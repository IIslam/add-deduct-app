import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { TeamHeader, HRTeamTable } from ".";

export const HRTeam = (props) => {
  return (
    <Container fluid className="bg-white" style={{ height: "100%", width: "100%" }}>
      <div className="bg-white p-5">
        <TeamHeader team={props.teamName} />
        <HRTeamTable header={props.tableHeader} />
      </div>
    </Container>
  );
};

HRTeam.protoTypes = {
  teamName: PropTypes.string.isRequired,
  tableHeader: PropTypes.string.isRequired
};
