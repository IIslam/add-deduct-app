"use strict";

const bcrypt = require("bcryptjs");

let collection = "users";

module.exports.id = "more-users";

module.exports.up = function (done) {
  let salt = bcrypt.genSaltSync();

  // HR Admin
  this.db.collection(collection).insertOne({
    username: "hr_admin_2",
    active: true,
    password: bcrypt.hashSync("hradmin2", salt),
    roles: ["ADA_HR"],
  });

  // Salary Adjust
  this.db.collection(collection).insertOne({
    username: "salary_adjust_2",
    active: true,
    password: bcrypt.hashSync("salary2", salt),
    roles: ["ADA_SA"],
  });

  // Overtime
  this.db.collection(collection).insertOne({
    username: "overtime_2",
    active: true,
    password: bcrypt.hashSync("overtime2", salt),
    roles: ["ADA_OVT"],
  });

  // Next Expense
  this.db.collection(collection).insertOne({
    username: "net_expenses_2",
    active: true,
    password: bcrypt.hashSync("ntxpns", salt),
    roles: ["ADA_NEX"],
  });

  // Night Shift
  this.db.collection(collection).insertOne({
    username: "night_shift_2",
    active: true,
    password: bcrypt.hashSync("nshft2", salt),
    roles: ["ADA_NSAD"],
  });

  // Lost Hours
  this.db.collection(collection).insertOne({
    username: "lost_hours_2",
    active: true,
    password: bcrypt.hashSync("lohrs2", salt),
    roles: ["ADA_LH"],
  });

  // Overtime Reward Gross
  this.db.collection(collection).insertOne({
    username: "overtime_reward_gross_2",
    active: true,
    password: bcrypt.hashSync("otrwgrs2", salt),
    roles: ["ADA_ORG"],
  });

  // No Show Detailed
  this.db.collection(collection).insertOne({
    username: "no_show_detailed_2",
    active: true,
    password: bcrypt.hashSync("nshowd2", salt),
    roles: ["ADA_NSHD"],
  });

  // No Shows
  this.db.collection(collection).insertOne({
    username: "no_shows_2",
    active: true,
    password: bcrypt.hashSync("nshows2", salt),
    roles: ["ADA_NSH"],
  });

  // Incentives Gross
  this.db.collection(collection).insertOne({
    username: "incentives_gross_2",
    active: true,
    password: bcrypt.hashSync("incntgrs2", salt),
    roles: ["ADA_IG"],
  });

  // Incentives Net
  this.db.collection(collection).insertOne({
    username: "incentives_net_2",
    active: true,
    password: bcrypt.hashSync("incntnet2", salt),
    roles: ["ADA_IN"],
  });

  // Mobile Bill
  this.db.collection(collection).insertOne({
    username: "mobile_bill_2",
    active: true,
    password: bcrypt.hashSync("mblbl2", salt),
    roles: ["ADA_MB"],
  });

  // Sick Leave Detailed
  this.db.collection(collection).insertOne({
    username: "sick_leave_detailed_2",
    active: true,
    password: bcrypt.hashSync("sklvde2", salt),
    roles: ["ADA_SLD"],
  });

  // Sick Leave Cons
  this.db.collection(collection).insertOne({
    username: "sick_leave_cons_2",
    active: true,
    password: bcrypt.hashSync("sklvco2", salt),
    roles: ["ADA_SLC"],
  });

  // UKDE Referral
  this.db.collection(collection).insertOne({
    username: "ukde_referral_2",
    active: true,
    password: bcrypt.hashSync("ukde2", salt),
    roles: ["ADA_UKDE"],
  });

  // Award Gross Amount
  this.db.collection(collection).insertOne({
    username: "award_gross_2",
    active: true,
    password: bcrypt.hashSync("awgrs2", salt),
    roles: ["ADA_AGA"],
  });

  // Gym
  this.db.collection(collection).insertOne({
    username: "gym_2",
    active: true,
    password: bcrypt.hashSync("gym_2", salt),
    roles: ["ADA_GYM"],
  });

  // Penalties Detailed
  this.db.collection(collection).insertOne({
    username: "penalties_detailed_2",
    active: true,
    password: bcrypt.hashSync("pendet2", salt),
    roles: ["ADA_PD"],
  });

  // On Call
  this.db.collection(collection).insertOne({
    username: "on_call_2",
    active: true,
    password: bcrypt.hashSync("call2", salt),
    roles: ["ADA_OC"],
  });

  // Profile Change
  this.db
    .collection(collection)
    .insertOne({
      username: "profile_change_2",
      active: true,
      password: bcrypt.hashSync("profcha2", salt),
      roles: ["ADA_PC"],
    })
    .then(() => done());

  // New Hires
  this.db
    .collection(collection)
    .insertOne({
      username: "new_hires_2",
      active: true,
      password: bcrypt.hashSync("nuhire2", salt),
      roles: ["ADA_NH"],
    })
    .then(() => done());
};

module.exports.down = function (done) {
  this.db
    .collection(collection)
    .drop()
    .then(() => done());
};
