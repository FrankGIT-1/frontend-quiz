"use strict"
/*jshint esversion: 6 */


/**
 * Vragen array
 */
var vragen = ["Vraag 1 - Waarvoor dient HTML ?",
    "vraag 2 - Waar staat HTML voor ?",
    "vraag 3 - Waarvoor dient CSS ?",
    "vraag 4 - Waar staat CSS voor ?",
    "vraag 5 - Waarvoor dient Javascript ?",
    "vraag 6 - Wat doet de <br> functie in HTML ?",
    "vraag 7 - Met welke HTML maak je een ongenummerde lijst ?",
    "vraag 8 - Wat is de grootste Header in HTML ?",
    "vraag 9 - Wat is een array in Javascript ?",
    "vraag 10 - In welk HTML element wordt Javascript geplaatst"];

/**
 * antwoorden array
 */
var antwoorden = [["Om de pagina van de website te stylen", "Om de pagina van de website structuur te geven",
    "Voor de structuur en de style van de website pagina", "Geen van de boven weergegeven keuzes"],
["HyperType Moretext Language", "HyperType More-use Language", "HyperTexture Markedup Language", "HyperText Markup Language"],
["Om de website te stylen", "Om de website structuur te geven", "Voor het structuur en de style van de website", "Geen van de boven weergegeven keuzes"],
["Cascaded Styling Sheets", "Compound Styling Sheet", "Cascading Style Sheets", "Cascaded Style Sheet"],
["Geen van de onder weergegeven antwoorden", "Het stylen van de webpagina's", "Het interactief maken van webpagina's", "De website structuur geven"],
["Een tekst dikgedrukt maken", "Een ordering maken", "Een paragraaf maken", "Een regel overslaan"],
["<il>", "<ol>", "<al>", "<el>"],
["<h1>", "<h5>", "<h25>", "<h100>"],
["2 waarden representeren in een functie", "Meerdere waardes in een variabel hebben", "Een event uitdrukken", "1 waarde uitdrukken"],
["<nav>", "<script>", "<div>", "<main>"]];

/**
 * goedeantwoorden
 */
var goedeAntwoorden = [antwoorden[0][1], antwoorden[1][3], antwoorden[2][0], antwoorden[3][2], antwoorden[4][2],
antwoorden[5][3], antwoorden[6][0], antwoorden[7][0], antwoorden[8][1], antwoorden[9][1],];


/**
 * globaal
 */

var vraag = document.getElementById('vraag');
var actueleVraag = 0;
var actueleAntwoord;
var antwoord1 = document.getElementById('antwoordknop1');
var antwoord2 = document.getElementById('antwoordknop2');
var antwoord3 = document.getElementById('antwoordknop3');
var antwoord4 = document.getElementById('antwoordknop4');
var volgendeVraag = document.getElementById('volgendevraagknop');
var punten = 0;
var totalePunten = document.getElementById('eindscore');
var score = document.getElementById('score');
var text = document.getElementById('text');
var inputText = document.getElementById('text-input');
var studentNaam = document.getElementById('student-id');
const quizMaster = 's1160466';
var scoreFeedback = document.getElementById('score-feedback');
var inputLogin = document.getElementById('login-input');
var vorigeVraag = document.getElementById('vorigevraagknop');
var redditShare = document.getElementById('redditknop');
var stopwatchtekst = document.getElementById('stopwatch');
var seconds = 0;
var minutes = 0;
var totaleTijd = document.getElementById(stopwatch);
var stopwatcheind = document.getElementById('stopwatcheind');



/**
 * Add actions to page buttons 
 */
function addButtonActions() {
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var loginButton = document.getElementById('button-login');

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        loginQuiz();
    });
    loginButton.addEventListener("click", function () {
        var inputNaam = 's1160466';
        showQuestionsPage();
    });
    antwoord1.addEventListener("click", function () {
        antwoordKeuze1();
    });
    antwoord2.addEventListener("click", function () {
        antwoordKeuze2();
    });
    antwoord3.addEventListener("click", function () {
        antwoordKeuze3();
    });
    antwoord4.addEventListener("click", function () {
        antwoordKeuze4();
    });
    volgendeVraag.addEventListener("click", function () {
        volgendePagina();
    });
    vorigeVraag.addEventListener("click", function () {
        vorigePagina();
    });


}
/**
 * antwoordmogelijkheden functies
 */
