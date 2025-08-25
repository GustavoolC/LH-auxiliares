let dt;
let listaAuxiliares;
let pagina = 1;
let primeiro = 1
escolhaPrincipal();
resetarDanos();

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
    return leeDanoFinal+rogerioDanoFinal+saniluscusDanoFinal+novoarmadilloDanoFinal+brunoDanoFinal+altmanDanoFinal+jeremiasDanoFinal+andromedusDanoFinal+kandoruDanoFinal+ladraoDanoFinal+novojvDanoFinal+braidDanoFinal+kaibaDanoFinal+kaiolebDanoFinal+scarboDanoFinal+novolucDanoFinal+biluDanoFinal+novomagDanoFinal+sroincDanoFinal+mariaposaDanoFinal+novopotassioDanoFinal;
}

function definirAuxiliares() {
    armadilloAuxiliares = ["Lee","Rogerio","Saniluscus","NovoArmadillo"]
    gustavoolAuxiliares = ["Bruno","Altman","Jeremias"];
    jvictorAuxiliares = ["Andromedus","Kandoru","Ladrao","NovoJv"];
    ivanAuxiliares = ["Braid","Kaiba","Kaioleb"];
    lucAuxiliares = ["Scarbo","NovoLuc"];
    magAuxiliares = ["Bilu","NovoMag"];
    potassioAuxiliares = ["SrOinc","MariaPosa","NovoPotassio"];
    armadilloPrincipal = document.getElementById("armadillo").value;
    gustavoolPrincipal = document.getElementById("gustavool").value;
    jvictorPrincipal = document.getElementById("jvictor").value;
    ivanPrincipal = document.getElementById("ivan").value;
    lucPrincipal = document.getElementById("luc").value;
    magPrincipal = document.getElementById("mag").value;
    potassioPrincipal = document.getElementById("potassio").value;
    armadilloAuxiliares.splice(armadilloPrincipal, 1);
    gustavoolAuxiliares.splice(gustavoolPrincipal, 1);
    jvictorAuxiliares.splice(jvictorPrincipal, 1);
    ivanAuxiliares.splice(ivanPrincipal, 1);
    lucAuxiliares.splice(lucPrincipal, 1);
    magAuxiliares.splice(magPrincipal, 1);
    potassioAuxiliares.splice(potassioPrincipal, 1);
    auxiliares = armadilloAuxiliares.concat(gustavoolAuxiliares);
    auxiliares = auxiliares.concat(jvictorAuxiliares);
    auxiliares = auxiliares.concat(ivanAuxiliares);
    auxiliares = auxiliares.concat(lucAuxiliares);
    auxiliares = auxiliares.concat(magAuxiliares);
    auxiliares = auxiliares.concat(potassioAuxiliares);
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
    if (armadilloAuxiliares.includes("Saniluscus") == true) {
        document.getElementById("divSaniluscus").setAttribute("class","branco");
    } else {
        document.getElementById("divSaniluscus").setAttribute("class","secreto");
    }
    if (armadilloAuxiliares.includes("NovoArmadillo") == true) {
        document.getElementById("divNovoArmadillo").setAttribute("class","branco");
    } else {
        document.getElementById("divNovoArmadillo").setAttribute("class","secreto");
    }
    // if (gustavoolAuxiliares.includes("Denilson") == true) {
    //     document.getElementById("divDenilson").setAttribute("class","branco");
    // } else {
    //     document.getElementById("divDenilson").setAttribute("class","secreto");
    // }
    // if (gustavoolAuxiliares.includes("Joaquim") == true) {
    //     document.getElementById("divJoaquim").setAttribute("class","branco");
    // } else {
    //     document.getElementById("divJoaquim").setAttribute("class","secreto");
    // }
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
    if (gustavoolAuxiliares.includes("Jeremias") == true) {
        document.getElementById("divJeremias").setAttribute("class","branco");
    } else {
        document.getElementById("divJeremias").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("Andromedus") == true) {
        document.getElementById("divAndromedus").setAttribute("class","branco");
    } else {
        document.getElementById("divAndromedus").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("Kandoru") == true) {
        document.getElementById("divKandoru").setAttribute("class","branco");
    } else {
        document.getElementById("divKandoru").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("Ladrao") == true) {
        document.getElementById("divLadrao").setAttribute("class","branco");
    } else {
        document.getElementById("divLadrao").setAttribute("class","secreto");
    }
    if (jvictorAuxiliares.includes("NovoJv") == true) {
        document.getElementById("divNovoJv").setAttribute("class","branco");
    } else {
        document.getElementById("divNovoJv").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Braid") == true) {
        document.getElementById("divBraid").setAttribute("class","preto");
    } else {
        document.getElementById("divBraid").setAttribute("class","secreto");
    }
    // if (ivanAuxiliares.includes("Alexandrino") == true) {
    //     document.getElementById("divAlexandrino").setAttribute("class","preto");
    // } else {
    //     document.getElementById("divAlexandrino").setAttribute("class","secreto");
    // }
    if (ivanAuxiliares.includes("Kaiba") == true) {
        document.getElementById("divKaiba").setAttribute("class","preto");
    } else {
        document.getElementById("divKaiba").setAttribute("class","secreto");
    }
    if (ivanAuxiliares.includes("Kaioleb") == true) {
        document.getElementById("divKaioleb").setAttribute("class","preto");
    } else {
        document.getElementById("divKaioleb").setAttribute("class","secreto");
    }
    if (lucAuxiliares.includes("Scarbo") == true) {
        document.getElementById("divScarbo").setAttribute("class","preto");
    } else {
        document.getElementById("divScarbo").setAttribute("class","secreto");
    }
    if (lucAuxiliares.includes("NovoLuc") == true) {
        document.getElementById("divNovoLuc").setAttribute("class","preto");
    } else {
        document.getElementById("divNovoLuc").setAttribute("class","secreto");
    }
    // if (magAuxiliares.includes("Alice") == true) {
    //     document.getElementById("divAlice").setAttribute("class","preto");
    // } else {
    //     document.getElementById("divAlice").setAttribute("class","secreto");
    // }
    if (magAuxiliares.includes("Bilu") == true) {
        document.getElementById("divBilu").setAttribute("class","preto");
    } else {
        document.getElementById("divBilu").setAttribute("class","secreto");
    }
    if (magAuxiliares.includes("NovoMag") == true) {
        document.getElementById("divNovoMag").setAttribute("class","preto");
    } else {
        document.getElementById("divNovoMag").setAttribute("class","secreto");
    }
    if (potassioAuxiliares.includes("SrOinc") == true) {
        document.getElementById("divSrOinc").setAttribute("class","preto");
    } else {
        document.getElementById("divSrOinc").setAttribute("class","secreto");
    }
    if (potassioAuxiliares.includes("MariaPosa") == true) {
        document.getElementById("divMariaPosa").setAttribute("class","preto");
    } else {
        document.getElementById("divMariaPosa").setAttribute("class","secreto");
    }
    if (potassioAuxiliares.includes("NovoPotassio") == true) {
        document.getElementById("divNovoPotassio").setAttribute("class","preto");
    } else {
        document.getElementById("divNovoPotassio").setAttribute("class","secreto");
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
    if (armadilloAuxiliares.includes("Saniluscus") == true) {
        if (document.getElementById("Saniluscus").checked == true) {
        saniluscusDado = rolagem(20)+8;
        if (rogerioDado >= dt) {
            saniluscusDano = rolagem(6)+rolagem(6)+rolagem(6);
            saniluscusDanoFinal = saniluscusDano - perfuracao;
            if (saniluscusDanoFinal < 0) {
                saniluscusDanoFinal = 0;
            }
        } else {
            saniluscusDano = 0;
            saniluscusDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Saniluscus.png" title="Resultado: ` + saniluscusDado + `, Dano: ` + saniluscusDano + ` - ` + perfuracao + `"> ` + saniluscusDanoFinal);
    }
    }
    if (armadilloAuxiliares.includes("NovoArmadillo") == true) {
        if (document.getElementById("NovoArmadillo").checked == true) {
        novoarmadilloDado = rolagem(20)+0;
        if (novoarmadilloDado >= dt) {
            novoarmadilloDano = 0;
            novoarmadilloDanoFinal = novoarmadilloDano - 0;
            if (novoarmadilloDanoFinal < 0) {
                novoarmadilloDanoFinal = 0;
            }
        } else {
            novoarmadilloDano = 0;
            novoarmadilloDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/NovoArmadillo.png" title="Resultado: ` + novoarmadilloDado + `, Dano: ` + novoarmadilloDano + ` - ` + 0 + `"> ` + novoarmadilloDanoFinal);
    }
    }
    // if (gustavoolAuxiliares.includes("Denilson") == true) {
    //     if (document.getElementById("Denilson").checked == true) {
    //         denilsonDado = rolagem(20)+11;
    //     if (denilsonDado >= dt) {
    //         denilsonDano = rolagem(8)+rolagem(8)+rolagem(8)+3;
    //         denilsonDanoFinal = denilsonDano - impacto;
    //         if (denilsonDanoFinal < 0) {
    //             denilsonDanoFinal = 0;
    //         }
    //     } else {
    //         denilsonDano = 0;
    //         denilsonDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Denilson.png" title="Resultado: ` + denilsonDado + `, Dano: ` + denilsonDano + ` - ` + impacto + `"> ` + denilsonDanoFinal);
    //     } 
    // }
    // if (gustavoolAuxiliares.includes("Joaquim") == true) {
    //     if (document.getElementById("Joaquim").checked == true) {
    //     joaquimDado = rolagem(20)+9;
    //     if (joaquimDado >= dt) {
    //         joaquimDano = rolagem(6)+rolagem(6)+1;
    //         joaquimDanoFinal = joaquimDano - perfuracao;
    //         if (joaquimDanoFinal < 0) {
    //             joaquimDanoFinal = 0;
    //         }
    //     } else {
    //         joaquimDano = 0;
    //         joaquimDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Joaquim.png" title="Resultado: ` + joaquimDado + `, Dano: ` + joaquimDano + ` - ` + perfuracao + `"> ` + joaquimDanoFinal);
    // }
    // }
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
        if (gustavoolAuxiliares.includes("Jeremias") == true) {
        if (document.getElementById("Jeremias").checked == true) {
        jeremiasDado = rolagem(20)+0;
        if (jeremiasDado >= dt) {
            jeremiasDano = 0;
            jeremiasDanoFinal = jeremiasDano - 0;
            if (jeremiasDanoFinal < 0) {
                jeremiasDanoFinal = 0;
            }
        } else {
            jeremiasDano = 0;
            jeremiasDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Jeremias.png" title="Resultado: ` + jeremiasDado + `, Dano: ` + jeremiasDano + ` - ` + 0 + `"> ` + jeremiasDanoFinal);
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
        if (jvictorAuxiliares.includes("Ladrao") == true) {
        if (document.getElementById("Ladrao").checked == true) {
        ladraoDado = rolagem(20)+10;
            if (ladraoDado >= dt) {
            ladraoDano = rolagem(6)+rolagem(6)+5;
            ladraoDanoDefendido = ladraoDano - corte;
            if (ladraoDanoDefendido < 0) {
                ladraoDanoDefendido = 0;
            }
            ladraoDanoFogo = rolagem(6);
            ladraoDanoFogoDefendido = ladraoDanoFogo - fogo;
            if (ladraoDanoFogoDefendido < 0) {
                ladraoDanoFogoDefendido = 0;
            }
            ladraoDanoFinal = ladraoDanoDefendido + ladraoDanoFogoDefendido;
        } else {
            ladraoDano = 0;
            ladraoDanoFogo = 0;
            ladraoDanoFogoDefendido = 0;
            ladraoDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Ladrao.png" title="Resultado: ` + ladraoDado + `, Dano: (` + ladraoDano + ` - ` + corte + `) + (` + ladraoDanoFogo + ` - ` + fogo + `)"> ` + ladraoDanoFinal);
    }
    }
        if (jvictorAuxiliares.includes("NovoJv") == true) {
        if (document.getElementById("NovoJv").checked == true) {
        novojvDado = rolagem(20)+0;
        if (novojvDado >= dt) {
            novojvDano = 0;
            novojvDanoFinal = novojvDano - 0;
            if (novojvDanoFinal < 0) {
                novojvDanoFinal = 0;
            }
        } else {
            novojvDano = 0;
            novojvDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/NovoJv.png" title="Resultado: ` + novojvDado + `, Dano: ` + novojvDano + ` - ` + 0 + `"> ` + novojvDanoFinal);
    }
    }
    if (ivanAuxiliares.includes("Braid") == true) {
        if (document.getElementById("Braid").checked == true) {
        braidDado = rolagem(20)+4;
        if (braidDado >= dt) {
            braidDano = rolagem(12)+rolagem(12);
            braidDanoFinal = braidDano - balistico;
            if (braidDanoFinal < 0) {
                braidDanoFinal = 0;
            }
        } else {
            braidDano = 0;
            braidDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Braid.png" title="Resultado: ` + braidDado + `, Dano: ` + braidDano + ` - ` + balistico + `"> ` + braidDanoFinal);
    }
    }
    // if (ivanAuxiliares.includes("Alexandrino") == true) {
    //     if (document.getElementById("Alexandrino").checked == true) {
    //     alexandrinoDado = rolagem(20)+4;
    //     if (alexandrinoDado >= dt) {
    //         alexandrinoDano = rolagem(8)+rolagem(8);
    //         alexandrinoDanoFinal = alexandrinoDano - perfuracao;
    //         if (alexandrinoDanoFinal < 0) {
    //             alexandrinoDanoFinal = 0;
    //         }
    //     } else {
    //         alexandrinoDano = 0;
    //         alexandrinoDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Alexandrino.png" title="Resultado: ` + alexandrinoDado + `, Dano: ` + alexandrinoDano + ` - ` + perfuracao + `"> ` + alexandrinoDanoFinal);
    // }
    // }
    if (ivanAuxiliares.includes("Kaiba") == true) {
        if (document.getElementById("Kaiba").checked == true) {
        kaibaDado = rolagem(20)+6;
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
        if (ivanAuxiliares.includes("Kaioleb") == true) {
        if (document.getElementById("Kaioleb").checked == true) {
        kaiolebDado = rolagem(20)+5;
        if (kaiolebDado >= dt) {
            kaiolebDano = rolagem(4)+3;
            kaiolebDanoFinal = kaiolebDano - corte;
            if (kaiolebDanoFinal < 0) {
                kaiolebDanoFinal = 0;
            }
        } else {
            kaiolebDano = 0;
            kaiolebDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Kaioleb.png" title="Resultado: ` + kaiolebDado + `, Dano: ` + kaiolebDano + ` - ` + corte + `"> ` + kaiolebDanoFinal);
    }
    }
    if (lucAuxiliares.includes("Scarbo") == true) {
        if (document.getElementById("Scarbo").checked == true) {
        scarboDado = rolagem(20)+12;
        if (scarboDado >= dt) {
            scarboDano = rolagem(12)+rolagem(12)+rolagem(6);
            scarboDanoFinal = scarboDano - balistico;
            if (scarboDanoFinal < 0) {
                scarboDanoFinal = 0;
            }
        } else {
            scarboDano = 0;
            scarboDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Scarbo.png" title="Resultado: ` + scarboDado + `, Dano: ` + scarboDano + ` - ` + balistico + `"> ` + scarboDanoFinal);
    }
    }
    if (lucAuxiliares.includes("NovoLuc") == true) {
        if (document.getElementById("NovoLuc").checked == true) {
        novolucDado = rolagem(20)+2;
        if (novolucDado >= dt && novolucDado == 22) {
            novolucDano = 1;
            novolucDanoFinal = novolucDano - impacto;
            if (novolucDanoFinal < 0) {
                novolucDanoFinal = 0;
            }
        } else {
            novolucDano = 0;
            novolucDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/NovoLuc.png" title="Resultado: ` + novolucDado + `, Dano: ` + novolucDano + ` - ` + impacto + `"> ` + novolucDanoFinal);
    }
    }
    //     if (magAuxiliares.includes("Alice") == true) {
    //     if (document.getElementById("Alice").checked == true) {
    //     aliceDado = rolagem(20)+7;
    //     if (aliceDado >= dt) {
    //         aliceDano = rolagem(8)+rolagem(8)+2;
    //         aliceDanoFinal = aliceDano - impacto;
    //         if (aliceDanoFinal < 0) {
    //             aliceDanoFinal = 0;
    //         }
    //     } else {
    //         aliceDano = 0;
    //         aliceDanoFinal = 0;
    //     }
    //     listaDanos.push(`<img src="assets/Alice.png" title="Resultado: ` + aliceDado + `, Dano: ` + aliceDano + ` - ` + impacto + `"> ` + aliceDanoFinal);
    // }
    // }
    if (magAuxiliares.includes("Bilu") == true) {
        if (document.getElementById("Bilu").checked == true) {
        biluDado = rolagem(20)+3;
        if (biluDado >= dt) {
            biluDano = rolagem(4)+rolagem(4)+2;
            biluDanoFinal = biluDano - perfuracao;
            if (biluDanoFinal < 0) {
                biluDanoFinal = 0;
            }
        } else {
            biluDano = 0;
            biluDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/Bilu.png" title="Resultado: ` + biluDado + `, Dano: ` + biluDano + ` - ` + perfuracao + `"> ` + biluDanoFinal);
    }
    }
        if (magAuxiliares.includes("NovoMag") == true) {
        if (document.getElementById("NovoMag").checked == true) {
        novomagDado = rolagem(20)+16;
        if (novomagDado >= dt) {
            novomagDano = rolagem(4)+rolagem(4)+2;
            novomagDanoFinal = novomagDano - corte;
            if (novomagDanoFinal < 0) {
                novomagDanoFinal = 0;
            }
        } else {
            novomagDano = 0;
            novomagDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/NovoMag.png" title="Resultado: ` + novomagDado + `, Dano: ` + novomagDano + ` - ` + corte + `"> ` + novomagDanoFinal);
    }
    }
        if (potassioAuxiliares.includes("SrOinc") == true) {
        if (document.getElementById("SrOinc").checked == true) {
        sroincDado = rolagem(20)+6;
        if (sroincDado >= dt) {
            sroincDano = rolagem(6)+rolagem(6);
            sroincDanoFinal = sroincDano - perfuracao;
            if (sroincDanoFinal < 0) {
                sroincDanoFinal = 0;
            }
        } else {
            sroincDano = 0;
            sroincDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/SrOinc.png" title="Resultado: ` + sroincDado + `, Dano: ` + sroincDano + ` - ` + perfuracao + `"> ` + sroincDanoFinal);
    }
    }
        if (potassioAuxiliares.includes("MariaPosa") == true) {
        if (document.getElementById("MariaPosa").checked == true) {
        mariaposaDado = rolagem(20)+11;
        if (mariaposaDado >= dt) {
            mariaposaDano = rolagem(8)+rolagem(8);
            mariaposaDanoFinal = mariaposaDano - 0;
            if (mariaposaDanoFinal < 0) {
                mariaposaDanoFinal = 0;
            }
        } else {
            mariaposaDano = 0;
            mariaposaDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/MariaPosa.png" title="Resultado: ` + mariaposaDado + `, Dano: ` + mariaposaDano + ` - ` + 0 + `"> ` + mariaposaDanoFinal);
    }
    }
        if (potassioAuxiliares.includes("NovoPotassio") == true) {
        if (document.getElementById("NovoPotassio").checked == true) {
        novopotassioDado = rolagem(20)+6;
        if (novopotassioDado >= dt) {
            novopotassioDano = rolagem(4)+rolagem(4)+1;
            novopotassioDanoFinal = novopotassioDano - corte;
            if (novopotassioDanoFinal < 0) {
                novopotassioDanoFinal = 0;
            }
        } else {
            novopotassioDano = 0;
            novopotassioDanoFinal = 0;
        }
        listaDanos.push(`<img src="assets/NovoPotassio.png" title="Resultado: ` + novopotassioDado + `, Dano: ` + novopotassioDano + ` - ` + corte + `"> ` + novopotassioDanoFinal);
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
    saniluscusDano = 0;
    saniluscusDanoFinal = 0;
    novoarmadilloDano = 0;
    novoarmadilloDanoFinal = 0;
    // denilsonDano = 0;
    // denilsonDanoFinal = 0;
    // joaquimDano = 0;
    // joaquimDanoFinal = 0;
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
    jeremiasDano = 0;
    jeremiasDanoFinal = 0;
    andromedusDano = 0;
    andromedusDanoDefendido = 0;
    andromedusDanoLuz = 0;
    andromedusDanoLuzDefendido = 0;
    andromedusDanoFinal = 0;
    kandoruDano = 0;
    kandoruDanoFinal = 0;
    ladraoDanoDefendido = 0;
    ladraoDanoFogo = 0;
    ladraoDanoFogoDefendido = 0;
    ladraoDanoFinal = 0;
    novojvDano = 0;
    novojvDanoFinal = 0;
    braidDano = 0;
    braidDanoFinal = 0;
    // alexandrinoDano = 0;
    // alexandrinoDanoFinal = 0;
    kaibaDano = 0;
    kaibaDanoFinal = 0;
    kaiolebDano = 0;
    kaiolebDanoFinal = 0;
    scarboDano = 0;
    scarboDanoFinal = 0;
    novolucDano = 0;
    novolucDanoFinal = 0;
    // aliceDano = 0;
    // aliceDanoFinal = 0;
    biluDano = 0;
    biluDanoFinal = 0;
    novomagDano = 0;
    novomagDanoFinal = 0;
    sroincDano = 0;
    sroincDanoFinal = 0;
    mariaposaDano = 0;
    mariaposaDanoFinal = 0;
    novopotassioDano = 0;
    novopotassioDanoFinal = 0;
    listaDanos = [];
}

// function trocarPagina() {
//     if (pagina == 1) {
//     document.getElementById("pag-1").setAttribute("class","secreto");
//     document.getElementById("pag-2").setAttribute("class","");
//     AddConfigInicial();
//     pagina = 2;
//     } else {
//         document.getElementById("pag-2").setAttribute("class","secreto");
//         document.getElementById("pag-1").setAttribute("class","");
//         pagina = 1;
//     }
// }

// function AddConfigInicial() {
//     document.getElementById("nome").innerHTML = document.getElementById("adicionar").value;
// }

// function somarDado() {
//     repetirRolagem = document.getElementById("quantidade-soma").value;
//     dado = document.getElementById("dado-soma").value;
//     if (primeiro == 1) {
//     document.getElementById("previa").innerHTML = repetirRolagem + "d" + dado;
//     primeiro = 0;
//     } else {
//         document.getElementById("previa").innerHTML = document.getElementById("previa").innerHTML + "+" + repetirRolagem + "d" + dado;
//     }
// }