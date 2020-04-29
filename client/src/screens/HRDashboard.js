import React from "react";
import {
    Tab,
    Header,
    Divider,
    Container,
} from "semantic-ui-react";
import {
    ViewData,
    HRFilesScreen,
    UploadUsersScreen,
    SubmissionDateScreen
} from "../screens"

export class HRDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const panes = [
            {
                menuItem: { key: "users", icon: "upload", content: 'Users Upload' },
                render: () => <Tab.Pane><UploadUsersScreen /></Tab.Pane>,
            },
            {
                menuItem: { key: "data", icon: "database", content: "Visualize Data" },
                render: () => <Tab.Pane><ViewData /></Tab.Pane>
            },
            {
                menuItem: { key: "files", icon: "cloud download", content: "Download Files" },
                render: () => <Tab.Pane><HRFilesScreen /></Tab.Pane>
            },
            {
                menuItem: { key: "deadline", icon: "calendar", content: "Submission Deadline" },
                render: () => <Tab.Pane><SubmissionDateScreen /></Tab.Pane>
            }
        ]

        return (
            <Container fluid className="bg-light p-5" style={{ height: "150vh" }}>
                <div>
                    <Header as="h2" floated color="red">
                        Human Resources Dashboard
                    </Header>
                    <Divider clearing />
                </div>
                <Tab
                    panes={panes}
                    menu={{ vertical: true, fluid: true, pointing: true }}
                />
            </Container>
        );
    }
}