export function setUserId() {
  // return dispatch=>{
  //   setTimeout(() =>{
  //     dispatch({
  //       type:'ADD',
  //       payload:100
  //     });
  //   },2000);
  // }

  return {
    type:'ADD',
    payload: new Promise((resolve,reject) =>{
        setTimeout(() => {
          resolve(10);
        },2000)
    })
  };
}
