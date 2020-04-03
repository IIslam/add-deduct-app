import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";

export class TeamBodyUpload extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.fileInput = React.createRef();
    }

    handleChange(e) {
        const files = e.target.files;
        if (files && files[0]) {
            this.props.handleFile(files[0]);
        }
    }

    render() {
        return (
            <div>
                <Button
                    basic
                    onClick={() => this.fileInput.current.click()}
                >
                    <Icon name='upload'/>
                    Upload an Excel File
                </Button>
                <input
                    ref={this.fileInput}
                    type="file"
                    hidden
                    accept=".xlsx"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

TeamBodyUpload.propTypes = {
    handleFile: PropTypes.func.isRequired
}