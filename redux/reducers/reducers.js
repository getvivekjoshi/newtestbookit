import { combineReducers } from "redux";
import { allRoomReducers, roomDetailsReducer } from "./roomReducers";


const reducer = combineReducers({
allRooms:allRoomReducers,
roomDetails:roomDetailsReducer
})

export default reducer