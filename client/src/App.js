import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { authenticationReducer, registrationReducer } from "./state";
import { PersistGate } from "redux-persist/integration/react";

import { ConnectedHeader, ConnectedPrivateRoute } from "./components";

import {
  UploadEmployeesScreen,
  UploadUsersScreen,
  RegistrationScreen,
  AuthenticationScreen,
  SalaryAdjustmentScreen,
  OvertimeScreen,
  NetExpensesScreen,
  NightShiftAmountDaysScreen,
  LostHoursScreen,
  OvertimeRewardGrossScreen,
  NoShowDetailedScreen,
  NoShowsScreen,
  IncentivesGrossScreen,
  IncentivesNetScreen,
  MobileBillScreen,
  SickLeaveDetailedScreen,
  SickLeaveConsScreen,
  UKDEReferralProgNetAmountScreen,
  AwardGrossAmountScreen,
  GYMScreen,
  PenaltiesDetailedScreen,
  OnCallScreen,
  ProfileChangeScreen,
  HRScreen
} from "./screens";

import "semantic-ui-css/semantic.min.css";
const welcomeImg = require("../src/assets/images/login-welcome.png");

const persistConfig = {
  key: "add-deduct-app",
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ auth: authenticationReducer, reg: registrationReducer })
);

export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
);
let persistor = persistStore(store);

class App extends Component {
  Props: {
    isAuthenticated?: boolean,
    account?: Account
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            <ConnectedHeader />
            <Router>
              <Switch>
                <Route
                  path="/"
                  exact
                  component={props => (
                    <AuthenticationScreen
                      {...props}
                      headerText="Sign in to Addition Deduction App"
                      subheaderText="Please insert your login details below"
                      loginText="Sign in"
                      signupHref="/signup"
                      signupText="Sign up"
                      signupHeader="Welcome to Addition Deduction App"
                      signupSubheader="This is outsource Addition Deduction App System "
                      usernamePlaceholder="Organization email"
                      passwordPlaceholder="Your password"
                      logo={null}
                      loginWelcomeImg={welcomeImg}
                    />
                  )}
                />
                <Route
                  path="/signup"
                  component={props => (
                    <RegistrationScreen
                      {...props}
                      headerText="Create an account in Addition Deduction App"
                      verifyButtonText="Verify code"
                      verifyHeader="Verification"
                      verifyText="Please enter the 6-digit code we sent you on email"
                      getCodeText="Get Signup Code"
                      subheaderText="Please provide the required details below"
                      loginText="Sign in"
                      loginHref="/"
                      signupText="Sign up"
                      signupHeader="Welcome to Addition Deduction App"
                      signupSubheader="This is outsource Addition Deduction App System"
                      usernamePlaceholder="Enter your Organization Email"
                      userCodePlaceholder="Secret code"
                      passwordPlaceholder="Create a Password"
                      createPasswordHeader="Create Your Password"
                      createPasswordText="Password must be at least 8 characters."
                      codeRequested={false}
                      logo={null}
                      signupWelcomeImg={welcomeImg}
                    />
                  )}
                />
                <ConnectedPrivateRoute
                  allowed={["admin", "hr"]}
                  path="/hr"
                  exact
                  component={HRScreen}
                />
                <ConnectedPrivateRoute
                  allowed={["admin", "hr"]}
                  path="/upload_users"
                  exact
                  component={UploadUsersScreen}
                />
                <ConnectedPrivateRoute
                  allowed={["admin", "hr"]}
                  path="/upload_employees"
                  exact
                  component={UploadEmployeesScreen}
                />
                <ConnectedPrivateRoute
                  path="/salary_adjust"
                  allowed={["admin", "salary-adjust"]}
                  component={SalaryAdjustmentScreen}
                />
                <ConnectedPrivateRoute
                  path="/overtime"
                  allowed={["admin", "overtime"]}
                  component={OvertimeScreen}
                />
                <ConnectedPrivateRoute
                  path="/net_expenses"
                  allowed={["admin", "net-expenses"]}
                  component={NetExpensesScreen}
                />
                <ConnectedPrivateRoute
                  path="/night_shift_amount_days"
                  allowed={["admin", "night-shift"]}
                  component={NightShiftAmountDaysScreen}
                />
                <ConnectedPrivateRoute
                  path="/lost_hours"
                  allowed={["admin", "lost-hours"]}
                  component={LostHoursScreen}
                />
                <ConnectedPrivateRoute
                  path="/overtime_reward_gross"
                  allowed={["admin", "overtime-reward-gross"]}
                  component={OvertimeRewardGrossScreen}
                />
                <ConnectedPrivateRoute
                  path="/no_show_detailed"
                  allowed={["admin", "no-show-detailed"]}
                  component={NoShowDetailedScreen}
                />
                <ConnectedPrivateRoute
                  path="/no_shows"
                  allowed={["admin", "no-shows"]}
                  component={NoShowsScreen}
                />
                <ConnectedPrivateRoute
                  path="/incentives_gross"
                  allowed={["admin", "incentives-gross"]}
                  component={IncentivesGrossScreen}
                />
                <ConnectedPrivateRoute
                  path="/incentives_net"
                  allowed={["admin", "incentives-net"]}
                  component={IncentivesNetScreen}
                />
                <ConnectedPrivateRoute
                  path="/mobile_bill"
                  allowed={["admin", "mobile-bill"]}
                  component={MobileBillScreen}
                />
                <ConnectedPrivateRoute
                  path="/sick_leave_detailed"
                  allowed={["admin", "sick-leave-detailed"]}
                  component={SickLeaveDetailedScreen}
                />
                <ConnectedPrivateRoute
                  path="/sick_leave_cons"
                  allowed={["admin", "sick-leave-cons"]}
                  component={SickLeaveConsScreen}
                />
                <ConnectedPrivateRoute
                  path="/ukde_referral"
                  allowed={["admin", "ukde"]}
                  component={UKDEReferralProgNetAmountScreen}
                />
                <ConnectedPrivateRoute
                  path="/award_gross_amount"
                  allowed={["admin", "award-gross"]}
                  component={AwardGrossAmountScreen}
                />
                <ConnectedPrivateRoute
                  path="/gym"
                  allowed={["admin", "gym"]}
                  component={GYMScreen}
                />
                <ConnectedPrivateRoute
                  path="/penalties_detailed"
                  allowed={["admin", "penalties"]}
                  component={PenaltiesDetailedScreen}
                />
                <ConnectedPrivateRoute
                  path="/on_call"
                  allowed={["admin", "on-call"]}
                  component={OnCallScreen}
                />
                <ConnectedPrivateRoute
                  path="/profile_change"
                  allowed={["admin", "profile"]}
                  component={ProfileChangeScreen}
                />
              </Switch>
            </Router>
          </>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
