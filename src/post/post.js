import axios from "axios";
import { store } from "../redux/store";
// import jwt_decode from "jwt-decode";
// import * as redux from "../redux/Auth/authSlice";

export const addPost = async (dispatch, data) => {
    try {
        const token = store.getState().auth.token;
        let res = await axios.post(
            process.env.REACT_APP_BACKEND + "/posts/", 
            data, 
            {
                headers: { 
                    "Authorization": `Bearer ${token}`, 
                }
            }
        );
       
    } catch (error) {
        console.log(error);
        return;
    }
}

export const getTimeline = async (dispatch) => {
    try {
        const token = store.getState().auth.token;
        let res = await axios.get(process.env.REACT_APP_BACKEND + "/posts/timeline", {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (res.status !== 200) {
            localStorage.removeItem("token");
            return res;  
        }
        let newPost = res.data;
        return newPost;
    } catch (error) {
        console.log(error);
        return;
    }
}

export const UploadPost = async (data) => {
    try {
        const token = store.getState().auth.token;
        let res = await axios.post(
            process.env.REACT_APP_BACKEND + "/upload", 
            data, 
            {headers: { "Authorization": `Bearer ${token}`, "Content-Type":'multipart/form-data'}}
        );
        if (res.status !== 200) {
            localStorage.removeItem("token");
            return res;  
        }
        let newPost = res.data;
        return newPost;
        // localStorage.setItem("token", token);
        // dispatch(redux.login(token));
    } catch (error) {
        console.log(error);
        return;
    }
}
