const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail() {
	const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.
		value} <br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "trinhtai1252003@gmail.com",
		Password : "BD37223643DD376A598D77A813469D3762D7",
		To : 'trinhtai1252003@gmail.com',
		From : "trinhtai1252003@gmail.com",
		Subject : subject.value,
		Body : bodyMessage
	}).then(
	  message => alert(OK)
	  // Reset form after sending email
	);
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	sendEmail();
});