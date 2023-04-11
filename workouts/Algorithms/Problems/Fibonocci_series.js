a=1,b=1;
var Sum;
console.log(a);
console.log(b);
for(i=0;i<8;i++){
    sum=a+b
    console.log(sum);
    a=b;
    b=sum;
}

// using recursion
n=1,m=1;
var val=8;
console.log("using recursion");
console.log(n);
console.log(m);
fib(n,m,val)
function fib(n,m,N){
  fir=n,sec=m,sum;
 if(N>0){
    sum=fir+sec;
    console.log(sum);
    fir=sec;
    sec=sum;
    fib(fir,sec,N-1)
 }
}


