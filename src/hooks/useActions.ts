import { useDispatch } from "react-redux"
import * as actions from "../store/action-creators/BlogsStore"
import { bindActionCreators } from "redux"

const data = {...actions}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(data, dispatch)
}


