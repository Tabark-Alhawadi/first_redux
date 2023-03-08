import { createStore } from "redux"

const reducer =(state = { counter:0},action) => {
    if (action.type == "inc"){
        return {counter:state.counter+1}
    };
    if (action.type == "dec"){
        return {counter:state.counter-1}
    };
    if (action.type == "add"){
        return {counter:state.counter+action.addValue}
    };
    return state ;
}
const store = createStore(reducer);



export default store;