function antwoordKeuze1() {
    var text = document.getElementById('text');
    text.innerText = "test";
    buttonUit();
    vorigeVraag.disabled = true;
    actueleAntwoord = antwoorden[actueleVraag][0];
    if (actueleAntwoord == goedeAntwoorden[actueleVraag]) {
        antwoord1.style.backgroundColor = '#00ff00';
        text.innerText = "Correct";
        text.style.color = '#00ff00';
        punten++;
        score.innerText = "Score is " + punten + "/10";
    }
    else {
        antwoord1.style.backgroundColor = 'red';
        text.innerText = "Fout, het juiste antwoord was: " + goedeAntwoorden[actueleVraag];
        text.style.color = 'red';
        score.innerText = "Score is " + punten + "/10";
    }
}
function antwoordKeuze2() {
    var text = document.getElementById('text');
    text.innerText = "test2";
    buttonUit();
    vorigeVraag.disabled = true;
    actueleAntwoord = antwoorden[actueleVraag][1];
    if (actueleAntwoord == goedeAntwoorden[actueleVraag]) {
        antwoord2.style.backgroundColor = '#00ff00';
        text.innerText = "Correct";
        text.style.color = '#00ff00';
        punten++;
        score.innerText = "Score is " + punten + "/10";
    }
    else {
        antwoord2.style.backgroundColor = 'red';
        text.innerText = "Fout, het juiste antwoord was: " + goedeAntwoorden[actueleVraag];
        text.style.color = 'red';
        score.innerText = "Score is " + punten + "/10";
    }
}
function antwoordKeuze3() {
    var text = document.getElementById('text');
    text.innerText = "test3";
    buttonUit();
    vorigeVraag.disabled = true;
    actueleAntwoord = antwoorden[actueleVraag][2];
    if (actueleAntwoord == goedeAntwoorden[actueleVraag]) {
        antwoord3.style.backgroundColor = '#00ff00';
        text.innerText = "Correct";
        text.style.color = '#00ff00';
        punten++;
        score.innerText = "Score is " + punten + "/10";
    }
    else {
        antwoord3.style.backgroundColor = 'red';
        text.innerText = "Fout, het juiste antwoord was: " + goedeAntwoorden[actueleVraag];
        text.style.color = 'red';
        score.innerText = "Score is " + punten + "/10";
    }
}
function antwoordKeuze4() {
    var text = document.getElementById('text');
    text.innerText = "test 4";
    buttonUit();
    vorigeVraag.disabled = true;
    actueleAntwoord = antwoorden[actueleVraag][3];
    if (actueleAntwoord == goedeAntwoorden[actueleVraag]) {
        antwoord4.style.backgroundColor = '#00ff00';
        text.innerText = "Correct";
        text.style.color = '#00ff00';
        punten++;
        score.innerText = "Score is " + punten + "/10";
    }
    else {
        antwoord4.style.backgroundColor = 'red';
        text.innerText = "Fout, het juiste antwoord was: " + goedeAntwoorden[actueleVraag];
        text.style.color = 'red';
        score.innerText = "Score is " + punten + "/10";
    }
}


/**
 * Knop uitschakelen, inschakelen en kleur reset
 */
function buttonUit() {
    antwoord1.disabled = true;
    antwoord2.disabled = true;
    antwoord3.disabled = true;
    antwoord4.disabled = true;
}

function buttonAan() {
    antwoord1.disabled = false;
    antwoord2.disabled = false;
    antwoord3.disabled = false;
    antwoord4.disabled = false;
}

function kleurReset() {
    antwoord1.style.backgroundColor = 'bisque';
    antwoord2.style.backgroundColor = 'bisque';
    antwoord3.style.backgroundColor = 'bisque';
    antwoord4.style.backgroundColor = 'bisque';
}

/**
 * inlog checken of de gegevens kloppen
 */
// function loginValidatie(inputNaam) {
//     if (inputNaam.match(/^[s|S]\d{7,7}$/))
//         // checkStudent(inputNaam);
//     else {
//         inputText.innerText = "Inlog is fout, om in te loggen is voor studenten een 's' gevolgd door 7 cijfers en voor docenten 2 letter gevolgd door 7 cijfers.";
//         inputText.style.color = 'red';
//     }
//     if (inputNaam.match(/^[A-z]{2}\d{7,7}$/))
//         checkStudent(inputNaam);
//     else {
//         inputText.innerText = "Inlog is fout, om in te loggen is voor studenten een 's' gevolgd door 7 cijfers en voor docenten 2 letter gevolgd door 7 cijfers.";
//         inputText.style.color = 'red';
//     }
// }


/**timer voor de quiz */
function stopwatch() {
    totaleTijd = seconds + (minutes * 60);
    seconds++;
    stopwatchtekst.innerText = `Je bent nu ${minutes} minuten en ${seconds} seconden bezig`;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            location.reload();
        }
    }



}
/**
 * Check student number using the API
 */
// function checkStudent(number) {
//     var xHttp = new XMLHttpRequest();
//     xHttp.onreadystatechange = function () {
//         if (xHttp.readyState == XMLHttpRequest.DONE) {
//             var response = JSON.parse(xHttp.response);
//             if (xHttp.status == 200) {
//                 studentIdentificationSucces(response);
//             } else {
//                 studentIdentificationFailed(response);
//             }
//         }
//     };
//     xHttp.onerror = function () {
//         studentIdentificationFailed(xHttp.statusText);
//     };
//     xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + number, true);
//     xHttp.send();
// }

