let dt;
let listaAuxiliares;
let pagina = 1;
let primeiro = 1
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
    return leeDanoFinal+rogerioDanoFinal+denilsonDanoFinal+joaquimDanoFinal+brunoDanoFinal+altmanDanoFinal+andromedusDanoFinal+kandoruDanoFinal+braidDanoFinal+alexandrinoDanoFinal+kaibaDanoFinal;
}

function definirAuxiliares() {
    armadilloAuxiliares = ["Lee","Rogerio"];
    gustavoolAuxiliares = ["Denilson","Joaquim","Bruno","Altman"];
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
    // if (armadilloAuxiliares.includes("Firmino") == true) {
    //     document.getElementById("divFirmino").setAttribute("class","");
    // } else {
    //     document.getElementById("divFirmino").setAttribute("class","secreto");
    // }
    // if (armadilloAuxiliares.includes("Wander") == true) {
    //     document.getElementById("divWander").setAttribute("class","");
    // } else {
    //     document.getElementById("divWander").setAttribute("class","secreto");
    // }
    if (armadilloAuxiliares.includes("Lee") == true) {
        document.getElementById("divLee").setAttribute("class","branco");
    } else {
        document.getElementById("divLee").setAttribute("class","secreto");
    }
    if (armadilloAuxiliares.includes("Rogerio") == true) {
        document.getElementById("divRogerio").setAttribute("class","branco");
    } else {
        document.getElementById("divRogerio").setAttribute("class","secreto");
    }
    if (gustavoolAuxiliares.includes("Denilson") == true) {
        document.getElementById("divDenilson").setAttribute("class","branco");
    } else {
        document.getElementById("divDenilson").setAttribute("class","secreto");
    }
    if (gustavoolAuxiliares.includes("Joaquim") == true) {
        document.getElementById("divJoaquim").setAttribute("class","branco");
    } else {
        document.getElementById("divJoaquim").setAttribute("class","secreto");
    }
    // if (gustavoolAuxiliares.includes("Capper") == true) {
    //     document.getElementById("divCapper").setAttribute("class","");
    // } else {
    //     document.getElementById("divCapper").setAttribute("class","secreto");
    // }
    // if (gustavoolAuxiliares.includes("Miguel") == true) {
    //     document.getElementById("divMiguel").setAttribute("class","branco");
    // } else {
    //     document.getElementById("divMiguel").setAttribute("class","secreto");
    // }
    // if (gustavoolAuxiliares.includes("Aracnatrix") == true) {
    //     document.getElementById("divAracnatrix").setAttribute("class","branco");
    // } else {
    //     document.getElementById("divAracnatrix").setAttribute("class","secreto");
    // }
    if (gustavoolAuxiliares.includes("Bruno") == true) {
        document.getElementById("divBruno").setAttribute("class","branco");
    } else {
        document.getElementById("divBruno").setAttribute("class","secreto");
    }
    if (gustavoolAuxiliares.includes("Altman") == true) {
        document.getElementById("divAltman").setAttribute("class","branco");
    } else {
        document.getElementById("divAltman").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("Andromedus") == true) {
        document.getElementById("divAndromedus").setAttribute("class","preto");
    } else {
        document.getElementById("divAndromedus").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("Kandoru") == true) {
        document.getElementById("divKandoru").setAttribute("class","preto");
    } else {
        document.getElementById("divKandoru").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Braid") == true) {
        document.getElementById("divBraid").setAttribute("class","preto");
    } else {
        document.getElementById("divBraid").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Alexandrino") == true) {
        document.getElementById("divAlexandrino").setAttribute("class","preto");
    } else {
        document.getElementById("divAlexandrino").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Kaiba") == true) {
        document.getElementById("divKaiba").setAttribute("class","preto");
    } else {
        document.getElementById("divKaiba").setAttribute("class","secreto");
    }
}

