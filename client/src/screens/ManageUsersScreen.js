import React from "react";
import _ from "lodash";
import { fetchAllUsers } from "../helpers";
import {
  Header,
  Divider,
  Container,
  Dimmer,
  Segment,
  Loader,
} from "semantic-ui-react";
import { UsersTable } from "../components";

export class ManageUsersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sysUsers: [],
    };
  }

  componentDidMount() {
    fetchAllUsers().then((users) => {
      this.setState({ sysUsers: users });
    });
  }

  render() {
    const { sysUsers } = this.state;
    if (sysUsers.length !== 0) {
      let keys = Object.keys(sysUsers[0]);
      keys.push("actions");
      const userKeys = keys.map((key) => _.startCase(key));
      return (
        <Container fluid className="bg-white p-5" style={{ height: "100vh" }}>
          <div>
            <Header as="h2" floated="left" color="red">
              Manage Users
            </Header>
            <Divider clearing />
          </div>
          {sysUsers && <UsersTable tableKeys={userKeys} tableData={sysUsers} />}
        </Container>
      );
    } else {
      return (
        <div>
          <Segment>
            <Dimmer active>
              <Loader>Fetching Data</Loader>
            </Dimmer>
          </Segment>
        </div>
      );
    }
  }
}
