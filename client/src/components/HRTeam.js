import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";
import { TeamHeader, HRTeamTable } from "../components";

export const HRTeam = (props) => {
  return (
    <Container fluid className="bg-white" style={{ height: "100%", width: "100%" }}>
      <div className="bg-white p-5">
        <TeamHeader team={props.teamName} />
        <HRTeamTable />
      </div>
    </Container>
  );
};

HRTeam.protoTypes = {
  teamName: PropTypes.string.isRequired
};
