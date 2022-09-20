function prime(a){
let factor=0
for(i=1;i<=a;i++){
if(a%i==0){
factor++
}
}

if(factor==2){
return true
{
return false
}
let ans=prime(15)
if(ans==true){
console.log(" prime")
}else{
console.log("not prime")
}