export default function (state = null,action){
    switch(action.type){
        case "USER_SELECTED":
            return action.data;
        break;
    }
    return state;
}