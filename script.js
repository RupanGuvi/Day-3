/*without function
var a =10;
var b =20;
var c = a+b;
console.log(c);
*/
/*with function but with no return
function add(a,b){
  console.log(a+b);
}
function sub(a,b){
console.log(a-b)
}
add(10,20)
sub(20,10)
*/
/*
function arithmetic(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a%b);
}
arithmetic(60,20)
arithmetic(100,50)
*/
/*with return
function add (a,b){
    return a+b
}
add(10,20)
*/
/* with multiple returns
function arithmetic (a,b){
    return [a+b,a-b,a*b,a%b]
}
console.log(arithmetic(50,20));

function arithmetic1 (a,b){
    return {
        sum: a+b,
        difference :a-b,
        product: a*b,
        reminder: a%b
    }
}
console.log(arithmetic1(50,20));
*/
/*
print even numbers in an array [1,2,3,4,5,6,7,8,9,10]
 Normal Function
var result = [];
function even (arr){
for(var i =0; i<=arr.length-1;i=i+1){
    if(arr[i]%2===0){
        result.push(arr[i])
    }
}
return result

}
console.log(even([1,2,3,4,5,6,7,8,9,10]));
*/
/*
Annonyomus Function
var result = [];
 var a= function (arr){
for(var i =0; i<=arr.length-1;i=i+1){
    if(arr[i]%2===0){
        result.push(arr[i])
    }
}
return result

}
console.log(a([1,2,3,4,5,6,7,8,9,10]));
*/
/*
IIFE Function
var result = [];
(function (arr){
    for(var i =0; i<=arr.length-1;i=i+1){
        if(arr[i]%2===0){
            result.push(arr[i])
        }
    }
    console.log(result);
    
})([1,2,3,4,5,6,7,8,9,10])
*/
/*
arrow function
var result = [];
var even = (arr)=>{
    for(var i =0; i<=arr.length-1;i=i+1){
        if(arr[i]%2===0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(even([1,2,3,4,5,6,7,8,9,10]));
*/

/* Do while
let a =0;
do{
    a += 1;
    console.log(a);
    
}while(a<5)
*/
/* while loop
let a = 0;
let b = 0;
while (a<3){
    a++;
    b += a;
}
*/
/* Infinite loop example it is a bad approach
while (true){
    console.log("Hello World");
    
}
*/