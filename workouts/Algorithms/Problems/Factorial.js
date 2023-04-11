var a=5
fact=1;
for(i=1;i<=a;i++){
    fact=fact*i;
}
console.log("factorial of",a,"is",fact)

// using recursion
num=5;
console.log("factorial of",num,"using recursion is",recursion(num));
function recursion(n){
if(n==0)
return 1;
return n*(recursion(n-1))
}