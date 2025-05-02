let dt;
let listaAuxiliares;
escolhaPrincipal();

function iniciarTeste() {
    resetarDanos();
    dt = document.getElementById("dt").value;
    definirDefesas();
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
    return firminoDanoFinal+wanderDanoFinal+leeDanoFinal+denilsonDanoFinal+joaquimDanoFinal+capperDanoFinal+miguelDanoFinal+andromedusDanoFinal+kandoruDanoFinal+braidDanoFinal+alexandrinoDanoFinal+kaibaDanoFinal;
}

function definirAuxiliares() {
    armadilloAuxiliares = ["Firmino","Wander","Lee"];
    gustavoolAuxiliares = ["Denilson","Joaquim","Capper","Miguel"];
    jvictorAuxiliares = ["Andromedus","Kandoru"];
    ivanAuxiliares = ["Braid","Alexandrino","Kaiba"];
    armadilloPrincipal = document.getElementById("armadillo").value;
    gustavoolPrincipal = document.getElementById("gustavool").value;
    jvictorPrincipal = document.getElementById("jvictor").value;
    ivanPrincipal = document.getElementById("ivan").value;
    armadilloAuxiliares.splice(armadilloPrincipal, 1);
    gustavoolAuxiliares.splice(gustavoolPrincipal, 1);
    jvictorAuxiliares.splice(jvictorPrincipal, 1);
    ivanAuxiliares.splice(ivanPrincipal, 1);
    auxiliares = armadilloAuxiliares.concat(gustavoolAuxiliares);
    auxiliares = auxiliares.concat(jvictorAuxiliares);
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
    if (armadilloAuxiliares.includes("Lee") == true) {
        document.getElementById("divLee").setAttribute("class","");
    } else {
        document.getElementById("divLee").setAttribute("class","secreto");
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
    if (gustavoolAuxiliares.includes("Miguel") == true) {
        document.getElementById("divMiguel").setAttribute("class","");
    } else {
        document.getElementById("divMiguel").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("Andromedus") == true) {
        document.getElementById("divAndromedus").setAttribute("class","");
    } else {
        document.getElementById("divAndromedus").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("Kandoru") == true) {
        document.getElementById("divKandoru").setAttribute("class","");
    } else {
        document.getElementById("divKandoru").setAttribute("class","secreto");
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
            firminoDano = rolagem(6)+rolagem(10)+4;
            firminoDanoFinal = firminoDano - perfuracao;
            if (firminoDanoFinal < 0) {
                firminoDanoFinal = 0;
            }
        } else {
            firminoDano = 0;
            firminoDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Firmino.png"  class="grandioso" title="Resultado: ` + firminoDado + `, Dano: ` + firminoDano + ` - ` + perfuracao + `"> ` + firminoDanoFinal);
    }
    }
    if (armadilloAuxiliares.includes("Wander") == true) {
        if (document.getElementById("Wander").checked == true) {
        wanderDado = rolagem(20)+7;
        if (wanderDado >= dt) {
            wanderDano = rolagem(4)+rolagem(4);
            wanderDanoFinal = wanderDano - balistico;
            if (wanderDanoFinal < 0) {
                wanderDanoFinal = 0;
            }
        } else {
            wanderDano = 0;
            wanderDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Wander.png" title="Resultado: ` + wanderDado + `, Dano: ` + wanderDano + ` - ` + balistico + `"> ` + wanderDanoFinal);
    }
    }
    if (armadilloAuxiliares.includes("Lee") == true) {
        if (document.getElementById("Lee").checked == true) {
        leeDado = rolagem(20);
        if (leeDado >= dt) {
            leeDano = rolagem(0)-1;
            leeDanoFinal = leeDano - 0;
            if (leeDanoFinal < 0) {
                leeDanoFinal = 0;
            }
        } else {
            leeDano = 0;
            leeDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Lee.png" title="Resultado: ` + leeDado + `, Dano: ` + leeDano + ` - ` + `"> ` + leeDanoFinal);
    }
    }
    if (gustavoolAuxiliares.includes("Denilson") == true) {
        if (document.getElementById("Denilson").checked == true) {
            denilsonDado = rolagem(20)+9;
        if (denilsonDado >= dt) {
            denilsonDano = rolagem(2)+rolagem(10)+5;
            denilsonDanoFinal = denilsonDano - impacto;
            if (denilsonDanoFinal < 0) {
                denilsonDanoFinal = 0;
            }
        } else {
            denilsonDano = 0;
            denilsonDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Denilson.png" title="Resultado: ` + denilsonDado + `, Dano: ` + denilsonDano + ` - ` + impacto + `"> ` + denilsonDanoFinal);
        } 
    }
    if (gustavoolAuxiliares.includes("Joaquim") == true) {
        if (document.getElementById("Joaquim").checked == true) {
        joaquimDado = rolagem(20)+6;
        if (joaquimDado >= dt) {
            joaquimDano = rolagem(6)+rolagem(6)+1;
            joaquimDanoFinal = joaquimDano - perfuracao;
            if (joaquimDanoFinal < 0) {
                joaquimDanoFinal = 0;
            }
        } else {
            joaquimDano = 0;
            joaquimDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Joaquim.png" title="Resultado: ` + joaquimDado + `, Dano: ` + joaquimDano + ` - ` + perfuracao + `"> ` + joaquimDanoFinal);
    }
    }
    if (gustavoolAuxiliares.includes("Capper") == true) {
        if (document.getElementById("Capper").checked == true) {
        capperDado = rolagem(20)+7;
        if (capperDado >= dt) {
            capperDano = rolagem(8)+rolagem(6)+5;
            capperDanoFinal = capperDano - perfuracao;
            if (capperDanoFinal < 0) {
                capperDanoFinal = 0;
            }
        } else {
            capperDano = 0;
            capperDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Capper.png" title="Resultado: ` + capperDado + `, Dano: ` + capperDano + ` - ` + perfuracao + `"> ` + capperDanoFinal);
    }
    }
    if (gustavoolAuxiliares.includes("Miguel") == true) {
        if (document.getElementById("Miguel").checked == true) {
        miguelDado = rolagem(20)+4;
        if (miguelDado >= dt) {
            miguelDano = rolagem(8)+rolagem(8)+2;
            miguelDanoFinal = miguelDano - perfuracao;
            if (miguelDanoFinal < 0) {
                miguelDanoFinal = 0;
            }
        } else {
            miguelDano = 0;
            miguelDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Miguel.png" title="Resultado: ` + miguelDado + `, Dano: ` + miguelDano + ` - ` + perfuracao + `"> ` + miguelDanoFinal);
    }
    }
    if (jvictorAuxiliares.includes("Andromedus") == true) {
        if (document.getElementById("Andromedus").checked == true) {
        andromedusDado = rolagem(20)+6;
        if (andromedusDado >= dt) {
            andromedusDano = rolagem(8)+rolagem(8)+2+1;
            andromedusDanoDefendido = andromedusDano - corte;
            andromedusDanoLuz = rolagem(6);
            andromedusDanoLuzDefendido = andromedusDanoLuz - luz;
            if (andromedusDanoLuzDefendido < 0) {
                andromedusDanoLuzDefendido = 0;
            }
            andromedusDanoFinal = andromedusDanoDefendido + andromedusDanoLuzDefendido;
        } else {
            andromedusDano = 0;
            andromedusDanoLuz = 0;
            andromedusDanoLuzDefendido = 0;
            andromedusDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Andromedus.png" title="Resultado: ` + andromedusDado + `, Dano: (` + andromedusDano + ` - ` + corte + `) + (` + andromedusDanoLuz + ` - ` + luz + `)"> ` + andromedusDanoFinal);
    }
    }
    if (jvictorAuxiliares.includes("Kandoru") == true) {
        if (document.getElementById("Kandoru").checked == true) {
        kandoruDado = rolagem(20)+7;
        if (kandoruDado >= dt) {
            kandoruDano = rolagem(6)+rolagem(6)+5;
            kandoruDanoFinal = kandoruDano - corte;
            if (kandoruDanoFinal < 0) {
                kandoruDanoFinal = 0;
            }
        } else {
            kandoruDano = 0;
            kandoruDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Kandoru.png" title="Resultado: ` + kandoruDado + `, Dano: ` + kandoruDano + ` - ` + corte + `"> ` + kandoruDanoFinal);
    }
    }
    if (ivanAuxiliares.includes("Braid") == true) {
        if (document.getElementById("Braid").checked == true) {
        braidDado = [rolagem(20)+4,rolagem(20)+4,rolagem(20)+4];
        braidDado.sort((a, b) => a - b);
        braidDadoFinal = braidDado[0];
        if (braidDadoFinal >= dt) {
            braidDano = rolagem(8)+2;
            braidDanoFinal = braidDano - impacto;
            if (braidDanoFinal < 0) {
                braidDanoFinal = 0;
            }
        } else {
            braidDano = 0;
            braidDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Braid.png" title="Resultado: [` + braidDado + `], Dano: ` + braidDano + ` - ` + impacto + `"> ` + braidDanoFinal);
    }
    }
    if (ivanAuxiliares.includes("Alexandrino") == true) {
        if (document.getElementById("Alexandrino").checked == true) {
        alexandrinoDado = rolagem(20)+4;
        if (alexandrinoDado >= dt) {
            alexandrinoDano = rolagem(8)+rolagem(8);
            alexandrinoDanoFinal = alexandrinoDano - perfuracao;
            if (alexandrinoDanoFinal < 0) {
                alexandrinoDanoFinal = 0;
            }
        } else {
            alexandrinoDano = 0;
            alexandrinoDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Alexandrino.png" title="Resultado: ` + alexandrinoDado + `, Dano: ` + alexandrinoDano + ` - ` + perfuracao + `"> ` + alexandrinoDanoFinal);
    }
    }
    if (ivanAuxiliares.includes("Kaiba") == true) {
        if (document.getElementById("Kaiba").checked == true) {
        kaibaDado = rolagem(20)+5;
        if (kaibaDado >= dt) {
            kaibaDano = rolagem(8)+4;
            kaibaDanoFinal = kaibaDano - corte;
            if (kaibaDanoFinal < 0) {
                kaibaDanoFinal = 0;
            }
        } else {
            kaibaDano = 0;
            kaibaDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Kaiba.png" title="Resultado: ` + kaibaDado + `, Dano: ` + kaibaDano + ` - ` + corte + `"> ` + kaibaDanoFinal);
    }
    }
    somaDanos = listaDanos.join(" + ");
}

function definirDefesas() {
    corte = parseInt(document.getElementById("corte").value);
    impacto = parseInt(document.getElementById("impacto").value);
    perfuracao = parseInt(document.getElementById("perfuracao").value);
    balistico = parseInt(document.getElementById("balistico").value);
    chamas = parseInt(document.getElementById("chamas").value);
    quimico = parseInt(document.getElementById("quimico").value);
    eletricidade = parseInt(document.getElementById("eletricidade").value);
    terra = parseInt(document.getElementById("terra").value);
    fogo = parseInt(document.getElementById("fogo").value);
    agua = parseInt(document.getElementById("agua").value);
    ondas = parseInt(document.getElementById("ondas").value);
    energia = parseInt(document.getElementById("energia").value);
    luz = parseInt(document.getElementById("luz").value);
    trevas = parseInt(document.getElementById("trevas").value);
    conhecimento = parseInt(document.getElementById("conhecimento").value);
    caos = parseInt(document.getElementById("caos").value);
    sangue = parseInt(document.getElementById("sangue").value);
    alma = parseInt(document.getElementById("alma").value);
    vazio = parseInt(document.getElementById("vazio").value);
    radiacao = parseInt(document.getElementById("radiacao").value);
    devaneio = parseInt(document.getElementById("devaneio").value);
    eco = parseInt(document.getElementById("eco").value);
    fe = parseInt(document.getElementById("fe").value);
    sigilo = parseInt(document.getElementById("sigilo").value);
}

function resetarDanos() {
    firminoDano = 0;
    firminoDanoFinal = 0;
    wanderDano = 0;
    wanderDanoFinal = 0;
    leeDano = 0;
    leeDanoFinal = 0;
    denilsonDano = 0;
    denilsonDanoFinal = 0;
    joaquimDano = 0;
    joaquimDanoFinal = 0;
    capperDano = 0;
    capperDanoFinal = 0;
    miguelDano = 0;
    miguelDanoFinal = 0;
    andromedusDano = 0;
    andromedusDanoDefendido = 0;
    andromedusDanoLuz = 0;
    andromedusDanoLuzDefendido = 0;
    andromedusDanoFinal = 0;
    kandoruDano = 0;
    kandoruDanoFinal = 0;
    braidDano = 0;
    braidDanoFinal = 0;
    alexandrinoDano = 0;
    alexandrinoDanoFinal = 0;
    kaibaDano = 0;
    kaibaDanoFinal = 0;
    listaDanos = [];
}