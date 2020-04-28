import React from "react";
import { connect } from "react-redux";
import { Nav, Navbar, Image } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { Icon } from "semantic-ui-react";
import Logo from "../assets/images/logo-wht.png";
import { logout } from "../state";

export class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      err: "",
      hrUsers: ["ADA_HR"],
      salaryAdjustmentUsers: ["ADA_SA"],
      overtimeUsers: ["ADA_OVT"],
      netExpensesUsers: ["ADA_NEX"],
      nightShiftUsers: ["ADA_NSAD"],
      lostHoursUsers: ["ADA_LH"],
      overtimeRewardGrossUsers: ["ADA_ORG"],
      noShowDetailedUsers: ["ADA_NSHD"],
      noShowsUsers: ["ADA_NSH"],
      incentivesGrossUsers: ["ADA_IG"],
      incentivesNetUsers: ["ADA_IN"],
      mobileBillUsers: ["ADA_MB"],
      sickLeaveDetailedUsers: ["ADA_SLD"],
      sickLeaveConsUsers: ["ADA_SLC"],
      ukdeReferralUsers: ["ADA_UKDE"],
      awardGrossAmountUsers: ["ADA_AGA"],
      gymUsers: ["ADA_GYM"],
      penaltiesDetailedUsers: ["ADA_PD"],
      onCallUsers: ["ADA_OC"],
      profileChangeUsers: ["ADA_PC"],
      newHiresUsers: ["ADA_NH"]
    };
  }

  static mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      account: state.auth.account
    };
  }

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
  }

  checkAuth = (allowed_users, user_roles) => {
    const found = allowed_users.some(r => user_roles.indexOf(r) >= 0);
    return found;
  };

  render() {
    if (!this.props.isAuthenticated) {
      return null;
    }
    return (
      <Navbar style={{ backgroundColor: "#db2828" }} variant="dark">
        <Navbar.Brand>
          <Image src={Logo} style={{ height: "50px", width: "50px" }} rounded />
          <label className='font-weight-bold'>Add Deduct App</label>
        </Navbar.Brand>
        <Nav className="mr-auto font-weight-bold">
          {this.checkAuth(this.state.hrUsers, this.props.account.roles) && (
            <Nav.Link href="/hr">HR Dashboard</Nav.Link>
          )}
          {this.checkAuth(this.state.salaryAdjustmentUsers, this.props.account.roles) && (
            <Nav.Link href="/salary_adjust">Salary Adjustment</Nav.Link>
          )}
          {this.checkAuth(this.state.overtimeUsers, this.props.account.roles) && (
            <Nav.Link href="/overtime">Overtime</Nav.Link>
          )}
          {this.checkAuth(this.state.netExpensesUsers, this.props.account.roles) && (
            <Nav.Link href="/net_expenses">Net Expenses</Nav.Link>
          )}
          {this.checkAuth(this.state.nightShiftUsers, this.props.account.roles) && (
            <Nav.Link href="/night_shift_amount">Night Shift Amount</Nav.Link>
          )}
          {this.checkAuth(this.state.nightShiftUsers, this.props.account.roles) && (
            <Nav.Link href="/night_shift_days">Night Shift Days</Nav.Link>
          )}
          {this.checkAuth(this.state.lostHoursUsers, this.props.account.roles) && (
            <Nav.Link href="/lost_hours">Lost Hours</Nav.Link>
          )}
          {this.checkAuth(this.state.overtimeRewardGrossUsers, this.props.account.roles) && (
            <Nav.Link href="/overtime_reward_gross">Overtime Reward Gross</Nav.Link>
          )}
          {this.checkAuth(this.state.noShowDetailedUsers, this.props.account.roles) && (
            <Nav.Link href="/no_show_detailed">No Show Detailed</Nav.Link>
          )}
          {this.checkAuth(this.state.noShowsUsers, this.props.account.roles) && (
            <Nav.Link href="/no_shows">No Shows</Nav.Link>
          )}
          {this.checkAuth(this.state.incentivesGrossUsers, this.props.account.roles) && (
            <Nav.Link href="/incentives_gross">Incentives Gross</Nav.Link>
          )}
          {this.checkAuth(this.state.incentivesNetUsers, this.props.account.roles) && (
            <Nav.Link href="/incentives_net">Incentives Net</Nav.Link>
          )}
          {this.checkAuth(this.state.mobileBillUsers, this.props.account.roles) && (
            <Nav.Link href="/mobile_bill">Mobile Bill</Nav.Link>
          )}
          {this.checkAuth(this.state.sickLeaveDetailedUsers, this.props.account.roles) && (
            <Nav.Link href="/sick_leave_detailed">Sick Leave Detailed</Nav.Link>
          )}
          {this.checkAuth(this.state.sickLeaveConsUsers, this.props.account.roles) && (
            <Nav.Link href="/sick_leave_cons">Sick Leave Cons</Nav.Link>
          )}
          {this.checkAuth(this.state.ukdeReferralUsers, this.props.account.roles) && (
            <Nav.Link href="/ukde_referral">UK-DE Referral Prog Net Amount</Nav.Link>
          )}
          {this.checkAuth(this.state.awardGrossAmountUsers, this.props.account.roles) && (
            <Nav.Link href="/award_gross_amount">Award Gross Amount</Nav.Link>
          )}
          {this.checkAuth(this.state.gymUsers, this.props.account.roles) && (
            <Nav.Link href="/gym">GYM</Nav.Link>
          )}
          {this.checkAuth(this.state.penaltiesDetailedUsers, this.props.account.roles) && (
            <Nav.Link href="/penalties_detailed">Penalties Detailed</Nav.Link>
          )}
          {this.checkAuth(this.state.onCallUsers, this.props.account.roles) && (
            <Nav.Link href="/on_call">On Call</Nav.Link>
          )}
          {this.checkAuth(this.state.profileChangeUsers, this.props.account.roles) && (
            <Nav.Link href="/profile_change">Profile Change</Nav.Link>
          )}
          {this.checkAuth(this.state.newHiresUsers, this.props.account.roles) && (
            <Nav.Link href="/new_hires">New Hires</Nav.Link>
          )}
        </Nav>
        <Nav className="justify-content-end font-weight-bold" activeKey="/home">
          <Nav.Link
            position="right"
            onClick={() => {
              this.props.logout();
            }}
          >
            <Icon name="log out" size="large" inverted />
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export const ConnectedHeader = connect(
  Header.mapStateToProps,
  Header.mapDispatchToProps
)(Header);
