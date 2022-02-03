/* 1# Esercizio Base */
// --- Classi ---
var Utente1 = /** @class */ (function () {
    function Utente1() {
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    Utente1.prototype.ricarica = function (valoreRicarica) {
        this.credito += valoreRicarica;
    };
    Utente1.prototype.chiamata = function (durataChiamata) {
        var tariffa = 0.2;
        var prezzoChiamata = durataChiamata * tariffa;
        if (this.credito < prezzoChiamata) {
            console.log("Credito insufficiente");
            return;
        }
        else {
            this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
            this.numeroChiamate++;
        }
    };
    Utente1.prototype.creditoResiduo = function () {
        return this.credito;
    };
    Utente1.prototype.chiamateEseguite = function () {
        return this.numeroChiamate;
    };
    Utente1.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Utente1;
}());
var Utente2 = /** @class */ (function () {
    function Utente2() {
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    Utente2.prototype.ricarica = function (valoreRicarica) {
        this.credito += valoreRicarica;
    };
    Utente2.prototype.chiamata = function (durataChiamata) {
        var tariffa = 0.2;
        var prezzoChiamata = durataChiamata * tariffa;
        if (this.credito < prezzoChiamata) {
            console.log("Credito insufficiente");
            return;
        }
        else {
            this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
            this.numeroChiamate++;
        }
    };
    Utente2.prototype.creditoResiduo = function () {
        return this.credito;
    };
    Utente2.prototype.chiamateEseguite = function () {
        return this.numeroChiamate;
    };
    Utente2.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Utente2;
}());
var Utente3 = /** @class */ (function () {
    function Utente3() {
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    Utente3.prototype.ricarica = function (valoreRicarica) {
        this.credito += valoreRicarica;
    };
    Utente3.prototype.chiamata = function (durataChiamata) {
        var tariffa = 0.2;
        var prezzoChiamata = durataChiamata * tariffa;
        if (this.credito < prezzoChiamata) {
            console.log("Credito insufficiente");
            return;
        }
        else {
            this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
            this.numeroChiamate++;
        }
    };
    Utente3.prototype.creditoResiduo = function () {
        return this.credito;
    };
    Utente3.prototype.chiamateEseguite = function () {
        return this.numeroChiamate;
    };
    Utente3.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Utente3;
}());
// --- Console Log - Esercizio Base ---
// Primo utente
console.log("--- Primo Utente ---");
var smartphone1 = new Utente1();
smartphone1.ricarica(50);
console.log("Credito disponibile: ".concat(smartphone1.creditoResiduo(), "\u20AC"));
smartphone1.chiamata(20);
smartphone1.chiamata(2);
smartphone1.chiamata(5);
smartphone1.chiamata(5);
console.log("Numero chiamate: ".concat(smartphone1.chiamateEseguite()));
console.log("Credito disponibile dopo le chiamate: ".concat(smartphone1.creditoResiduo(), "\u20AC"));
smartphone1.azzeraChiamate();
console.log("Numero chiamate: ".concat(smartphone1.chiamateEseguite(), " (dopo azzeramento chiamate)"));
// Secondo utente
console.log("--- Secondo Utente ---");
var smartphone2 = new Utente2();
smartphone2.ricarica(20);
console.log("Credito disponibile: ".concat(smartphone2.creditoResiduo(), "\u20AC"));
smartphone2.chiamata(10);
smartphone2.chiamata(5);
smartphone2.chiamata(4);
smartphone2.chiamata(10);
smartphone2.chiamata(2);
console.log("Numero chiamate: ".concat(smartphone2.chiamateEseguite()));
console.log("Credito disponibile dopo le chiamate: ".concat(smartphone2.creditoResiduo(), "\u20AC"));
smartphone2.azzeraChiamate();
console.log("Numero chiamate: ".concat(smartphone2.chiamateEseguite(), " (dopo azzeramento chiamate)"));
// Terzo utente
console.log("--- Terzo Utente ---");
var smartphone3 = new Utente3();
smartphone3.ricarica(10);
console.log("Credito disponibile: ".concat(smartphone3.creditoResiduo(), "\u20AC"));
smartphone3.chiamata(30);
smartphone3.chiamata(10);
smartphone3.chiamata(30);
console.log("Numero chiamate: ".concat(smartphone3.chiamateEseguite()));
console.log("Credito disponibile dopo le chiamate: ".concat(smartphone3.creditoResiduo(), "\u20AC"));
smartphone3.azzeraChiamate();
console.log("Numero chiamate: ".concat(smartphone3.chiamateEseguite(), " (dopo azzeramento chiamate)"));
/* 2# --- IPhone --- */
var iphone = /** @class */ (function () {
    function iphone() {
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    iphone.prototype.ricarica = function () {
        var valoreRicarica = parseInt(ricaricaSel.value);
        this.credito += valoreRicarica;
        ricaricaOk.style.display = "none";
        ricaricaP.style.display = "block";
        chiamaBtn.disabled = false;
        creditoP.innerHTML = iphoneUser.creditoResiduo() + " €";
    };
    iphone.prototype.chiamata = function () {
        var tariffa = 0.2;
        var durataRandom = Math.floor((Math.random() * 20) + 1);
        var prezzoChiamata = durataRandom * tariffa;
        if (this.credito < prezzoChiamata) {
            callLog.innerHTML += "<li>Credito Insufficente</li>";
            chiamaBtn.disabled = true;
            return;
        }
        else {
            this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
            creditoP.innerHTML = this.credito + " €";
            this.numeroChiamate++;
            callLog.innerHTML += "<li>Chiamata ".concat(this.numeroChiamate, " - ").concat(durataRandom, " min</li>");
        }
    };
    iphone.prototype.creditoResiduo = function () {
        return this.credito;
    };
    iphone.prototype.chiamateEseguite = function () {
        return this.numeroChiamate;
    };
    iphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        callLog.innerHTML = "";
    };
    return iphone;
}());
var iphoneUser = new iphone();
// Home - Elementi Button
var homeBtn = document.getElementById("homeBtn");
var ricaricaBtn = document.getElementById("ricaricaBtn");
var chiamataBtn = document.getElementById("chiamataBtn");
var creditoBtn = document.getElementById("creditoBtn");
// App - Elementi pagina
var homePage = document.getElementById("homePage");
var ricaricaPage = document.getElementById("ricaricaPage");
var chiamataPage = document.getElementById("chiamataPage");
var creditoPage = document.getElementById("creditoPage");
// Event Handler - Menu di navigazione
homeBtn.addEventListener("click", function () {
    ricaricaOk.style.display = "block";
    ricaricaOk.style.margin = "auto";
    ricaricaP.style.display = "none";
    homePage.style.display = "block";
    ricaricaPage.style.display = "none";
    chiamataPage.style.display = "none";
    creditoPage.style.display = "none";
});
ricaricaBtn.addEventListener("click", function () {
    homePage.style.display = "none";
    ricaricaPage.style.display = "block";
    chiamataPage.style.display = "none";
    creditoPage.style.display = "none";
});
chiamataBtn.addEventListener("click", function () {
    homePage.style.display = "none";
    ricaricaPage.style.display = "none";
    chiamataPage.style.display = "block";
    creditoPage.style.display = "none";
});
creditoBtn.addEventListener("click", function () {
    homePage.style.display = "none";
    ricaricaPage.style.display = "none";
    chiamataPage.style.display = "none";
    creditoPage.style.display = "block";
});
// Ricarica & Credito
var ricaricaSel = document.getElementById("ricaricaSel");
var ricaricaOk = document.getElementById("ricaricaOk");
var ricaricaP = document.getElementById("ricaricaP");
var creditoP = document.getElementById("creditoP");
ricaricaOk.addEventListener("click", function () {
    iphoneUser.ricarica();
});
// Chiama
var callLog = document.getElementById("callLog");
var chiamaBtn = document.getElementById("chiamaBtn");
var resetBtn = document.getElementById("resetBtn");
chiamaBtn.addEventListener("click", function () {
    iphoneUser.chiamata();
});
resetBtn.addEventListener("click", function () {
    iphoneUser.azzeraChiamate();
});
