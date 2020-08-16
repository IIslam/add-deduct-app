"use strict";

const bcrypt = require("bcryptjs");

let collection = "users";

module.exports.id = "initial-users-setup";

module.exports.up = function (done) {
  let salt = bcrypt.genSaltSync();

  // HR Admin
  this.db.collection(collection).insertOne({
    username: "hr_admin_1",
    active: true,
    password: bcrypt.hashSync("hradmin1", salt),
    roles: ["ADA_HR"],
  });

  // Salary Adjustment
  this.db.collection(collection).insertOne({
    username: "salary_adjust_1",
    active: true,
    password: bcrypt.hashSync("salary1", salt),
    roles: ["ADA_SA"],
  });

  // Overtime
  this.db.collection(collection).insertOne({
    username: "overtime_1",
    active: true,
    password: bcrypt.hashSync("overtime1", salt),
    roles: ["ADA_OVT"],
  });

  // Next Expense
  this.db.collection(collection).insertOne({
    username: "net_expenses_1",
    active: true,
    password: bcrypt.hashSync("ntxpns", salt),
    roles: ["ADA_NEX"],
  });

  // Night Shift
  this.db.collection(collection).insertOne({
    username: "night_shift_1",
    active: true,
    password: bcrypt.hashSync("nshft1", salt),
    roles: ["ADA_NSAD"],
  });

  // Lost Hours
  this.db.collection(collection).insertOne({
    username: "lost_hours_1",
    active: true,
    password: bcrypt.hashSync("lohrs1", salt),
    roles: ["ADA_LH"],
  });

  // Overtime Reward Gross
  this.db.collection(collection).insertOne({
    username: "overtime_reward_gross_1",
    active: true,
    password: bcrypt.hashSync("otrwgrs1", salt),
    roles: ["ADA_ORG"],
  });

  // No Show Detailed
  this.db.collection(collection).insertOne({
    username: "no_show_detailed_1",
    active: true,
    password: bcrypt.hashSync("nshowd1", salt),
    roles: ["ADA_NSHD"],
  });

  // No Shows
  this.db.collection(collection).insertOne({
    username: "no_shows_1",
    active: true,
    password: bcrypt.hashSync("nshows1", salt),
    roles: ["ADA_NSH"],
  });

  // Incentives Gross
  this.db.collection(collection).insertOne({
    username: "incentives_gross_1",
    active: true,
    password: bcrypt.hashSync("incntgrs1", salt),
    roles: ["ADA_IG"],
  });

  // Incentives Net
  this.db.collection(collection).insertOne({
    username: "incentives_net_1",
    active: true,
    password: bcrypt.hashSync("incntnet1", salt),
    roles: ["ADA_IN"],
  });

  // Mobile Bill
  this.db.collection(collection).insertOne({
    username: "mobile_bill_1",
    active: true,
    password: bcrypt.hashSync("mblbl1", salt),
    roles: ["ADA_MB"],
  });

  // Sick Leave Detailed
  this.db.collection(collection).insertOne({
    username: "sick_leave_detailed_1",
    active: true,
    password: bcrypt.hashSync("sklvde1", salt),
    roles: ["ADA_SLD"],
  });

  // Sick Leave Cons
  this.db.collection(collection).insertOne({
    username: "sick_leave_cons_1",
    active: true,
    password: bcrypt.hashSync("sklvco1", salt),
    roles: ["ADA_SLC"],
  });

  // UKDE Referral
  this.db.collection(collection).insertOne({
    username: "ukde_referral_1",
    active: true,
    password: bcrypt.hashSync("ukde1", salt),
    roles: ["ADA_UKDE"],
  });

  // Award Gross Amount
  this.db.collection(collection).insertOne({
    username: "award_gross_1",
    active: true,
    password: bcrypt.hashSync("awgrs1", salt),
    roles: ["ADA_AGA"],
  });

  // Gym
  this.db.collection(collection).insertOne({
    username: "gym_1",
    active: true,
    password: bcrypt.hashSync("gym_1", salt),
    roles: ["ADA_GYM"],
  });

  // Penalties Detailed
  this.db.collection(collection).insertOne({
    username: "penalties_detailed_1",
    active: true,
    password: bcrypt.hashSync("pendet1", salt),
    roles: ["ADA_PD"],
  });

  // On Call
  this.db.collection(collection).insertOne({
    username: "on_call_1",
    active: true,
    password: bcrypt.hashSync("call1", salt),
    roles: ["ADA_OC"],
  });

  // Profile Change
  this.db
    .collection(collection)
    .insertOne({
      username: "profile_change_1",
      active: true,
      password: bcrypt.hashSync("profcha1", salt),
      roles: ["ADA_PC"],
    })
    .then(() => done());

  // New Hires
  this.db
    .collection(collection)
    .insertOne({
      username: "new_hires_1",
      active: true,
      password: bcrypt.hashSync("nuhire1", salt),
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
