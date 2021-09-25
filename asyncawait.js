// async =  defines asyncFunction,
//await = pauses until promise is fulfullied
async function asyncFunction() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("i am resolved!"), 1000)
    });
    const result = await promise; 
    
    console.log(result); 
  }
  asyncFunction();