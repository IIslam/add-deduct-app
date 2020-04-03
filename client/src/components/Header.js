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
      hrUsers: ["admin", "hr"],
      salaryAdjustmentUsers: ["admin", "salary-adjust"],
      overtimeUsers: ["admin", "overtime"],
      netExpensesUsers: ["admin", "net-expenses"],
      nightShiftAmountDaysUsers: ["admin", "night-shift"],
      lostHoursUsers: ["admin", "lost-hours"],
      overtimeRewardGrossUsers: ["admin", "overtime-reward-gross"],
      noShowDetailedUsers: ["admin", "no-show-detailed"],
      noShowsUsers: ["admin", "no-shows"],
      incentivesGrossUsers: ["admin", "incentives-gross"],
      incentivesNetUsers: ["admin", "incentives-net"],
      mobileBillUsers: ["admin", "mobile-bill"],
      sickLeaveDetailedUsers: ["admin", "sick-leave-detailed"],
      sickLeaveConsUsers: ["admin", "sick-leave-cons"],
      ukdeReferralUsers: ["admin", "ukde"],
      awardGrossAmountUsers: ["admin", "award-gross"],
      gymUsers: ["admin", "gym"],
      penaltiesDetailedUsers: ["admin", "penalties"],
      onCallUsers: ["admin", "on-call"],
      profileChangeUsers: ["admin", "profile"]
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
    const found = allowed_users.some(r => user_roles.indexOf(r) > 0);
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
          <label className='font-weight-bold'>Leaver App</label>
        </Navbar.Brand>
        <Nav className="mr-auto font-weight-bold">
          {this.checkAuth(this.state.hrUsers, this.props.account.roles) && (
            <Nav.Link href="/upload_employees">Upload Employees</Nav.Link>
          )}
          {this.checkAuth(this.state.hrUsers, this.props.account.roles) && (
            <Nav.Link href="/upload_users">Upload Users</Nav.Link>
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
          {this.checkAuth(this.state.nightShiftAmountDaysUsers, this.props.account.roles) && (
            <Nav.Link href="/night_shift_amount_days">Night Shift Amount Days</Nav.Link>
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
        </Nav>
        <Nav className="justify-content-end font-weight-bold" activeKey="/home">
          {this.checkAuth(
            this.state.hrUsers,
            this.props.account.roles
          ) && <Nav.Link href="/hr">HR</Nav.Link>}
          <Nav.Link
            position="right"
            onClick={() => {
              this.props.logout();
            }}
          >
            <Icon name="log out" size="large" inverted/>
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
