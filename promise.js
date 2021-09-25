// Promise :
// -resolve
// -reject 
// -pending

function func1(){
    return new Promise(function (resolve,reject){
        setTimeout (() =>{
            const error = false;
            if(!error) {
                console.log('Your Promise is resolved');
                resolve();
            }
            else {
                console.log('Your Promise is not resolved');
                reject('Sorry');
                
            }


        },3000);
    })
}

func1().then(function(){
    console.log(" Haary Thanks");
})