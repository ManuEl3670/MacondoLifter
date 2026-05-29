function calcolaLivello() {
    // lettura valori
    const esercizio = document.getElementById('esercizio').value;
    const pesoCorporeo = parseFloat(document.getElementById('pesoCorporeo').value);
    const pesoAlzato = parseFloat(document.getElementById('pesoAlzato').value);
    const videolink = document.getElementById('videoLink').value.trim();

    // controllo input validi
    if (!pesoCorporeo || !pesoAlzato || pesoCorporeo <= 0 || pesoAlzato <= 0) {
        alert('Per favore, inserisci valori validi per peso corporeo e peso alzato.');
        return;
    }

    //calcolo del rapporto forza/peso
    const rapporto = pesoAlzato / pesoCorporeo;
    let livello = "";
    let classeCss = "";

    // calcolo dello stendardo in base ai coefficenti specifici
    if (esercizio === "squat") {
        if (rapporto < 1.1) { livello = "Principiante"; classeCss = "livello-principiante";}
        else if (rapporto < 1.6) { livello = "Intermedio"; classeCss = "livello-intermedio";}
        else if (rapporto < 2.1) { livello = "Avanzato"; classeCss = "livello-avanzato";}
        else { livello = "Elite"; classeCss = "livello-elite";}
    }
    else if (esercizio === "panca") {
        if (rapporto < 1) { livello = "Principiante"; classeCss = "livello-principiante";}
        else if (rapporto < 1.3) { livello = "Intermedio"; classeCss = "livello-intermedio";}
        else if (rapporto < 1.6) { livello = "Avanzato"; classeCss = "livello-avanzato";}
        else { livello = "Elite"; classeCss = "livello-elite";}
    }
    else if (esercizio === "stacco") {
        if (rapporto < 1.8) { livello = "Principiante"; classeCss = "livello-principiante";}
        else if (rapporto < 2.3) { livello = "Intermedio"; classeCss = "livello-intermedio";}
        else if (rapporto < 2.8) { livello = "Avanzato"; classeCss = "livello-avanzato";}
        else { livello = "Elite"; classeCss = "livello-elite";}
    }

// scrittura dei risultati
document.getElementById('txtRapporto').innerText = rapporto.toFixed(2);

const elementoLivello = document.getElementById('txtLivello');
elementoLivello.innerText = livello;
elementoLivello.className = "badge " + classeCss;

// gestione del video
const msgVerifica = document.getElementById('msgVerifica');
if (videolink !== "") {
    msgVerifica.innerText = "Alzata con link di verifica allegato.";
} else {
    msgVerifica.innerText = "Dato autocertificato (nessun link video fornito).";
}

//rende visibile la sezione dei risultati
document.getElementById('resultBox').style.display = "block";
}