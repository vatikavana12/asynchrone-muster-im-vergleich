// Datei: async_vergleich.js

const chalk = require('chalk'); // Optional: für bessere Lesbarkeit

// --- Hilfsfunktion zur Simulation einer Verzögerung ---

/**
 * Simuliert eine langsame, asynchrone Operation.
 * @param {string} name - Name der Operation zur Protokollierung.
 * @param {number} dauerMs - Verzögerungsdauer in Millisekunden.
 */
function simuliereVerzoegerung(name, dauerMs) {
    console.log(chalk.gray(`[Start ${name}]: Startet für ${dauerMs}ms...`));
    // Simuliert eine langsame Operation, die keinen Thread blockiert
    return new Promise(aufloesen => setTimeout(aufloesen, dauerMs));
}


// ------------------------------------------------------------------
// 1. MUSTER: TRADITIONELLE CALLBACKS
// ------------------------------------------------------------------
function callbackMuster() {
    console.log(chalk.yellow.bold("\n--- 1. CALLBACK-MUSTER (Veraltet) ---"));
    const startzeit = Date.now();
    
    // Schritt 1
    simuliereVerzoegerung("Callback A", 500).then(() => {
        console.log(chalk.yellow("Callback A abgeschlossen."));
        
        // Schritt 2 (Verschachtelung)
        simuliereVerzoegerung("Callback B", 300).then(() => {
            console.log(chalk.yellow("Callback B abgeschlossen."));
            
            // Schritt 3 (Tiefer verschachtelt)
            simuliereVerzoegerung("Callback C", 400).then(() => {
                console.log(chalk.yellow("Callback C abgeschlossen."));
                const endzeit = Date.now();
                console.log(chalk.yellow.bold(`Callback-Gesamtdauer: ${endzeit - startzeit}ms`));
            });
        });
    });
}


// ------------------------------------------------------------------
// 2. MUSTER: PROMISE-KETTEN (.then().then())
// ------------------------------------------------------------------
function promiseKettenMuster() {
    console.log(chalk.cyan.bold("\n--- 2. PROMISE-KETTEN-MUSTER ---"));
    const startzeit = Date.now();
    
    // Aufbau der Kette mit .then()
    simuliereVerzoegerung("Promise A", 500)
        .then(() => {
            console.log(chalk.cyan("Promise A abgeschlossen."));
            return simuliereVerzoegerung("Promise B", 300);
        })
        .then(() => {
            console.log(chalk.cyan("Promise B abgeschlossen."));
            return simuliereVerzoegerung("Promise C", 400);
        })
        .then(() => {
            console.log(chalk.cyan("Promise C abgeschlossen."));
            const endzeit = Date.now();
            console.log(chalk.cyan.bold(`Promise-Ketten-Gesamtdauer: ${endzeit - startzeit}ms`));
        })
        .catch(fehler => {
            console.error(chalk.red("Fehler in der Promise-Kette:"), fehler);
        });
}


// ------------------------------------------------------------------
// 3. MUSTER: ASYNC/AWAIT (Modern und am besten lesbar)
// ------------------------------------------------------------------
async function asyncAwaitMuster() {
    console.log(chalk.magenta.bold("\n--- 3. ASYNC/AWAIT-MUSTER (Modern) ---"));
    const startzeit = Date.now();

    try {
        // Die asynchronen Schritte erscheinen synchron
        await simuliereVerzoegerung("Async A", 500);
        console.log(chalk.magenta("Async A abgeschlossen."));
        
        await simuliereVerzoegerung("Async B", 300);
        console.log(chalk.magenta("Async B abgeschlossen."));
        
        await simuliereVerzoegerung("Async C", 400);
        console.log(chalk.magenta("Async C abgeschlossen."));

        const endzeit = Date.now();
        console.log(chalk.magenta.bold(`Async/Await-Gesamtdauer: ${endzeit - startzeit}ms`));
        
    } catch (fehler) {
        console.error(chalk.red("Fehler im Async/Await-Block:"), fehler);
    }
}

// Führen Sie die Demos aus
// Stellen Sie sicher, dass sie nacheinander starten, um die Konsolenausgabe zu entwirren
async function startVergleich() {
    console.log(chalk.white.bold("Start des Asynchronitätsvergleichs..."));
    
    // Die Demos laufen nicht sequenziell, da die ersten beiden Muster
    // nicht warten. Sie beginnen nur zu unterschiedlichen Zeiten.
    
    // Wir verwenden einen setTimeout, um die Ausgaben besser zu trennen
    callbackMuster();
    
    setTimeout(promiseKettenMuster, 50); 
    
    setTimeout(asyncAwaitMuster, 100); 
}

startVergleich();
