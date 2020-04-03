const SAT = {
    "NAME": "Salary Adjustment",
    "COLLECTION_NAME": "salary-adjustment",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Roles", "Name", "Basic Net", "GB", "Net Salary", "New Basic Net Salary", "GB New", "Total", "Effective Date"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Roles", "Name", "Basic Net", "GB", "Net Salary", "New Basic Net Salary", "GB New", "Total", "Effective Date", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/ce92ff81cc4b7a041251510e3569063b/salary-adjustment-sample.xlsx",
}

const OT = {
    "NAME": "Overtime",
    "COLLECTION_NAME": "overtime",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Overtime Hours", "Logged Out"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Overtime Hours", "Logged Out", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/85ac0ebe053428770a4d1e4feca5dd50/overtime-sample.xlsx",
}

const NET = {
    "NAME": "Net Expenses",
    "COLLECTION_NAME": "net-expenses",
    "TABLE_HEADER": ["Vendor", "ID", "Amount"],
    "PANE_KEYS": ["Vendor", "ID", "Amount", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/1d814ff23a3bc8281c0268704f1b422f/net-expenses-sample.xlsx"
}

const NSADT = {
    "NAME": "Night Shift Amount Days",
    "COLLECTION_NAME": "night-shift-amount-days",
    "TABLE_HEADER": ["Vendor", "ID", "Night Shift Amount", "Night Shift Days"],
    "PANE_KEYS": ["Vendor", "ID", "Night Shift Amount", "Night Shift Days", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/94a03f78d8e086768ba1b2599bfa75c0/night-shift-amount-days-sample.xlsx"
}

const LHT = {
    "NAME": "Lost Hours",
    "COLLECTION_NAME": "lost-hours",
    "TABLE_HEADER": ["Vendor", "ID", "Lost Hours Deduction", "Lost Hours Refund"],
    "PANE_KEYS": ["Vendor", "ID", "Lost Hours Deduction", "Lost Hours Refund", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/3f139dabfbf7e336cd96854b3e9a886c/lost-hours-sample.xlsx"
}

const ORGT = {
    "NAME": "Overtime Reward Gross",
    "COLLECTION_NAME": "overtime-reward-gross",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Name", "Total Reward Payment"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Name", "Total Reward Payment", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/377b20bc67db15c40ab2a40c1141f084/overtime-reward-gross-sample.xlsx"
}

const NSDT = {
    "NAME": "No Show Detailed",
    "COLLECTION_NAME": "no-show-detailed",
    "TABLE_HEADER": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor"],
    "PANE_KEYS": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/53fbb6f30b85f76fcaa252a6c6ef81f6/no-show-detailed-sample.xlsx"
}

const NST = {
    "NAME": "No Shows",
    "COLLECTION_NAME": "no-shows",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Total Deducted Days", "Refunded Days"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Total Deducted Days", "Refunded Days", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/13ed7848e1118b191f16c1b0ca62c31f/no-shows-sample.xlsx"
}

const IGT = {
    "NAME": "Incentives Gross",
    "COLLECTION_NAME": "incentives-gross",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Name", "Total Gross Incentives", "Account"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Name", "Total Gross Incentives", "Account", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/8e3c913868ae9bb82a12a98c397cacf6/incentives-gross-sample.xlsx"
}

const INT = {
    "NAME": "Incentives Net",
    "COLLECTION_NAME": "incentives-net",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Name", "Amount"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Name", "Amount", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/c9277b6545431c33c4812057c9143c08/incentives-net-sample.xlsx"
}

const MBT = {
    "NAME": "Mobile Bill",
    "COLLECTION_NAME": "mobile-bill",
    "TABLE_HEADER": ["Staff ID", "Name", "Total Open Amount", "Vendor"],
    "PANE_KEYS": ["Staff ID", "Name", "Total Open Amount", "Vendor", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/0f4bdd70fb39cc40d2200e27785f5695/mobile-bill-sample.xlsx"
}

const SLDT = {
    "NAME": "Sick Leave Detailed",
    "COLLECTION_NAME": "sick-leave-detailed",
    "TABLE_HEADER": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor"],
    "PANE_KEYS": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/fded0caf1f0c6088e5663fd369aab936/sick-leave-detailed-sample.xlsx"
}

const SLCT = {
    "NAME": "Sick Leave Cons",
    "COLLECTION_NAME": "sick-leave-cons",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Sum of Sick to be Deducted"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Sum of Sick to be Deducted", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/a5eb7a97362f869730d61425ca62cf2f/sick-leave-cons-sample.xlsx"
}

const UKDET = {
    "NAME": "UK-DE Referral Prog Net Amount",
    "COLLECTION_NAME": "ukde-referral-prog-net-amount",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Net"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Net", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/59d9b0b92268ec3379b0eaf62e820fe8/ukde-referral-prog-net-amount-sample.xlsx"
}

const AGAT = {
    "NAME": "Award Gross Amount",
    "COLLECTION_NAME": "award-gross-amount",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Names", "Amount of Reward"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Names", "Amount of Reward", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/6f84eab7f0127677d7a57f65e4b69ee1/award-gross-amount-sample.xlsx"
}

const GYMT = {
    "NAME": "GYM",
    "COLLECTION_NAME": "gym",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Amount"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Amount", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/442ce6c8851cecba94b5b2d1c3a2d515/gym-sample.xlsx"
}

const PDT = {
    "NAME": "Penalties Detailed",
    "COLLECTION_NAME": "penalties-detailed",
    "TABLE_HEADER": ["Vendor", "ID", "Violater Name", "Violation Type", "Incident Details", "Incident Date", "Penalty Applied", "Penalty Receiving Date"],
    "PANE_KEYS": ["Vendor", "ID", "Violater Name", "Violation Type", "Incident Details", "Incident Date", "Penalty Applied", "Penalty Receiving Date", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/f894c230d86d65a4c6bf5e06189c7eea/penalties-detailed-sample.xlsx"
}

const OCT = {
    "NAME": "On Call",
    "COLLECTION_NAME": "on-call",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Days"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Days", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/678ccb547ee460a46cfb1cdaf92b7436/on-call-sample.xlsx"
}

const PCT = {
    "NAME": "Profile Change",
    "COLLECTION_NAME": "profile-change",
    "TABLE_HEADER": ["ID", "Vendor", "Name", "Effective Date", "Account", "New Basic", "New GB", "New Total"],
    "PANE_KEYS": ["ID", "Vendor", "Name", "Effective Date", "Account", "New Basic", "New GB", "New Total", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e8396d671713937059e50e9/cb871660388e3bbea992c6b22de4339b/profile-change-sample.xlsx"
}

module.exports = {
    SAT,            // Salary Adjustment Team
    OT,             // Overtime Team
    NET,            // Net Expenses Team
    NSADT,          // Night Shift Amount Days Team
    LHT,            // Lost Hours Team
    ORGT,           // Overtime Reward Gross Team
    NSDT,           // No Show Detailed Team
    NST,            // No Shows Team
    IGT,            // Incentives Gross Team
    INT,            // Incentives Net Team
    MBT,            // Mobile Bill Team
    SLDT,           // Sick Leave Detailed Team
    SLCT,           // Sick Leave Cons Team
    UKDET,          // UKDE Referral Prog Net Amount Team
    AGAT,           // Award Gross Amount Team
    GYMT,           // Gym Team 
    PDT,            // Penalties Detailed Team
    OCT,            // On Call Team
    PCT             // Profile Change Team
}