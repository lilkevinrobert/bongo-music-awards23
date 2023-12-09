import axios from "axios";

//Axios.defaults.headers.common['X-CSRF-TOKEN'] = token_var;

export default axios.create({
    baseURL: "https://api.bongomusicawards.co.tz/",
    withCredentials: true,
    withXSRFToken: true, // these line is very important
});

