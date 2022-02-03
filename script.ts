/* 1# Esercizio Base */

// --- Interfaccia ---
interface Smartphone {
  credito: number;
  numeroChiamate: number;
  ricarica(valoreRicarica: number): void;
  chiamata(durataChiamata: number): void;
  creditoResiduo(): number;
  chiamateEseguite(): number;
  azzeraChiamate(): void;
}

// --- Classi ---
class Utente1 implements Smartphone {
  credito: number;
  numeroChiamate: number;
  constructor() {
    this.credito = 0;
    this.numeroChiamate = 0;
  }
  ricarica(valoreRicarica: number): void {
    this.credito += valoreRicarica;
  }

  chiamata(durataChiamata: number): void {
    const tariffa = 0.2;
    let prezzoChiamata = durataChiamata * tariffa;
    if (this.credito < prezzoChiamata) {
      console.log("Credito insufficiente");
      return;
    } else {
      this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
      this.numeroChiamate++;
    }
  }
  creditoResiduo(): number {
    return this.credito;
  }
  chiamateEseguite(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class Utente2 implements Smartphone {
  credito: number;
  numeroChiamate: number;
  constructor() {
    this.credito = 0;
    this.numeroChiamate = 0;
  }
  ricarica(valoreRicarica: number): void {
    this.credito += valoreRicarica;
  }
  chiamata(durataChiamata: number): void {
    const tariffa = 0.2;
    let prezzoChiamata = durataChiamata * tariffa;
    if (this.credito < prezzoChiamata) {
      console.log("Credito insufficiente");
      return;
    } else {
      this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
      this.numeroChiamate++;
    }
  }
  creditoResiduo(): number {
    return this.credito;
  }
  chiamateEseguite(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class Utente3 implements Smartphone {
  credito: number;
  numeroChiamate: number;
  constructor() {
    this.credito = 0;
    this.numeroChiamate = 0;
  }
  ricarica(valoreRicarica: number): void {
    this.credito += valoreRicarica;
  }
  chiamata(durataChiamata: number): void {
    const tariffa = 0.2;
    let prezzoChiamata = durataChiamata * tariffa;
    if (this.credito < prezzoChiamata) {
      console.log("Credito insufficiente");
      return;
    } else {
      this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
      this.numeroChiamate++;
    }
  }
  creditoResiduo(): number {
    return this.credito;
  }
  chiamateEseguite(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

// --- Console Log - Esercizio Base ---
// Primo utente
console.log("--- Primo Utente ---");
let smartphone1 = new Utente1();
smartphone1.ricarica(50);
console.log(`Credito disponibile: ${smartphone1.creditoResiduo()}€`);
smartphone1.chiamata(20);
smartphone1.chiamata(2);
smartphone1.chiamata(5);
smartphone1.chiamata(5);
console.log(`Numero chiamate: ${smartphone1.chiamateEseguite()}`);
console.log(
  `Credito disponibile dopo le chiamate: ${smartphone1.creditoResiduo()}€`
);
smartphone1.azzeraChiamate();
console.log(
  `Numero chiamate: ${smartphone1.chiamateEseguite()} (dopo azzeramento chiamate)`
);

// Secondo utente
console.log("--- Secondo Utente ---");
let smartphone2 = new Utente2();
smartphone2.ricarica(20);
console.log(`Credito disponibile: ${smartphone2.creditoResiduo()}€`);
smartphone2.chiamata(10);
smartphone2.chiamata(5);
smartphone2.chiamata(4);
smartphone2.chiamata(10);
smartphone2.chiamata(2);
console.log(`Numero chiamate: ${smartphone2.chiamateEseguite()}`);
console.log(
  `Credito disponibile dopo le chiamate: ${smartphone2.creditoResiduo()}€`
);
smartphone2.azzeraChiamate();
console.log(
  `Numero chiamate: ${smartphone2.chiamateEseguite()} (dopo azzeramento chiamate)`
);

// Terzo utente
console.log("--- Terzo Utente ---");
let smartphone3 = new Utente3();
smartphone3.ricarica(10);
console.log(`Credito disponibile: ${smartphone3.creditoResiduo()}€`);
smartphone3.chiamata(30);
smartphone3.chiamata(10);
smartphone3.chiamata(30);
console.log(`Numero chiamate: ${smartphone3.chiamateEseguite()}`);
console.log(
  `Credito disponibile dopo le chiamate: ${smartphone3.creditoResiduo()}€`
);
smartphone3.azzeraChiamate();
console.log(
  `Numero chiamate: ${smartphone3.chiamateEseguite()} (dopo azzeramento chiamate)`
);

/* 2# --- IPhone --- */
class iphone implements Smartphone {
  credito: number;
  numeroChiamate: number;
  constructor() {
    this.credito = 0;
    this.numeroChiamate = 0;
  }
  ricarica(): void {
    let valoreRicarica = parseInt(ricaricaSel.value);
    this.credito += valoreRicarica;
    ricaricaOk.style.display = "none";
    ricaricaP.style.display = "block";
    chiamaBtn.disabled = false;
    creditoP.innerHTML = iphoneUser.creditoResiduo() + " €";
  }

  chiamata(): void {
    const tariffa = 0.2;
    let durataRandom = Math.floor((Math.random()*20)+1);
    let prezzoChiamata = durataRandom * tariffa;
    if (this.credito < prezzoChiamata) {
      callLog.innerHTML += `<li>Credito Insufficente</li>`;
      chiamaBtn.disabled=true;
      return;
    } else {
      this.credito = Math.round((this.credito - prezzoChiamata) * 100) / 100;
      creditoP.innerHTML = this.credito + " €";
      this.numeroChiamate++;
      callLog.innerHTML += `<li>Chiamata ${this.numeroChiamate} - ${durataRandom} min</li>`;
    }
  }
  creditoResiduo(): number {
    return this.credito;
  }
  chiamateEseguite(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    callLog.innerHTML = ``;

  }
}
let iphoneUser = new iphone();

// Home - Elementi Button
const homeBtn = document.getElementById("homeBtn")! as HTMLButtonElement;
const ricaricaBtn = document.getElementById(
  "ricaricaBtn"
)! as HTMLButtonElement;
const chiamataBtn = document.getElementById(
  "chiamataBtn"
)! as HTMLButtonElement;
const creditoBtn = document.getElementById("creditoBtn")! as HTMLButtonElement;


// App - Elementi pagina
const homePage = document.getElementById("homePage")! as HTMLElement;
const ricaricaPage = document.getElementById("ricaricaPage")! as HTMLElement;
const chiamataPage = document.getElementById("chiamataPage")! as HTMLElement;
const creditoPage = document.getElementById("creditoPage")! as HTMLElement;

// Event Handler - Menu di navigazione
homeBtn.addEventListener("click", function (): void {
  ricaricaOk.style.display = "block";
  ricaricaOk.style.margin = "auto";
  ricaricaP.style.display = "none";
  homePage.style.display = "block";
  ricaricaPage.style.display = "none";
  chiamataPage.style.display = "none";
  creditoPage.style.display = "none";
 
});

ricaricaBtn.addEventListener("click", function (): void {
  homePage.style.display = "none";
  ricaricaPage.style.display = "block";
  chiamataPage.style.display = "none";
  creditoPage.style.display = "none";
});

chiamataBtn.addEventListener("click", function (): void {
  homePage.style.display = "none";
  ricaricaPage.style.display = "none";
  chiamataPage.style.display = "block";
  creditoPage.style.display = "none";
});

creditoBtn.addEventListener("click", function (): void {
  homePage.style.display = "none";
  ricaricaPage.style.display = "none";
  chiamataPage.style.display = "none";
  creditoPage.style.display = "block";
});

// Ricarica & Credito
const ricaricaSel = document.getElementById("ricaricaSel")! as HTMLSelectElement;
const ricaricaOk = document.getElementById("ricaricaOk")! as HTMLButtonElement;
const ricaricaP = document.getElementById("ricaricaP")! as HTMLElement;
const creditoP = document.getElementById("creditoP") as HTMLElement;

ricaricaOk.addEventListener("click", function():void {
  iphoneUser.ricarica();
});

// Chiama
const callLog = document.getElementById("callLog")! as HTMLElement;
const chiamaBtn = document.getElementById("chiamaBtn")! as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn")! as HTMLButtonElement;

chiamaBtn.addEventListener("click", function():void {
  iphoneUser.chiamata();
});

resetBtn.addEventListener("click", function():void {
  iphoneUser.azzeraChiamate();
});
