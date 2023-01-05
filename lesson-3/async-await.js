const paymentSuccess = true;
const marks = 90;

function enroll(){
    console.log("Payment Processing is on ...");
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }
            else{
                reject("Payment Failed!");
            }
        },2000);
    });

    return promise;
}

function progress(){
    console.log("Progress is Going on ....");
    const promise = new Promise(function(resolve,reject){
        setTimeout(function (){
            if(marks >= 80){
                resolve();
            }
            else{
                reject("You Could Not get a Certificate for enough marks!");
            }
        })
    },3000);

    return promise;
}

function getCertificate(){
    console.log("Preparing a certificate...");
    const promise = new Promise(function(resolve){
        setTimeout(function (){
            resolve("Congrats you got a certificate.");
        })
    });
    return promise;
}

async function course(){
    try{
        
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    }catch(err){
        console.log(err);
    }
}

course();