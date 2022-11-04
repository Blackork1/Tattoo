const fname =document.getElementById('name');
const email =document.getElementById('email');
const numb =document.getElementById('numb');
const date =document.getElementById('date');
const file =document.getElementById('file');
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
    <br>Bild: </br>${file.value}
    <br></br>
    `
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "blubberberndlp@googlemail.com",
        Password : "108DEFF2F0400D44C254B3320E001E5EDF61",
        To : 'soeren.blocksdorf@googlemail.com',
        From : "blubberberndlp@googlemail.com",
        Subject : "Test Mail from" + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})