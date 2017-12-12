export function setUserId() {
  return dispatch=>{
    setTimeout(() =>{
      dispatch({
        type:'ADD',
        payload:100
      });
    },2000);
  }
}
