import React from "react";
import PropTypes from "prop-types";
import { Message, Icon } from "semantic-ui-react";

export const TeamBodyNotice = (props) => {
    let { teamName, fileName } = props;
    return (
        <div className='container-fluid mt-4'>
            <Message warning>
                <div className='d-flex flex-row align-items-center'>
                    <Icon name='info circle' size='large' />
                    <div>
                        <span className='h5'>
                            {
                                "You have to use the sample excel sheet for your "
                                + teamName.toLowerCase() + " data entry."
                                + " Download it "
                            }
                        </span>
                        <a
                            href={fileName}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <span className='font-weight-bolder font-italic h4'>here.</span>
                        </a>
                    </div>
                </div>
            </Message>
        </div>
    );
}

TeamBodyNotice.protoTypes = {
    teamName: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired
}