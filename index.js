const fname =document.getElementById('name');
const email =document.getElementById('email');
const numb =document.getElementById('numb');
const date =document.getElementById('date');
const text =document.getElementById('text');
const submit =document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Clicked");

    let ebody =`
    <br>Name: </br>${fname.value}
    <br>
    <br>Email: </br>${email.value}
    <br>
    <br>Nummer: </br>${numb.value}
    <br>
    <br>Termin: </br>${date.value}
    <br>
    <br>Bild: </br>${text.value}
    <br></br>
    `
    Email.send({
        SecureToken: "136d9e19-2795-46ff-a9bd-7f8b87ae110c",
        To : 'blubberberndlp@googlemail.com',
        From : "blubberberndlp@googlemail.com",
        Subject : "Test Mail from" + email.value,
        Body : ebody
    })
})




//Uhrzeit für Registrirung

window.addEventListener("load", function() {
    var now = new Date();
    var offset = now.getTimezoneOffset() * 60000;
    var adjustedDate = new Date(now.getTime() - offset);
    var formattedDate = adjustedDate.toISOString().substring(0,16); // For minute precision
    var datetimeField = document.getElementById("date");
    datetimeField.value = formattedDate;
});


//text einfliegen Start

document.querySelector(".text-animation1").innerHTML =  
document.querySelector(".text-animation1").textContent.replace(/./g, "<span>$&</span>");

let spans1 = document.querySelectorAll(".text-animation1 span");
for (let i = 0; i < spans1.length; i++)
 {
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();
    if (Math.random() < 0.5) {
        spans1[i].style.left = "-"+left+"px";
    } else {
        spans1[i].style.left = left+"px";
    }
    if (Math.random() < 0.5) {
        spans1[i].style.top = "-"+top+"px";
    } else {
        spans1[i].style.top = top+"px";
    }
 }

document.querySelector(".text-animation2").innerHTML =  
document.querySelector(".text-animation2").textContent.replace(/./g, "<span>$&</span>");

 let spans2 = document.querySelectorAll(".text-animation2 span");
 for (let i = 0; i < spans2.length; i++)
  {
     let left = innerWidth * Math.random();
     let top = innerHeight * Math.random();
     if (Math.random() < 0.5) {
        spans2[i].style.left = "-"+left+"px";
     } else {
        spans2[i].style.left = left+"px";
     }
     if (Math.random() < 0.5) {
        spans2[i].style.top = "-"+top+"px";
     } else {
        spans2[i].style.top = top+"px";
     }
  }
