    import axios from "axios";
    import store from "../Store/store";

    const api = axios.create({
        baseURL: "https://be-econusantara.vercel.app/v1/api",
        headers: {
            "Content-Type": "application/json",
        },
    });

    api.interceptors.request.use(
        async function (config) {
            const token = store.getState().Auth.token;
            console.log(token)

            if (token) {
                config.headers["Authorization"] = token;
            }

            if (config.data instanceof FormData) {
                config.headers["Content-Type"] = "multipart/form-data";
            }

            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    // Tambahkan interceptor respons
    api.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            console.log("error interceptor:", error);

            return Promise.reject(error);
        }
    );

    export default api;
