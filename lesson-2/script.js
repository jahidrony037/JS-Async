console.log("this is 1st line code");
setTimeout(function(){
    console.log("this is 2nd line code");
},2000)


console.log("this is 3rd line code");

setInterval(myFunction,1000);

function myFunction(){
    let d = new Date();
    document.getElementById('time').innerHTML= d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}