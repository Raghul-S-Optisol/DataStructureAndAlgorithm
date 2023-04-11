primeNumber(17)
function primeNumber(n){
    var count=1
    for(i=2;i<=n;i++){
        if(n%2==0){
            count++;
        }  
    }
    if(count==1){
        console.log(n +" is a prime number")
    }
    else {
        console.log(n +" is not a prime number")
    }
}
console.log("prime number between the range")
for(j=2;j<100;j++){
    primeNumber(j);
}