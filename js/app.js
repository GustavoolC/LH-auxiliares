let gustavoolPrincipal;
let gustavoolAuxiliares;
let ivanPrincipal;
let ivanAuxiliares;
let dt;
let listaAuxiliares;
escolhaPrincipal();

function iniciarTeste() {
    resetarDanos();
    dt = document.getElementById("dt").value;
    definirDanos();
    danoTotal = somarDanos();
    document.getElementById("soma-danos").innerHTML = somaDanos;
    document.getElementById("txtDanoTotal").innerHTML = "Dano Total";
    document.getElementById("dano-total").innerHTML = danoTotal;;
}

function escolhaPrincipal() {
    auxiliares = [];
    definirAuxiliares();
    gerarLista();
}

function rolagem(max) {
    return parseInt(Math.random() * max + 1);
}

function somarDanos() {
    return denilsonDano+joaquimDano+braidDano+alexandrinoDano+kaibaDano;
}

function definirAuxiliares() {
    gustavoolAuxiliares = ["Denilson","Joaquim"];
    ivanAuxiliares = ["Braid","Alexandrino","Kaiba"];
    gustavoolPrincipal = document.getElementById("gustavool").value;
    ivanPrincipal = document.getElementById("ivan").value;
    gustavoolAuxiliares.splice(gustavoolPrincipal, 1);
    ivanAuxiliares.splice(ivanPrincipal, 1);
    auxiliares = gustavoolAuxiliares.concat(ivanAuxiliares);
    console.log(auxiliares);
}

function gerarLista() {
    if (gustavoolAuxiliares.includes("Denilson") == true) {
        document.getElementById("divDenilson").setAttribute("class","");
    } else {
        document.getElementById("divDenilson").setAttribute("class","secreto");
    }
    if (gustavoolAuxiliares.includes("Joaquim") == true) {
        document.getElementById("divJoaquim").setAttribute("class","");
    } else {
        document.getElementById("divJoaquim").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Braid") == true) {
        document.getElementById("divBraid").setAttribute("class","");
    } else {
        document.getElementById("divBraid").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Alexandrino") == true) {
        document.getElementById("divAlexandrino").setAttribute("class","");
    } else {
        document.getElementById("divAlexandrino").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Kaiba") == true) {
        document.getElementById("divKaiba").setAttribute("class","");
    } else {
        document.getElementById("divKaiba").setAttribute("class","secreto");
    }
}

function definirDanos() {
    if (gustavoolAuxiliares.includes("Denilson") == true) {
        if (document.getElementById("Denilson").checked == true) {
            denilsonDado = rolagem(20)+9;
        console.log(`Denilson - Resultado: ${denilsonDado}`);
        if (denilsonDado >= dt) {
            denilsonDano = rolagem(2)+rolagem(10)+5;
        } else {
            denilsonDano = 0;
        }
        listaDanos.push(`<img src="assets/Denilson.png" title="Resultado: ` + denilsonDado + `"> ` + denilsonDano);
        console.log("-------------------------------");
        } 
    }
    if (gustavoolAuxiliares.includes("Joaquim") == true) {
        if (document.getElementById("Joaquim").checked == true) {
        joaquimDado = rolagem(20)+6;
        console.log(`Joaquim - Resultado: ${joaquimDado}`);
        if (joaquimDado >= dt) {
            joaquimDano = rolagem(6)+rolagem(6)+1;
        } else {
            joaquimDano = 0;
        }
        listaDanos.push(`<img src="assets/Joaquim.png" title="Resultado: ` + joaquimDado + `"> ` + joaquimDano);
        console.log("-------------------------------");
    }
    }
    if (ivanAuxiliares.includes("Braid") == true) {
        if (document.getElementById("Braid").checked == true) {
        braidDado = rolagem(20)+4;
        console.log(`Braid - Resultado: ${braidDado}`);
        if (braidDado >= dt) {
            braidDano = rolagem(8)+2;
        } else {
            braidDano = 0;
        }
        listaDanos.push(`<img src="assets/Braid.png" title="Resultado: ` + braidDado + `"> ` + braidDano);
        console.log("-------------------------------");
    }
    }
    if (ivanAuxiliares.includes("Alexandrino") == true) {
        if (document.getElementById("Alexandrino").checked == true) {
        alexandrinoDado = rolagem(20)+4;
        console.log(`Alexandrino - Resultado: ${alexandrinoDado}`);
        if (alexandrinoDado >= dt) {
            alexandrinoDano = rolagem(8)+rolagem(8);
        } else {
            alexandrinoDano = 0;
        }
        listaDanos.push(`<img src="assets/Alexandrino.png" title="Resultado: ` + alexandrinoDado + `"> ` + alexandrinoDano);
        console.log("-------------------------------");
    }
    }
    if (ivanAuxiliares.includes("Kaiba") == true) {
        if (document.getElementById("Kaiba").checked == true) {
        kaibaDado = rolagem(20)+5;
        console.log(`Kaiba - Resultado: ${kaibaDado}`);
        if (kaibaDado >= dt) {
            kaibaDano = rolagem(8)+4;
        } else {
            kaibaDano = 0;
        }
        listaDanos.push(`<img src="assets/Kaiba.png" title="Resultado: ` + kaibaDado + `"> ` + kaibaDano);
        console.log("-------------------------------");
    }
    }
    somaDanos = listaDanos.join(" + ");
}

function resetarDanos() {
    denilsonDano = 0;
    joaquimDano = 0;
    braidDano = 0;
    alexandrinoDano= 0;
    kaibaDano = 0;
    listaDanos = [];
}