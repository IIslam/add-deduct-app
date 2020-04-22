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
  UploadUsersScreen,
  RegistrationScreen,
  AuthenticationScreen,
  SalaryAdjustmentScreen,
  OvertimeScreen,
  NetExpensesScreen,
  NightShiftAmountScreen,
  NightShiftDaysScreen,
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
  NewHiresScreen,
  HRScreen,
  HRFilesScreen
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
                  allowed={["ADA_HR"]}
                  path="/hr"
                  exact
                  component={HRScreen}
                />
                <ConnectedPrivateRoute
                  allowed={["ADA_HR"]}
                  path="/hr_files"
                  component={HRFilesScreen}
                />
                <ConnectedPrivateRoute
                  allowed={["ADA_HR"]}
                  path="/upload_users"
                  exact
                  component={UploadUsersScreen}
                />
                <ConnectedPrivateRoute
                  path="/salary_adjust"
                  allowed={["ADA_SA"]}
                  component={SalaryAdjustmentScreen}
                />
                <ConnectedPrivateRoute
                  path="/overtime"
                  allowed={["ADA_OVT"]}
                  component={OvertimeScreen}
                />
                <ConnectedPrivateRoute
                  path="/net_expenses"
                  allowed={["ADA_NEX"]}
                  component={NetExpensesScreen}
                />
                <ConnectedPrivateRoute
                  path="/night_shift_amount"
                  allowed={["ADA_NSAD"]}
                  component={NightShiftAmountScreen}
                />
                <ConnectedPrivateRoute
                  path="/night_shift_days"
                  allowed={["ADA_NSAD"]}
                  component={NightShiftDaysScreen}
                />
                <ConnectedPrivateRoute
                  path="/lost_hours"
                  allowed={["ADA_LH"]}
                  component={LostHoursScreen}
                />
                <ConnectedPrivateRoute
                  path="/overtime_reward_gross"
                  allowed={["ADA_ORG"]}
                  component={OvertimeRewardGrossScreen}
                />
                <ConnectedPrivateRoute
                  path="/no_show_detailed"
                  allowed={["ADA_NSHD"]}
                  component={NoShowDetailedScreen}
                />
                <ConnectedPrivateRoute
                  path="/no_shows"
                  allowed={["ADA_NSH"]}
                  component={NoShowsScreen}
                />
                <ConnectedPrivateRoute
                  path="/incentives_gross"
                  allowed={["ADA_IG"]}
                  component={IncentivesGrossScreen}
                />
                <ConnectedPrivateRoute
                  path="/incentives_net"
                  allowed={["ADA_IN"]}
                  component={IncentivesNetScreen}
                />
                <ConnectedPrivateRoute
                  path="/mobile_bill"
                  allowed={["ADA_MB"]}
                  component={MobileBillScreen}
                />
                <ConnectedPrivateRoute
                  path="/sick_leave_detailed"
                  allowed={["ADA_SLD"]}
                  component={SickLeaveDetailedScreen}
                />
                <ConnectedPrivateRoute
                  path="/sick_leave_cons"
                  allowed={["ADA_SLC"]}
                  component={SickLeaveConsScreen}
                />
                <ConnectedPrivateRoute
                  path="/ukde_referral"
                  allowed={["ADA_UKDE"]}
                  component={UKDEReferralProgNetAmountScreen}
                />
                <ConnectedPrivateRoute
                  path="/award_gross_amount"
                  allowed={["ADA_AGA"]}
                  component={AwardGrossAmountScreen}
                />
                <ConnectedPrivateRoute
                  path="/gym"
                  allowed={["ADA_GYM"]}
                  component={GYMScreen}
                />
                <ConnectedPrivateRoute
                  path="/penalties_detailed"
                  allowed={["ADA_PD"]}
                  component={PenaltiesDetailedScreen}
                />
                <ConnectedPrivateRoute
                  path="/on_call"
                  allowed={["ADA_OC"]}
                  component={OnCallScreen}
                />
                <ConnectedPrivateRoute
                  path="/profile_change"
                  allowed={["ADA_PC"]}
                  component={ProfileChangeScreen}
                />
                <ConnectedPrivateRoute
                  path="/new_hires"
                  allowed={["ADA_NH"]}
                  component={NewHiresScreen}
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
