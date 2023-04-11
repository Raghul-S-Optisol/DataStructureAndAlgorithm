try{
     var a= ["34","32","5","31","24","44","67"];
     console.log(b)
}catch(e){
    console.log(e); 
}

// using throw
 try {
   throw "throw throws this error";
   } catch (error) {
    console.error(error);
  }

  // try catch and finally

  try {
   throw "throw throws this error";
   } finally{
    console.log("finally block"); 
  }