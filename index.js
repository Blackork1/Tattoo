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
        SecureToken: "136d9e19-2795-46ff-a9bd-7f8b87ae110c",
        To : 'pzaporozhchenko75@gmail.com',
        From : "blubberberndlp@googlemail.com",
        Subject : "Test Mail from" + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})

window.addEventListener("load", function() {
    var now = new Date();
    var offset = now.getTimezoneOffset() * 60000;
    var adjustedDate = new Date(now.getTime() - offset);
    var formattedDate = adjustedDate.toISOString().substring(0,16); // For minute precision
    var datetimeField = document.getElementById("date");
    datetimeField.value = formattedDate;
});
