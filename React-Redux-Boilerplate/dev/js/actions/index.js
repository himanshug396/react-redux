export const selectUser = (user) =>{
    console.log('clicked', user.id)
    return {
        type : 'USER_SELECTED',    //object with a type 
        data : user                 // payload
    }
};
