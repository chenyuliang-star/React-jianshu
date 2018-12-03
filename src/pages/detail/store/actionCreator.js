import axios from "axios";
import { actionTypes } from "./index.js";



const updataDetailAction = (data) => {
    return {
        type: actionTypes.UPDATA_DETAIL_ACTION,
        data
    }
}

export const getDetailAciton = () => {
    return (dispatch) => {
        axios.get("/api/detailInfo.json").then ( (res) => {
            const data = res.data.data; 
            dispatch(updataDetailAction(data));
           
        })
    }
}