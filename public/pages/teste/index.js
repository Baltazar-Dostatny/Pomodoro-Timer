// VARIAVEIS TIMER
let timeout;

let minutosSelecionados = 25;
let segundosSelecionados = 0;

let minutos = minutosSelecionados
let segundos = segundosSelecionados;

// funções
function ativaContador() {

    if(segundos === 0) {
        minutos--;
        segundos = 60;
    }

    timeout = setTimeout(() => {
            segundos--;

            let segundosFormatados = segundos;
            let minutosFormatados = minutos;

            if(segundos < 10 ) {
                segundosFormatados = "0"+segundos;
            };
            if(minutos < 10) {
                minutosFormatados = "0"+minutos;
            };

            document.getElementById("seconds").innerText=segundosFormatados;
            document.getElementById("minutes").innerText=minutosFormatados;
            
            ativaContador();
        }, 1000);

    if(minutos < 0) {
        clearTimeout(timeout);
        start.innerText = "start";
    }

};

function permiteSomenteNumeros(input) {
    const valor = input.value;
    const novoValor = valor.substring(0, valor.length-1);
    input.value = input.value.replace(/\D/g, "");
}

// BOTOES
const shortBreak = document.getElementById("shortBreak");
const longBreak = document.getElementById("longBreak");
const customBreak = document.getElementById("customBreak");

const start = document.getElementById("startTimer");
const restart = document.getElementById("restartTimer");

// AÇÃO BOTOES

shortBreak.onclick=function() {
    minutosSelecionados = 10;
    segundosSelecionados = 0;

    minutos=10;
    segundos=0;

    let minutosFormatados = minutos;
    let segundosFormatados = segundos;

    if(minutos < 10) {
        minutosFormatados = "0"+minutos;
        console.log("0"+minutos);
    };

    if(segundos < 10 ) {
        segundosFormatados = "0"+segundos;
    };

    document.getElementById("minutes").innerText=minutosFormatados;
    document.getElementById("seconds").innerText=segundosFormatados;
}

longBreak.onclick=function() {
    minutosSelecionados = 30;
    segundosSelecionados = 0;

    minutos=minutosSelecionados;
    segundos=segundosSelecionados;

    let minutosFormatados = minutos;
    let segundosFormatados = segundos;

    if(minutos < 10) {
        minutosFormatados = "0"+minutos;
        console.log("0"+minutos);
    };

    if(segundos < 10 ) {
        segundosFormatados = "0"+segundos;
    };

    document.getElementById("minutes").innerText=minutosFormatados;
    document.getElementById("seconds").innerText=segundosFormatados;
}

customBreak.onclick=function() {

    document.getElementById("timer").innerHTML=`
        <li id="minutes"><input id="customMinutes" type="number" placeholder="Min"></li>
        <li id="customSeparador">:</li>
        <li id="seconds"><input id="customSeconds" type="number" placeholder="Sec"></li>  
    `;

    document.getElementById("startTimer").innerText="select"
};

start.onclick=function() {
    if(start.innerText === "start") {
        ativaContador();
        start.innerText = "pause";
    } else if(start.innerText === "pause") {
        clearTimeout(timeout);
        start.innerText = "start";
    } else if(start.innerText === "select") {
        const selectedMinutes = document.getElementById("customMinutes").value;
        const selectedSeconds = document.getElementById("customSeconds").value;

        console.log(selectedMinutes.length);
        console.log(selectedSeconds.length);

        if(selectedMinutes.length === 0 || selectedMinutes.length === 0) {
            document.getElementById("timer").innerHTML=`
                <li id="minutes"><input id="customMinutes" type="number" placeholder="Invalid"></li>
                <li id="separador">:</li>
                <li id="seconds"><input id="customSeconds" type="number" placeholder="Try again"></li>
            `;
        } else {
            minutosSelecionados = Number(selectedMinutes);
            segundosSelecionados = Number(selectedSeconds);

            minutos=minutosSelecionados;
            segundos=segundosSelecionados;

            let minutosFormatados = minutos;
            let segundosFormatados = segundos;

            if(minutos < 10) {
                minutosFormatados = "0"+minutos;
                console.log("0"+minutos);
            };

            if(segundos < 10 ) {
                segundosFormatados = "0"+segundos;
            };

            document.getElementById("minutes").innerText=minutosFormatados;
            document.getElementById("seconds").innerText=segundosFormatados;
            start.innerText = "start";
        };
    };
};

restart.onclick=function() {
    if(start.innerText === "pause") {
        start.innerText = "start";
    }

    clearTimeout(timeout);

    minutos=minutosSelecionados;
    segundos=segundosSelecionados;

    let minutosFormatados = minutos;
    let segundosFormatados = segundos;

    if(minutos < 10) {
        minutosFormatados = "0"+minutos;
        console.log("0"+minutos);
    };

    if(segundos < 10 ) {
        segundosFormatados = "0"+segundos;
    };

    document.getElementById("minutes").innerText=minutosFormatados;
    document.getElementById("seconds").innerText=segundosFormatados;
};
