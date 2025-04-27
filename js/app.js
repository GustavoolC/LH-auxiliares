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
    return firminoDano+wanderDano+denilsonDano+joaquimDano+capperDano+braidDano+alexandrinoDano+kaibaDano;
}

function definirAuxiliares() {
    armadilloAuxiliares = ["Firmino","Wander"];
    gustavoolAuxiliares = ["Denilson","Joaquim","Capper"];
    ivanAuxiliares = ["Braid","Alexandrino","Kaiba"];
    armadilloPrincipal = document.getElementById("armadillo").value;
    gustavoolPrincipal = document.getElementById("gustavool").value;
    ivanPrincipal = document.getElementById("ivan").value;
    armadilloAuxiliares.splice(armadilloPrincipal, 1);
    gustavoolAuxiliares.splice(gustavoolPrincipal, 1);
    ivanAuxiliares.splice(ivanPrincipal, 1);
    auxiliares = armadilloAuxiliares.concat(gustavoolAuxiliares);
    auxiliares = auxiliares.concat(ivanAuxiliares);
    console.log(auxiliares);
}

function gerarLista() {
    if (armadilloAuxiliares.includes("Firmino") == true) {
        document.getElementById("divFirmino").setAttribute("class","");
    } else {
        document.getElementById("divFirmino").setAttribute("class","secreto");
    }
    if (armadilloAuxiliares.includes("Wander") == true) {
        document.getElementById("divWander").setAttribute("class","");
    } else {
        document.getElementById("divWander").setAttribute("class","secreto");
    }
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
    if (gustavoolAuxiliares.includes("Capper") == true) {
        document.getElementById("divCapper").setAttribute("class","");
    } else {
        document.getElementById("divCapper").setAttribute("class","secreto");
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
    if (armadilloAuxiliares.includes("Firmino") == true) {
        if (document.getElementById("Firmino").checked == true) {
        firminoDado = rolagem(20)+11;
        if (firminoDado >= dt) {
            firminoDano = rolagem(6)+4;
        } else {
            firminoDano = 0;
        }
        listaDanos.push(`<img src="assets/Firmino.png" class="grandioso" title="Resultado: ` + firminoDado + `"> ` + firminoDano);
    }
    }
    if (armadilloAuxiliares.includes("Wander") == true) {
        if (document.getElementById("Wander").checked == true) {
        wanderDado = rolagem(20)+7;
        if (wanderDado >= dt) {
            wanderDano = rolagem(4)+rolagem(4);
        } else {
            wanderDano = 0;
        }
        listaDanos.push(`<img src="assets/Wander.png" title="Resultado: ` + wanderDado + `"> ` + wanderDano);
    }
    }
    if (gustavoolAuxiliares.includes("Denilson") == true) {
        if (document.getElementById("Denilson").checked == true) {
            denilsonDado = rolagem(20)+9;
        if (denilsonDado >= dt) {
            denilsonDano = rolagem(2)+rolagem(10)+5;
        } else {
            denilsonDano = 0;
        }
        listaDanos.push(`<img src="assets/Denilson.png" title="Resultado: ` + denilsonDado + `"> ` + denilsonDano);
        } 
    }
    if (gustavoolAuxiliares.includes("Joaquim") == true) {
        if (document.getElementById("Joaquim").checked == true) {
        joaquimDado = rolagem(20)+6;
        if (joaquimDado >= dt) {
            joaquimDano = rolagem(6)+rolagem(6)+1;
        } else {
            joaquimDano = 0;
        }
        listaDanos.push(`<img src="assets/Joaquim.png" title="Resultado: ` + joaquimDado + `"> ` + joaquimDano);
    }
    }
    if (gustavoolAuxiliares.includes("Capper") == true) {
        if (document.getElementById("Capper").checked == true) {
        capperDado = rolagem(20)+7;
        if (capperDado >= dt) {
            capperDano = rolagem(8)+rolagem(6)+5;
        } else {
            capperDano = 0;
        }
        listaDanos.push(`<img src="assets/Capper.png" title="Resultado: ` + capperDado + `"> ` + capperDano);
    }
    }
    if (ivanAuxiliares.includes("Braid") == true) {
        if (document.getElementById("Braid").checked == true) {
        braidDado = rolagem(20)+4;
        if (braidDado >= dt) {
            braidDano = rolagem(8)+2;
        } else {
            braidDano = 0;
        }
        listaDanos.push(`<img src="assets/Braid.png" title="Resultado: ` + braidDado + `"> ` + braidDano);
    }
    }
    if (ivanAuxiliares.includes("Alexandrino") == true) {
        if (document.getElementById("Alexandrino").checked == true) {
        alexandrinoDado = rolagem(20)+4;
        if (alexandrinoDado >= dt) {
            alexandrinoDano = rolagem(8)+rolagem(8);
        } else {
            alexandrinoDano = 0;
        }
        listaDanos.push(`<img src="assets/Alexandrino.png" title="Resultado: ` + alexandrinoDado + `"> ` + alexandrinoDano);
    }
    }
    if (ivanAuxiliares.includes("Kaiba") == true) {
        if (document.getElementById("Kaiba").checked == true) {
        kaibaDado = rolagem(20)+5;
        if (kaibaDado >= dt) {
            kaibaDano = rolagem(8)+4;
        } else {
            kaibaDano = 0;
        }
        listaDanos.push(`<img src="assets/Kaiba.png" title="Resultado: ` + kaibaDado + `"> ` + kaibaDano);
    }
    }
    somaDanos = listaDanos.join(" + ");
}

function resetarDanos() {
    firminoDano = 0;
    wanderDano = 0;
    denilsonDano = 0;
    joaquimDano = 0;
    capperDano = 0;
    braidDano = 0;
    alexandrinoDano= 0;
    kaibaDano = 0;
    listaDanos = [];
}