import axios from "axios";
// import jwt_decode from "jwt-decode";
// import * as redux from "../redux/Auth/authSlice";

export const addPost = async (dispatch, {description}) => {
    try {
        let res = await axios.post(process.env.REACT_APP_BACKEND + "/posts/", { description });
        // let res = await axios.post(process.env.REACT_APP_BACKEND + "/auth/login", { email: newUser.email, password: newUser.password });
        if (res.status !== 200) {
            // localStorage.removeItem("token");
            return res;
        }
        let newPost = res.data.success.newPost;
        console.log(newPost);
        // localStorage.setItem("token", token);
        // dispatch(redux.login(token));
    } catch (error) {
        console.log(error);
        return;
    }
}
