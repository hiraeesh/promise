
const raeesh = new Promise((resolve,reject)=>{
    
    let name = 'python';
       
       if(name){
           resolve(name)
       }else{
           reject('Error come')
       }

})

raeesh.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
});
