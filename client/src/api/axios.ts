import axios from "axios";

//Axios.defaults.headers.common['X-CSRF-TOKEN'] = token_var;

export default axios.create({
    // baseURL: "https://api.bongomusicawards.co.tz/api/",
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: true,
    withXSRFToken: true, // these line is very important
});

