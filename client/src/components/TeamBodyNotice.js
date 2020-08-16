import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

export const TeamBodyNotice = ({ teamName, fileName, deadline }) => {
  return (
    <div className="container-fluid mt-4">
      <Message info>
        <Message.Header>Important Notice</Message.Header>
        <Message.List>
          <Message.Item>
            {"You have to use the sample excel sheet for your " +
              teamName.toLowerCase() +
              " data entry." +
              " Download it "}
            <a
              href={fileName}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span className="font-weight-bolder font-italic h5">here.</span>
            </a>
          </Message.Item>
          <Message.Item>{`Your have to submit your data by ${deadline} or you won't be able to submit.`}</Message.Item>
        </Message.List>
      </Message>
    </div>
  );
};

TeamBodyNotice.protoTypes = {
  teamName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};
