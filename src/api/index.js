import axios from "axios";

const http = axios.create({
  baseURL: "https://openexchangerates.org/api/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE"
  },
});

const appId = "cd9baf78c4234b2f87833bdc52987865";

// Deal with the response to make it easy to use
http.interceptors.response.use(
    (res) => ({ status: true, data: res.data }),
    (err) => {
        console.log('Error message', err);
        return { status: false, errMsg: err };
    }
);


const getRateByCurrency = (currency) => {
  return http.get(
    `yschen25/Interview/memberData?app_id=${appId}&base=${currency}`
  );
};

export default {
  getRateByCurrency,
};