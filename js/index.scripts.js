var ficha = {forca:0, tecnica:0, conhecimento:0, constituicao:0, mentalidade:0, armadura:0, tamanho:0, movimento:0, sani:0};

var ataques = [{nome: "Ataque microbots", calc:"((100-ficha.sani)/5)d6", ataque:"1d6", valor:true}];

var tabela = [{normal: 20, bom: 21, extremo: 21},
              {normal: 19, bom: 20, extremo: 21},
              {normal: 18, bom: 20, extremo: 21},
              {normal: 17, bom: 19, extremo: 21},
              {normal: 16, bom: 19, extremo: 20},
              {normal: 15, bom: 18, extremo: 20},
              {normal: 14, bom: 18, extremo: 20},
              {normal: 13, bom: 17, extremo: 20},
              {normal: 12, bom: 17, extremo: 20},
              {normal: 11, bom: 16, extremo: 19},
              {normal: 10, bom: 16, extremo: 19},
              {normal: 9, bom: 15, extremo: 19},
              {normal: 8, bom: 15, extremo: 19},
              {normal: 7, bom: 14, extremo: 19},
              {normal: 6, bom: 14, extremo: 18},
              {normal: 5, bom: 13, extremo: 18},
              {normal: 4, bom: 13, extremo: 18},
              {normal: 3, bom: 12, extremo: 18},
              {normal: 2, bom: 12, extremo: 18},
              {normal: 1, bom: 11, extremo: 18}];

window.onload = () =>{
    ficha = JSON.parse(window.localStorage.getItem("ficha"));
    document.getElementById("forca").value = ficha.forca;
    document.getElementById("tecnica").value = ficha.tecnica;
    document.getElementById("conhecimento").value = ficha.conhecimento;
    document.getElementById("constituicao").value = ficha.constituicao;
    document.getElementById("mentalidade").value = ficha.mentalidade;
    document.getElementById("armadura").value = ficha.armadura;
    document.getElementById("tamanho").value = ficha.tamanho;
    document.getElementById("movimento").value = ficha.movimento;
    document.getElementById("sani").value = ficha.sani;
}

function teste(reference){
    let valor = document.getElementById(reference).value;
    let dice = Math.floor((Math.random()*20)+1);
    let row = tabela[valor-1];
    if(dice >= row.normal && dice < row.bom){
        document.getElementById("rolagemPrimaria").innerText = dice+", Normal";
    document.getElementById("rolagemDano").innerText = "";
    }else if(dice >= row.bom && dice < row.extremo){
        document.getElementById("rolagemPrimaria").innerText = dice+", Bom";
    document.getElementById("rolagemDano").innerText = "";
    }else if(dice >= row.extremo){
        document.getElementById("rolagemPrimaria").innerText = dice+", Extremo";
    document.getElementById("rolagemDano").innerText = "";
    }else{
        document.getElementById("rolagemPrimaria").innerText = dice+", Fracasso";
    document.getElementById("rolagemDano").innerText = "";
        console.log(dice+", Fracasso");
    }
}

function onChangeValue(reference){
    ficha[reference] = parseInt(document.getElementById(reference).value);
    window.localStorage.removeItem("ficha");
    window.localStorage.setItem("ficha", JSON.stringify(ficha));
    console.log(reference+" changed");
}

function loadPowers(){
    
}

function rollDiceString(stringToRoll){
    var dices = [];
    var values = stringToRoll.split("d");
    if(values[0][0] == "("){
        let calc = values[0].slice(1,-1);
        values[0] = eval(calc);
    }
    for(let i = 0; i < parseInt(values[0]); i++){
        let dice = Math.floor((Math.random()*parseInt(values[1]) + 1));
        dices[dices.length] = dice;
    }
    return dices;
}

function calcAtaque(calc, ataque){
    console.log("Rolagem primaria: " + rollDiceString(calc));
    console.log("Dano: " + rollDiceString(ataque));

    document.getElementById("rolagemPrimaria").innerText = "Rolagem primaria: " + rollDiceString(calc);
    document.getElementById("rolagemDano").innerText = "Dano: " + rollDiceString(ataque);
}