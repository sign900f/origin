//fra start til spil

sidenVises();

function sidenVises() {
    console.log("sidenVises");
    //nulstil alting
    showStart();
}


function showStart() {
    console.log("showStart");
    //vis startskærm
    document.querySelector("#start").classList.add("show")
    //start animation på start-knap
    document.querySelector("#startmaane").classList.add("pulse")

    document.querySelector("#startmaane").addEventListener("click", hideStart);

    document.querySelector("#settings_lys").addEventListener("click", showSettings);

    document.querySelector("#settings").classList.add("hide")


}


function hideStart() {
    console.log("hideStart");
    //stop animation på start-knap
    document.querySelector("#startmaane").classList.remove("pulse")
    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out")

    startGame();
}

function startGame() {
    console.log("startGame");
    //skjul startskærm
    document.querySelector("#start").classList.add("hide")
    //vis spilskærm
    document.querySelector("#game").classList.add("show")

    //i spillet

    document.querySelector("#maane_1").addEventListener("click", clickMaane);
    document.querySelector("#vaesel_1").addEventListener("click", clickVaesel);
    document.querySelector("#maane_2").addEventListener("click", clickMaane);
    document.querySelector("#vaesel_2").addEventListener("click", clickVaesel);
    document.querySelector("#maane_3").addEventListener("click", clickMaane);
    document.querySelector("#vaesel_3").addEventListener("click", clickVaesel);
    document.querySelector("#maane_4").addEventListener("click", clickMaane);
    document.querySelector("#vaesel_4").addEventListener("click", clickVaesel);
    document.querySelector("#maane_5").addEventListener("click", clickMaane);
    document.querySelector("#vaesel_5").addEventListener("click", clickVaesel);
}

let point = 0;

function clickMaane() {
    console.log("Du har trykket på en maane. jubii");
    //tæl op på points
    point++;
    console.log(point);

    console.log(this);
    // this.classList.add("hide");

    gameStatus();
}


let liv = 3;

function clickVaesel() {
    console.log("Det var en væsel. ærgerligt");
    //tæl ned på points
    liv--;
    console.log(liv);

    console.log(this);
    //this.classList.add("hide");


    gameStatus();
}




function gameStatus() {

    if (liv <= 0) {
        gameOver();

    }
    if (point >= 10) {
        happyEnding();

    }
}




// gameover

function gameOver() {
    console.log("gameOver");

    document.querySelector("#game").classList.add("dissappear");
    document.querySelector("#gameover").classList.remove("hide");
}




// happyending

function happyEnding() {
    console.log("happyEnding");

    document.querySelector("#game").classList.add("dissappear");

    document.querySelector("#levelcomplete").classList.remove("hide");

}





//til indstillinger fra settings

function hideStartSetting() {
    console.log("hideStartSetting");

    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    showSettings();
}

function showSettings() {
    console.log("showSettings");
    //skjul startskærm
    //document.querySelector("#start").classList.add("hide");
    //vis spilskærm
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings").classList.remove("fade_out");

    document.querySelector("#afslut_settings").addEventListener("click", hideSettings);
}



//fra settings til startskærm

function hideSettings() {
    console.log("hideSettings");

    document.querySelector("#settings").classList.add("fade_out");

    // sidenVises();
    showStart();
}
