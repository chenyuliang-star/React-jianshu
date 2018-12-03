import { fromJS } from 'immutable'
import { actionTypes } from './index';

const defaultStore = fromJS({
    title: '',
    content: ''
     
})

export default ( state = defaultStore, action) => {
    switch (action.type) {
        case actionTypes.UPDATA_DETAIL_ACTION: {
            return state.merge({
                title: fromJS(action.data.title),
                content: fromJS(action.data.content)
            })
        }
        default: break;
    }
    return state;
}