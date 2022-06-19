GET_TEAMS="GET_TEAMS";
initState=["hola mundo"];

const TeamsReducer=(state=[], action)=>{
    switch(action.type){
        case GET_TEAMS:
            return [...state, action.payload]
        default:
            return state
    }
}