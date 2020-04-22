"use strict";

module.exports.id = 'initial-collections-setup';

module.exports.up = function (done) {

    // Salary Adjustment
    this.db.createCollection('salary-adjustment')

    // Overtime
    this.db.createCollection('overtime')

    // Net Expenses
    this.db.createCollection('net-expenses')

    // Night Shift Amount
    this.db.createCollection('night-shift-amount')

    // Night Shift Days
    this.db.createCollection('night-shift-days')

    // Lost Hours
    this.db.createCollection('lost-hours')

    // Overtime Reward Gross
    this.db.createCollection('overtime-reward-gross')

    // No Show Detailed
    this.db.createCollection('no-show-detailed')

    // No Shows
    this.db.createCollection('no-shows')

    // Incentives Gross
    this.db.createCollection('incentives-gross')

    // Incentives Net
    this.db.createCollection('incentives-net')

    // Mobile Bill
    this.db.createCollection('mobile-bill')

    // Sick Leave Detailed
    this.db.createCollection('sick-leave-detailed')

    // Sick Leave Cons
    this.db.createCollection('sick-leave-cons')

    // UK-DE Referral Prog Net Amount
    this.db.createCollection('ukde-referral-prog-net-amount')

    // Award Gross Amount
    this.db.createCollection('award-gross-amount')

    // GYM
    this.db.createCollection('gym')

    // Penalties Detailed
    this.db.createCollection('penalties-detailed')

    // On Call
    this.db.createCollection('on-call')

    // Profile Change
    this.db.createCollection('profile-change')

    // New Hires
    this.db.createCollection('new-hires')
        .then(() => done())
}

module.exports.down = function (done) {

    this.db
        .collection('salary-adjustment')
        .drop()

    this.db
        .collection('overtime')
        .drop()

    this.db
        .collection('net-expenses')
        .drop()

    this.db
        .collection('night-shift-amount')
        .drop()

    this.db
        .collection('night-shift-days')
        .drop()

    this.db
        .collection('lost-hours')
        .drop()

    this.db
        .collection('overtime-reward-gross')
        .drop()

    this.db
        .collection('no-show-detailed')
        .drop()

    this.db
        .collection('no-shows')
        .drop()

    this.db
        .collection('incentives-gross')
        .drop()

    this.db
        .collection('incentives-net')
        .drop()

    this.db
        .collection('mobile-bill')
        .drop()

    this.db
        .collection('sick-leave-detailed')
        .drop()

    this.db
        .collection('sick-leave-cons')
        .drop()

    this.db
        .collection('ukde-referral-prog-net-amount')
        .drop()

    this.db
        .collection('award-gross-amount')
        .drop()

    this.db
        .collection('gym')
        .drop()

    this.db
        .collection('penalties-detailed')
        .drop()

    this.db
        .collection('on-call')
        .drop()

    this.db
        .collection('profile-change')
        .drop()

    this.db
        .collection('new-hires')
        .drop()
        .then(() => done())
}
