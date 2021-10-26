const jsonp = require("jsonp");

const appId = "e482fdb60e684041a8710c2b5d241adb";

const getRateByCurrency = (currency) => {
  return new Promise((resolve, reject) => {
    jsonp(
      `https://openexchangerates.org/api/latest.json?app_id=${appId}`,
      null,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

export default { getRateByCurrency };
