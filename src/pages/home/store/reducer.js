import { fromJS } from "immutable"
import { actionTypes } from "./index";

const defaultStore = fromJS({
     topicList: [],
    infoList: [],
    recommentsList: [],
    writerList: []
})

export default ( state = defaultStore, action) => {
    switch (action.type) {
        case actionTypes.UPDATA_HOME_INFO: {
            return state.merge({
                topicList: fromJS(action.topicList),
                infoList: fromJS(action.infoList),
                recommentsList: fromJS(action.recommentsList),
                writerList: fromJS(action.writerList)
            })
        }
        case actionTypes.LIST_MORE_INFO: {
            const jsInfoList = state.get("infoList").toJS();
            let newInfoList = [...jsInfoList, ...jsInfoList];
            return state.set("infoList", fromJS(newInfoList)) ;
        }
        case actionTypes.RESORT_LIST: {
            const jsWriterList = state.get("writerList").toJS();
            let  newInfoList = [...jsWriterList];
            newInfoList.sort( () => {
                return !!(Math.random() -0.5);
            })
            return state.set("writerList", fromJS(newInfoList)) ;
        }
        default: break;
    }
    return state;
}