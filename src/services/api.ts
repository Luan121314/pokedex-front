import axios from "axios";
import manifest from "../manifest";

const api = axios.create({
    baseURL: manifest.APIBaseURL
})
export default api;