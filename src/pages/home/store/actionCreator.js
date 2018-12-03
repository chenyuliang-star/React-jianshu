import axios from "axios";
import { actionTypes } from "./index";



const updateHomeInfoAction = (data) => {
    return {
        type: actionTypes.UPDATA_HOME_INFO,
        topicList: data.topicList,
        infoList: data.infoList,
        recommentsList: data.recommentsList,
        writerList: data.writerList
    }
}
export const getHomeInfoAction = () => {
    return (dispatch) => {
        axios.get("/api/homeInfo.json").then ( (res) => {
            const data = res.data.data;
            dispatch(updateHomeInfoAction(data));
        })
    }
}
export const getListInfoMoreAction = () => {
    return {
        type: actionTypes.LIST_MORE_INFO
    }
}
export const reSortListAction = () => {
    return {
        type: actionTypes.RESORT_LIST
    }
}