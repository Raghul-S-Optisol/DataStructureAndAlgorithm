s="dad"
len=s.length
str=""
for(i=len;i>=0;i--){
str=str+s.charAt(i);
}
if(s==str)
console.log("palindrome")
else console.log("Not a palindrome")