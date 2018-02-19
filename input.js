//GETTING THE INPUT
var input = document.getElementById("terminal");
var commands = document.getElementById("commands");
input.addEventListener("keyup", function (e) {

    //SWITCH TO CHOOSE DEPENGING ON INPUT    

    if (e.keyCode === 13 && input.value == 1) {
        logs(e);
    }

    if (e.keyCode === 13 && input.value == 2) {
        archive(e);
    }

    if (e.keyCode === 13 && input.value == 0) {
        quit(e);
    }

    if (e.keyCode === 13 && input.value == "log001") {
        document.getElementById('log001').style.display = 'block'
        document.getElementsByClassName("close")[0].onclick = function () {
            document.getElementById('log001').style.display = 'none';
        }
    }

    if (e.keyCode === 13 && input.value == "log002") {
        document.getElementById('log002').style.display = 'block'
        document.getElementsByClassName("close")[1].onclick = function () {
            document.getElementById('log002').style.display = 'none';
        }
    }

    if (e.keyCode === 13 && input.value == "log003") {
        document.getElementById('log003').style.display = 'block'
        document.getElementsByClassName("close")[2].onclick = function () {
            document.getElementById('log003').style.display = 'none';
        }
    }

    if (e.keyCode === 13 && input.value == "log004") {
        document.getElementById('log004').style.display = 'block'
        document.getElementsByClassName("close")[3].onclick = function () {
            document.getElementById('log004').style.display = 'none';
        }
    }

    if (e.keyCode === 13 && input.value == "log005") {
        document.getElementById('log005').style.display = 'block'
        document.getElementsByClassName("close")[4].onclick = function () {
            document.getElementById('log005').style.display = 'none';
        }
    }

    if (e.keyCode === 13 && input.value == "log006") {
        document.getElementById('log006').style.display = 'block'
        document.getElementsByClassName("close")[5].onclick = function () {
            document.getElementById('log006').style.display = 'none';
        }
    }

    if (e.keyCode === 13 && input.value == "log007") {
        document.getElementById('log007').style.display = 'block'
        document.getElementsByClassName("close")[6].onclick = function () {
            document.getElementById('log007').style.display = 'none';
        }
    }

    if (e.keyCode === 13 && input.value == "log008") {
        document.getElementById('log008').style.display = 'block'
        document.getElementsByClassName("close")[7].onclick = function () {
            document.getElementById('log008').style.display = 'none';
        }
    }
}
});


function logs(e) {
    //FUNCTION ACTIVATED WHEN PRESSING 1
    var paragraph = document.getElementById("logs");
    paragraph.setAttribute('style', 'white-space: pre;');

    paragraph.textContent += "\r\nC:\\> 1\r\n\r\n";
    paragraph.textContent += "Access granted. . .\r\n";
    paragraph.textContent += "\r\n"
    paragraph.textContent += "Archived LOG001 loaded successfully\r\n"
    paragraph.textContent += "Archived LOG002 loaded successfully\r\n"
    paragraph.textContent += "Archived LOG003 loaded successfully\r\n"
    paragraph.textContent += "Archived LOG004 loaded successfully\r\n"
    paragraph.textContent += "Archived LOG005 loaded successfully\r\n"
    paragraph.textContent += "Archived LOG006 loaded successfully\r\n"
    paragraph.textContent += "Archived LOG007 loaded successfully\r\n"
    paragraph.textContent += "Archived LOG008 loaded successfully\r\n"

    //CHANGE THE COMMAND BOX
    commands.textContent = "► Choose a LOG file."

    //CLEAR THE INPUT BOX
    input.value = "";

    }

function archive(e) {
    //FUNTION ACTIVATED WHEN PRESSING 2
    var paragraph = document.getElementById("logs");
    paragraph.setAttribute('style', 'white-space: pre;');

    paragraph.textContent += "\r\nC:\\> 2\r\n\r\n";
    paragraph.textContent += "Access granted. . .\r\n";
    paragraph.textContent += "\r\n"
    paragraph.textContent += "Archived FILE001 loaded successfully\r\n"
    paragraph.textContent += "Archived FILE001 loaded successfully\r\n"
    paragraph.textContent += "Archived FILE001 loaded successfully\r\n"
    paragraph.textContent += "Archived FILE001 loaded successfully\r\n"

    //CHANGE THE COMMAND BOX
    commands.textContent = "► Choose a FILE."
    
    //CLEAR THE INPUT BOX
    input.value = "";
}

function quit(e) {
    //FUNTION ACTIVATED WHEN PRESSING 0
    var paragraph = document.getElementById("logs");
    paragraph.setAttribute('style', 'white-space: pre;');

    paragraph.textContent = "";
    
    //CLEAR THE INPUT BOX
    input.value = "";
}
