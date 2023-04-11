varScoping();
letScoping();
varAndLetScoping();

function varScoping() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log("var will change to",x,"inside the block");
  }
  console.log("var still stores", x,"outside the block"); 
}

function letScoping() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log("let will change to",x,"inside the block"); 
  }
  console.log("let again restores to",x,"outside the block"); 
}

function varAndLetScoping(){
  var x = 1;
  if (true) {
    let x = 2;
    console.log("var will change to",x,"inside the block-let"); 
  }
  console.log("var again restores to",x,"outside the block"); 
}