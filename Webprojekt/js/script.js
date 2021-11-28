// das ist ein kommentar
//alert("Hello world!");


/* das ist ein
mehrzeiliger
kommentar
*/


// Hamburger-Icon für die Navigation
function toggleMainnavi() {
	document.getElementById("mainnavi").classList.toggle("enabled");
}

// Klick-Event auf Hamburger-Icon
document.getElementById("menu-icon").addEventListener("click", toggleMainnavi);

// Funktion für die Seitenspalte
function generateDaysUntilLastCourse() {
	let today = new Date();
	let dateLastCourse = new Date("2020-12-31");
	let daysDifference = dateLastCourse - today;
	// teilen durch 1000 = Sekunden
	// teilen durch 60 = Minuten
	// teilen durch 60 = Stunden
	// teilen durch 24 = Tage
	daysDifference = daysDifference / 1000 / 60 / 60 / 24;
	daysDifference = Math.ceil(daysDifference);

	let textLastCourse = "Das Jahr 2020 ist vorbei.";
	if (daysDifference >= 0) {
		textLastCourse = "Noch " + daysDifference + " Tage bis zum Jahresende.";
	}

	document.getElementById("daysUntilLastCourse").textContent = textLastCourse;
}

generateDaysUntilLastCourse();


// Listen bzw. arrays
let nachname = "Müller";
let namen = ["Horst", "Peter", "Sabine", 25, "25", nachname];

//alert(namen[3]);
//alert(namen.length);

// Formular-Validierung
function checkContactForm() {
	let email = document.getElementsByName("user-mail")[0];
	let message = document.getElementsByName("user-message")[0];
	let errorMessage = document.getElementById("error-messages");
	let errorMessageText = "";

	errorMessage.textContent = errorMessageText;
	errorMessage.classList.remove("show");
	email.parentElement.classList.remove("error");
	message.parentElement.classList.remove("error");

	if (email.value == "") {
		email.parentElement.classList.add("error");
		errorMessageText = "Bitte Feld E-Mail ausfüllen.<br> ";
	}


	if (email.value.indexOf("@") == -1) {
		email.parentElement.classList.add("error");
		errorMessageText += "Es fehlt das @-Zeichen.<br> ";
	}


	if (message.value == "") {
		message.parentElement.classList.add("error");
		errorMessageText += "Bitte Feld Nachricht ausfüllen.<br> ";
	}


	if (errorMessageText == "") {
		location.href = "danke.html";
	} else {
		errorMessage.innerHTML = errorMessageText;
		errorMessage.classList.add("show");
	}



	//alert(errorMessageText);

}

document.getElementById("submit-button").addEventListener("click", checkContactForm);

// Funktion fuer den nach oben Button
function scrollToTop() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
}

document.getElementById("scrollToTop").addEventListener("click", scrollToTop);


document.body.onscroll = function() {
	document.getElementById("scrollToTop").classList.remove("show");

	if(self.pageYOffset > 300) {
		document.getElementById("scrollToTop").classList.add("show");
	}
};