function definirDanos() {
    // if (armadilloAuxiliares.includes("Firmino") == true) {
    //     if (document.getElementById("Firmino").checked == true) {
    //     firminoDado = rolagem(20)+11;
    //     if (firminoDado >= dt) {
    //         firminoDano = rolagem(6)+rolagem(10)+4;
    //         firminoDanoFinal = firminoDano - perfuracao;
    //         if (firminoDanoFinal < 0) {
    //             firminoDanoFinal = 0;
    //         }
    //     } else {
    //         firminoDano = 0;
    //         firminoDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Firmino.png"  class="grandioso" title="Resultado: ` + firminoDado + `, Dano: ` + firminoDano + ` - ` + perfuracao + `"> ` + firminoDanoFinal);
    // }
    // }
    // if (armadilloAuxiliares.includes("Wander") == true) {
    //     if (document.getElementById("Wander").checked == true) {
    //     wanderDado = rolagem(20)+7;
    //     if (wanderDado >= dt) {
    //         wanderDano = rolagem(4)+rolagem(4);
    //         wanderDanoFinal = wanderDano - balistico;
    //         if (wanderDanoFinal < 0) {
    //             wanderDanoFinal = 0;
    //         }
    //     } else {
    //         wanderDano = 0;
    //         wanderDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Wander.png" title="Resultado: ` + wanderDado + `, Dano: ` + wanderDano + ` - ` + balistico + `"> ` + wanderDanoFinal);
    // }
    // }
    if (armadilloAuxiliares.includes("Lee") == true) {
        if (document.getElementById("Lee").checked == true) {
        leeDado = rolagem(20)+7;
        if (leeDado >= dt) {
            leeDano = rolagem(6)+rolagem(6)+rolagem(6)+rolagem(6);
            leeDanoFinal = leeDano - balistico;
            if (leeDanoFinal < 0) {
                leeDanoFinal = 0;
            }
        } else {
            leeDano = 0;
            leeDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Lee.png" class="grandioso" title="Resultado: ` + leeDado + `, Dano: ` + leeDano + ` - ` + balistico + `"> ` + leeDanoFinal);
    }
    }
    if (armadilloAuxiliares.includes("Rogerio") == true) {
        if (document.getElementById("Rogerio").checked == true) {
        rogerioDado = rolagem(20)+8;
        if (rogerioDado >= dt) {
            rogerioDano = rolagem(8)+rolagem(8)+rolagem(8)+rolagem(8);
            rogerioDanoFinal = rogerioDano - perfuracao;
            if (rogerioDanoFinal < 0) {
                rogerioDanoFinal = 0;
            }
        } else {
            rogerioDano = 0;
            rogerioDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Rogerio.png" title="Resultado: ` + rogerioDado + `, Dano: ` + rogerioDano + ` - ` + perfuracao + `"> ` + rogerioDanoFinal);
    }
    }
    if (gustavoolAuxiliares.includes("Denilson") == true) {
        if (document.getElementById("Denilson").checked == true) {
            denilsonDado = rolagem(20)+11;
        if (denilsonDado >= dt) {
            denilsonDano = rolagem(8)+rolagem(8)+rolagem(8)+3;
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
        joaquimDado = rolagem(20)+9;
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
    // if (gustavoolAuxiliares.includes("Capper") == true) {
    //     if (document.getElementById("Capper").checked == true) {
    //     capperDado = rolagem(20)+7;
    //     if (capperDado >= dt) {
    //         capperDano = rolagem(8)+rolagem(6)+5;
    //         capperDanoFinal = capperDano - perfuracao;
    //         if (capperDanoFinal < 0) {
    //             capperDanoFinal = 0;
    //         }
    //     } else {
    //         capperDano = 0;
    //         capperDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Capper.png" title="Resultado: ` + capperDado + `, Dano: ` + capperDano + ` - ` + perfuracao + `"> ` + capperDanoFinal);
    // }
    // }
    // if (gustavoolAuxiliares.includes("Miguel") == true) {
    //     if (document.getElementById("Miguel").checked == true) {
    //     miguelDado = rolagem(20)+4;
    //     if (miguelDado >= dt) {
    //         miguelDano = rolagem(8)+rolagem(8)+2;
    //         miguelDanoFinal = miguelDano - perfuracao;
    //         if (miguelDanoFinal < 0) {
    //             miguelDanoFinal = 0;
    //         }
    //     } else {
    //         miguelDano = 0;
    //         miguelDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Miguel.png" title="Resultado: ` + miguelDado + `, Dano: ` + miguelDano + ` - ` + perfuracao + `"> ` + miguelDanoFinal);
    // }
    // }
    // if (gustavoolAuxiliares.includes("Aracnatrix") == true) {
    //     if (document.getElementById("Aracnatrix").checked == true) {
    //     aracnatrixDado = rolagem(20)+6;
    //     if (aracnatrixDado >= dt) {
    //         aracnatrixDano = rolagem(8)+rolagem(8)+rolagem(8)+4;
    //         aracnatrixDanoFinal = aracnatrixDano - perfuracao;
    //         if (aracnatrixDanoFinal < 0) {
    //             aracnatrixDanoFinal = 0;
    //         }
    //     } else {
    //         aracnatrixDano = 0;
    //         aracnatrixDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Aracnatrix.png" title="Resultado: ` + aracnatrixDado + `, Dano: ` + aracnatrixDano + ` - ` + perfuracao + `"> ` + aracnatrixDanoFinal);
    // }
    // }
        if (gustavoolAuxiliares.includes("Bruno") == true) {
        if (document.getElementById("Bruno").checked == true) {
        brunoDado = rolagem(20)-2;
        if (brunoDado >= dt) {
            brunoDano = rolagem(6);
            brunoDanoFinal = brunoDano - eletricidade;
            if (brunoDanoFinal < 0) {
                brunoDanoFinal = 0;
            }
        } else {
            brunoDano = 0;
            brunoDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Bruno.png" title="Resultado: ` + brunoDado + `, Dano: ` + brunoDano + ` - ` + eletricidade + `"> ` + brunoDanoFinal);
    }
    }
    if (gustavoolAuxiliares.includes("Altman") == true) {
        if (document.getElementById("Altman").checked == true) {
        altmanDado = rolagem(20)+7;
        if (altmanDado >= dt) {
            altmanDano = rolagem(10)+rolagem(10);
            altmanDanoFinal = altmanDano - chamas;
            if (altmanDanoFinal < 0) {
                altmanDanoFinal = 0;
            }
        } else {
            altmanDano = 0;
            altmanDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Altman.png" title="Resultado: ` + altmanDado + `, Dano: ` + altmanDano + ` - ` + chamas + `"> ` + altmanDanoFinal);
    }
    }
    if (jvictorAuxiliares.includes("Andromedus") == true) {
        if (document.getElementById("Andromedus").checked == true) {
        andromedusDado = rolagem(20)+8;
        if (andromedusDado >= dt) {
            andromedusDano = rolagem(12)+rolagem(12)+2+3;
            andromedusDanoDefendido = andromedusDano - corte;
            if (andromedusDanoDefendido < 0) {
                andromedusDanoDefendido = 0;
            }
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
            braidDano = rolagem(12)+rolagem(12);
            braidDanoFinal = braidDano - balistico;
            if (braidDanoFinal < 0) {
                braidDanoFinal = 0;
            }
        } else {
            braidDano = 0;
            braidDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Braid.png" title="Resultado: [` + braidDado + `], Dano: ` + braidDano + ` - ` + balistico + `"> ` + braidDanoFinal);
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


function alterarTema() {
    document.getElementById("estilo").setAttribute("href",document.getElementById("tema").value);
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
    // firminoDano = 0;
    // firminoDanoFinal = 0;
    // wanderDano = 0;
    // wanderDanoFinal = 0;
    leeDano = 0;
    leeDanoFinal = 0;
    rogerioDano = 0;
    rogerioDanoFinal = 0;
    denilsonDano = 0;
    denilsonDanoFinal = 0;
    joaquimDano = 0;
    joaquimDanoFinal = 0;
    // capperDano = 0;
    // capperDanoFinal = 0;
    // miguelDano = 0;
    // miguelDanoFinal = 0;
    // aracnatrixDano = 0;
    // aracnatrixDanoFinal = 0;
    brunoDano = 0;
    brunoDanoFinal = 0;
    altmanDano = 0;
    altmanDanoFinal = 0;
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

function trocarPagina() {
    if (pagina == 1) {
    document.getElementById("pag-1").setAttribute("class","secreto");
    document.getElementById("pag-2").setAttribute("class","");
    AddConfigInicial();
    pagina = 2;
    } else {
        document.getElementById("pag-2").setAttribute("class","secreto");
        document.getElementById("pag-1").setAttribute("class","");
        pagina = 1;
    }
}

function AddConfigInicial() {
    document.getElementById("nome").innerHTML = document.getElementById("adicionar").value;
}

function somarDado() {
    repetirRolagem = document.getElementById("quantidade-soma").value;
    dado = document.getElementById("dado-soma").value;
    if (primeiro == 1) {
    document.getElementById("previa").innerHTML = repetirRolagem + "d" + dado;
    primeiro = 0;
    } else {
        document.getElementById("previa").innerHTML = document.getElementById("previa").innerHTML + "+" + repetirRolagem + "d" + dado;
    }
}