/**
 * Student is successfully identified
 */
function studentIdentificationSucces(student) {
    showQuestionsPage();
    studentNaam.innerText = student.firstName + " " + student.lastName;


    console.info(student); // Een Javascript-object met studentnummer, voornaam en achternaam
}

/**
 * Student number is incorrect
 */
function studentIdentificationFailed(errorMessage) {
    inputText.innerText = "Inlog is fout, om in te loggen is voor studenten een 's' gevolgd door 7 cijfers en voor docenten 2 letter gevolgd door 7 cijfers.";
    inputText.style.color = 'red';
    console.error(errorMessage);
}

/**
 * Sends score of the player to the Quiz-API.
 * @param student Student number of player
 * @param points Points of player
 */
function sendScore(student, points) {
    var xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            if (xHttp.status == 200) {
                scoreFeedback.innerText = "Score succesvol opgeslagen";
                scoreFeedback.style.color = 'green';
                console.info("Score succesvol opgeslagen");
            } else {
                scoreFeedback.innerText = "Score niet succesvol opgeslagen";
                scoreFeedback.style.color = 'red';
                console.error("Score niet succesvol opgeslagen");
            }
        }
    };

    xHttp.onerror = function () {
        scoreFeedback.innerText = "Score niet succesvol opgeslagen";
        scoreFeedback.style.color = 'red';
        console.error("Score niet succesvol opgeslagen");
    };

    xHttp.open("POST", "https://quiz.clow.nl/v1/score", true);
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send(JSON.stringify({
        quizMaster: quizMaster,
        student: student,
        points: points,
        time: totaleTijd
    }));
}


/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var laatstePagina = document.getElementById('laastste-pagina');
    var loginPagina = document.getElementById('login-pagina');

    startPage.style.display = 'none';
    questionsPage.style.display = 'none';
    laatstePagina.style.display = 'none';
    loginPagina.style.display = 'none';
}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');
}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');

    hideAllPages();

    page.style.display = 'block';

    vraag.innerText = vragen[actueleVraag];
    antwoord1.innerText = antwoorden[actueleVraag][0];
    antwoord2.innerText = antwoorden[actueleVraag][1];
    antwoord3.innerText = antwoorden[actueleVraag][2];
    antwoord4.innerText = antwoorden[actueleVraag][3];

    stopwatch(setInterval(stopwatch, 1000));

    console.info('Je bent nu op de vragenpagina');
}
/**
 * Volgende pagina
 */
function volgendePagina() {
    buttonAan();
    kleurReset();
    if (actueleVraag == 9) {
        quizEinde();
    } else {
        actueleVraag++;
        text.innerText = "Kies je antwoord";
        text.style.color = 'black';
        vraag.innerText = vragen[actueleVraag];
        antwoord1.innerText = antwoorden[actueleVraag][0];
        antwoord2.innerText = antwoorden[actueleVraag][1];
        antwoord3.innerText = antwoorden[actueleVraag][2];
        antwoord4.innerText = antwoorden[actueleVraag][3];
        vorigeVraag.disabled = false;
    }
}

function vorigePagina() {
    if (actueleVraag > 0) {
        actueleVraag--;
        vraag.innerText = vragen[actueleVraag];
        antwoord1.innerText = antwoorden[actueleVraag][0];
        antwoord2.innerText = antwoorden[actueleVraag][1];
        antwoord3.innerText = antwoorden[actueleVraag][2];
        antwoord4.innerText = antwoorden[actueleVraag][3];
        buttonUit();
        vorigeVraag.disabled = true;
        text.innerText = "Het juiste antwoord is: " + goedeAntwoorden[actueleVraag];
        text.style.color = 'purple';
    }
    else {
        text.innerText = "Er er is geen vorige vraag";
        text.style.color = 'orange';
    }
}


/**
 * Laatste pagina 
 */
function quizEinde() {
    var page = document.getElementById('laastste-pagina');
    var socialShare = `Bij de Frontend Webdevelopment Quiz heb ik ${punten} punten gehaald en heb er ${minutes} minuten en ${seconds} seconden over gedaan.`;


    hideAllPages();
    sendScore(inputLogin.value, punten);
    

    totalePunten.innerText = "Jouw eindscore is " + punten + "/10";
    stopwatcheind.innerText = "Totale tijd: " + minutes + " minuten en " + seconds + " seconden";
    page.style.display = 'block';

    redditShare.addEventListener("click", function () {
        window.open(
            "https://www.reddit.com/submit?url=" + encodeURI(socialShare));
    });

    console.info('Einde');
}

/**
 * Login Pagina
 */
function loginQuiz() {
    var page = document.getElementById('login-pagina');
    hideAllPages();

    page.style.display = 'block';

    console.info('Login');

}




// Initialize
addButtonActions();
showStartPage();