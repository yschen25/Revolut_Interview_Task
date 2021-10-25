const jsonp = require("jsonp");

const appId = "cd9baf78c4234b2f87833bdc52987865";

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
