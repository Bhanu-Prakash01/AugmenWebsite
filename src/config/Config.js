import ReedemPoints from "../Pages/Admin/Customer/ReedemPoints";

const version = import.meta.env.VITE_API_VERSION;
const baseUrl = import.meta.env.VITE_API_URL;

export const CONFIG_OBJ = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + sessionStorage.getItem("adminToken")
  }
};
export const CONFIG_OBJ_DOC = {
  headers: {
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
    "Authorization": "Bearer " + sessionStorage.getItem("adminToken")
  }
};
const config = {
  ApiBaseUrl: baseUrl,
};


export default config;
