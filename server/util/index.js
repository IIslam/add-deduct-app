const _ = require("lodash");
const moment = require("moment");

const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getSubmissionDate = () => {
  // New Date Object
  let submissionDate = new Date(Date.now());

  let month = submissionDate.getMonth();
  let year = submissionDate.getFullYear();
  let submittedAt = MONTHS[month] + " " + year;

  return submittedAt;
};

const normalizeData = (keys, data, user) => {
  // 1: convert array of arrays to array of objects
  let converted = data.map((entry) => {
    return _.toPlainObject(entry);
  });

  // 2: replace numbered keys with the actual keys
  let replaced = converted.map((entry) => {
    return renameKeys(keys, entry);
  });

  // 3: add last submitted by and when
  let normalized = replaced.map((entry) => {
    entry["submittedBy"] = user.username;
    entry["submittedAt"] = getSubmissionDate();
    return entry;
  });

  return normalized;
};

const formatDate = (date) => {
  return moment(date).format("YYYY/MM/DD");
};

module.exports = {
  formatDate,
  normalizeData,
};
