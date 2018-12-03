import { propsTypes } from "./index.js";
import { fromJS } from "immutable"

const defaultStore = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    curPage: 1,
    totalPage: 10
})

export default ( state = defaultStore, action) => {
    switch (action.type) {
        case propsTypes.INPUT_FOCUS: {
            return state.set("focused", true);
        }
        case propsTypes.INPUT_BLUR: {
            return state.set("focused", false);
        }
        case propsTypes.SEARCH_INFO: {
            return state.set("list", action.data).set("totalPage", Math.ceil(action.totalPage));
        }
        case propsTypes.MOUSE_ENTER: {
            return state.set("mouseIn", true);
        }
        case propsTypes.MOUSE_LEAVE: {
            return state.set("mouseIn", false);
        }
        case propsTypes.CHANGE_PAGE: {
            return state.set("curPage", action.nextPage);
        }
        default: break;
    }
    return state;
}