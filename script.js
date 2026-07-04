let score = 0;
let wickets = 0;
let balls = 0;

function play(run){

    if(wickets >= 2 || balls >= 24 ){
        return;
    }

    let computer = Math.floor(Math.random() * 6) + 1;

    balls++;

    if(run === computer){

        wickets++;

        document.getElementById("result").innerHTML =
        "❌ OUT! Computer bowled " + computer;

    }
    else{

        score += run;

        let message =
        "You scored " + run +
        " run(s). Computer bowled " + computer;

        if(run === 4){
            message += "<br>🏏 FOUR!";
        }

        if(run === 6){
            message += "<br>🔥 SIX!";
        }

        document.getElementById("result").innerHTML =
        message;
    }

    document.getElementById("score").innerHTML =
    score;

    document.getElementById("wickets").innerHTML =
    wickets;

    let over =
    Math.floor(balls / 6) + "." + (balls % 6);

    document.getElementById("overs").innerHTML =
    over;

    if(wickets === 2 || balls === 24){

        document.getElementById("result").innerHTML +=
        "<br><br>🏁 GAME OVER<br>Final Score: "
        + score + "/" + wickets;
    }
}   