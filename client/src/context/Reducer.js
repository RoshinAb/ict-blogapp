const Reducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN_START': {
            console.log(action.payload)
            
            return{
            user:null, isFetching:true,error:false,

        }}
        
        case 'LOGIN_SUCCESS':{
            console.log(action.payload)
            
            return{
            user:action.payload, isFetching:false,error:false
            
        }}
        
        case 'LOGIN_FAILURE':{
            console.log(action.payload)
            
            return{
            user:null, isFetching:false,error:true
        }
    }

    case 'LOGOUT':{
        console.log(action.payload)
        
        return{
        user:null, isFetching:false,error:false
    }
}
case 'UPDATE_START': {
    console.log(action.payload)
    
    return{
    ...state,
    isFetching:true

}}

case 'UPDATE_SUCCESS':{
    console.log(action.payload)
    
    return{
    user:action.payload, isFetching:false,error:false
    
}}

case 'UPDATE_FAILURE':{
    console.log(action.payload)
    
    return{
    user:state.user, isFetching:false,error:true
}
}
        default: return state
    }
}

export default Reducer;