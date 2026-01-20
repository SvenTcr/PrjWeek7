let beschikbareSaldo = 100000;

// Functie om bericht in div te tonen
function showNotification(message) {
    document.getElementById("notification").innerText = message;
}

//functie die de geselecteerde valuta controleert
function kopen() {
    const valuta = document.getElementById("cryptovaluta").value;
    
    if (!valuta) {
        showNotification("Selecteer eerst een cryptovaluta.");
        return;
    }
    
    if (valuta === "Bitcoin") {
        kopenbitcoin();
    } else if (valuta === "Ethereum") {
        kopenethereum();
    } else if (valuta === "Litecoin") {
        kopenlitecoin();
    }
}

//functie voor kopen bitcoin
function kopenbitcoin() {
    const valuta = document.getElementById("Bitcoinvaluta").value;
    const bedrag = parseFloat(document.getElementById("Bedrag").value);
    if (isNaN(bedrag) || bedrag <= 0) {
        showNotification("Vul een geldig bedrag in.");
        return;
    }
    if (bedrag > beschikbareSaldo) {
        showNotification("Onvoldoende saldo.");
        return;
    }
    else {
        beschikbareSaldo -= bedrag;
        showNotification(`Je hebt ${bedrag} euro aan Bitcoin gekocht.`);
    }
}

//functie voor kopen ethereum
function kopenethereum() {
    const valuta = document.getElementById("Ethereumvaluta").value;
    const bedrag = parseFloat(document.getElementById("Bedrag").value);
    if (isNaN(bedrag) || bedrag <= 0) {
        showNotification("Vul een geldig bedrag in.");
        return;
    }
    if (bedrag > beschikbareSaldo) {
        showNotification("Onvoldoende saldo.");
        return;
    }
    else {
        beschikbareSaldo -= bedrag;
        showNotification(`Je hebt ${bedrag} euro aan Ethereum gekocht.`);
    }
}
//functie voor kopen litecoin
function kopenlitecoin() {
    const valuta = document.getElementById("Litecoinvaluta").value;
    const bedrag = parseFloat(document.getElementById("Bedrag").value);
    if (isNaN(bedrag) || bedrag <= 0) {
        showNotification("Vul een geldig bedrag in.");
        return;
    }
    if (bedrag > beschikbareSaldo) {
        showNotification("Onvoldoende saldo.");
        return;
    }
    else {
        beschikbareSaldo -= bedrag;
        showNotification(`Je hebt ${bedrag} euro aan Litecoin gekocht.`);
    }
}

//functie die de geselecteerde valuta controleert voor verkopen
function verkopen() {
    const valuta = document.getElementById("cryptovaluta").value;
    
    if (!valuta) {
        showNotification("Selecteer eerst een cryptovaluta.");
        return;
    }
    
    if (valuta === "Bitcoin") {
        verkopenbitcoin();
    } else if (valuta === "Ethereum") {
        verkopenEthereum();
    } else if (valuta === "Litecoin") {
        verkopenlitecoin();
    }
}

//functie voor verkopen bitcoin
function verkopenbitcoin() {
    const bedrag = parseFloat(document.getElementById("Bedrag").value);
    if (isNaN(bedrag) || bedrag <= 0) {
        showNotification("Vul een geldig bedrag in.");
        return;
    }
    else {
        beschikbareSaldo += bedrag;
        showNotification(`Je hebt ${bedrag} euro aan Bitcoin verkocht.`);
    }
}

//functie voor verkopen ethereum
function verkopenEthereum() {
    const bedrag = parseFloat(document.getElementById("Bedrag").value);
    if (isNaN(bedrag) || bedrag <= 0) {
        showNotification("Vul een geldig bedrag in.");
        return;
    }
    else {
        beschikbareSaldo += bedrag;
        showNotification(`Je hebt ${bedrag} euro aan Ethereum verkocht.`);
    }
}

//functie voor verkopen litecoin
function verkopenlitecoin() {
    const bedrag = parseFloat(document.getElementById("Bedrag").value);
    if (isNaN(bedrag) || bedrag <= 0) {
        showNotification("Vul een geldig bedrag in.");
        return;
    }
    else {
        beschikbareSaldo += bedrag;
        showNotification(`Je hebt ${bedrag} euro aan Litecoin verkocht.`);
    }
}
