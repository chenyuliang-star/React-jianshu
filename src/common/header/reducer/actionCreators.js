import { propsTypes } from "./index.js";
import { fromJS } from "immutable";
import axios from "axios"



const searchInfo = (data) => {
    return {
        type: propsTypes.SEARCH_INFO,
        data: fromJS(data),
        totalPage: Math.ceil(data.length /10)
    }
}
export const  inputFocus = () => {
    return {
        type: propsTypes.INPUT_FOCUS
    }
}
export const inputBlur = () => {
    return {
        type: propsTypes.INPUT_BLUR
    }
}
export const mouseEnter = () => {
    return {
        type: propsTypes.MOUSE_ENTER
    }
}
export const mouseLeave = () => {
    return {
        type: propsTypes.MOUSE_LEAVE
    }
}
export const changePage = (nextPage) => {
    return {
        type: propsTypes.CHANGE_PAGE,
        nextPage
    }
}
export const getSearchInfo = () => {
    return (dispatch) => {
        axios.get("/api/searchInfo.json").then( (res) => {
            const data = res.data.data;
            dispatch(searchInfo(data));
        }).catch( (er) => { console.log(er) })
    }
}