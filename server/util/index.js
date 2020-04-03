const _ = require("lodash");

const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );

const getSubmissionDate = () => {

  // New Date Object
  let submissionDate = new Date(Date.now());

  let date = ("0" + submissionDate.getDate()).slice(-2);
  let month = ("0" + (submissionDate.getMonth() + 1)).slice(-2);
  let year = submissionDate.getFullYear();
  let hours = submissionDate.getHours();
  let minutes = submissionDate.getMinutes();

  let submitDate = date + '-' + month + '-' + year;
  let submitTime = hours + ':' + minutes;
  let submittedAt = submitDate + ' @ ' + submitTime;
  
  return submittedAt;
}

const normalizeData = (keys, data, user) => {
  // 1: convert array of arrays to array of objects
  let converted = data.map(entry => {
    return _.toPlainObject(entry);
  });

  // 2: replace numbered keys with the actual keys
  let replaced = converted.map(entry => {
    return renameKeys(keys, entry);
  });

  // 3: add last submitted by and when
  let normalized = replaced.map(entry => {
    entry['submittedBy'] = user.username;
    entry['submittedAt'] = getSubmissionDate();
    return entry;
  })

  return normalized;
};

module.exports = {
  normalizeData
};
