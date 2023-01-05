const paymentSuccess = true;
const marks=80;
function enrollment(callBack){
    console.log("course enrolment progress is going on ...!");
    setTimeout(function(){
        if(paymentSuccess){
            callBack();
        }
        else{
            console.log("payment failed!");
        }
    },2000);

}

function progress(callBack){
    console.log("course progress going on...");
    setTimeout(function (){
        if(marks >= 80){
            callBack();
        }
        else{
            console.log(`you could not get enough marks to get certificate!`)
        }
    },3000);
}

function getCertificate(){
    console.log("Preparing Your Certificate!");
    setTimeout(function (){
        console.log("congrats you got the certificate!");
    },1000);
}

enrollment(function(){
    progress(getCertificate);
})