import React from "react";
import XLSX from "xlsx";
import PropTypes from "prop-types";
import { TeamBodyNotice, TeamBodyUpload } from "../components";
import { Divider, Button } from "semantic-ui-react";

export class TeamContent extends React.Component {

    constructor(props) {
        super(props);
        this.fileHandler = this.fileHandler.bind(this);
    }

    fileHandler(file) {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = ({ target: { result } }) => {
            const workBook = XLSX.read(result, { type: rABS ? "binary" : "array" });
            const workSheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[workSheetName];
            const workSheetData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
            this.props.displayData(workSheetData);
        }
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    }

    render() {
        return (
            <div>
                <TeamBodyNotice teamName={this.props.team} fileName={this.props.file} />
                <div className='d-flex flex-row mt-4 ml-3 mr-3'>
                    <TeamBodyUpload handleFile={this.fileHandler} />
                    <Button
                        negative
                        className='ml-2'
                        onClick={this.props.onSubmitTable}
                    >
                        Submit Data
                    </Button>
                </div>
                <div className='pl-3 pr-3 mt-1'>
                    <Divider />
                </div>
            </div>
        );
    }
}

TeamContent.propTypes = {
    team: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    displayData: PropTypes.func.isRequired,
    onSubmitTable: PropTypes.func.isRequired
}