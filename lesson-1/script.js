

function calculation(num1,num2,callBack){
    const sum = num1 + num2;
    if (callBack) callBack(sum);

    return sum;
}

calculation(5,5,(result)=>{
    console.log(result);
})
