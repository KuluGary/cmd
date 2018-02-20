//GETTING THE INPUT
var input = document.getElementById("terminal");
var commands = document.getElementById("commands");
var arrayLog = ["log001", "log002", "log003", "log004", "log005", "log006", "log007", "log008"]

input.addEventListener("keyup", function (e) {

    //IFs TO CHOOSE DEPENGING ON INPUT    

    if (e.keyCode === 13 && input.value == 1) {
        logs(e);
    }

    if (e.keyCode === 13 && input.value == 2) {
        archive(e);
    }

    if (e.keyCode === 13 && input.value == 0) {
        quit(e);
    }

    if (e.keyCode === 13 && arrayLog.includes(input.value)){
                document.getElementById(input.value).style.display = 'block'
                document.getElementsByClassName("close")[arrayLog.indexOf(input.value)].onclick = function () {
                    document.getElementById(input.value).style.display = 'none';
                }
            }

    else if (e.keyCode === 13) {
        input.value = "";
    }


});

function logs(e) {
    //FUNCTION ACTIVATED WHEN PRESSING 1
    var paragraph = document.getElementById("logLists");
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
    var paragraph = document.getElementById("logLists");
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
    paragraph.setAttribute('style', 'white-space: pre;');

    paragraph.textContent = "";
    
    //CLEAR THE INPUT BOX
    input.value = "";
 }
