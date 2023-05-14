import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {publicRequest} from "../requestMethod"

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/user/login",user)
        console.log(res)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
}