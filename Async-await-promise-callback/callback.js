//when we pass a funtion to another function that is call callback function


// function sum (a,b) {
//     console.log(a+b);
// }


// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2, sum); //here sum is a callback funtion


//or


function sum (a,b) {
    console.log(a+b);
}


function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2, ()=>{
    console.log(a+b);
});