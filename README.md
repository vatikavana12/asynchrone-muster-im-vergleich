# ⚡ Asynchrone Muster im Vergleich (Callbacks, Promises, Async/Await)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Async](https://img.shields.io/badge/Konzept-Asynchronität-orange)
![Promises](https://img.shields.io/badge/Promises-ES6-F7DF1E)

## Projektübersicht
Dieses Projekt ist eine direkte, einheitliche Demonstration der drei wichtigsten Muster zur Behandlung von **Asynchronität** und *Flow Control* in Node.js:
1.  **Callbacks:** Die traditionelle, verschachtelte Methode.
2.  **Promise Chains:** Verwendung von `.then().then()...` zur Sequenzierung.
3.  **Async/Await:** Die moderne, synchrone Leseart von Promises.

Ziel ist es, die verbesserte Lesbarkeit und die einfachere Fehlerbehandlung (durch `try/catch`) von Async/Await im Vergleich zu den älteren Mustern zu veranschaulichen. 

## 🛠️ Verwendete Technologien
* **Node.js**: Für die asynchrone Ausführung und `setTimeout`.
* **ES6 Promises**: Die Basis für die modernen Muster.
* **Async/Await**: Der syntaktische Zucker für sauberes Schreiben asynchroner Logik.

## 🔑 Hauptfunktionalitäten
* **Sequenzielle Ausführung:** Alle drei Muster führen drei sequenzielle, verzögerte Schritte aus (`A -> B -> C`).
* **Zeitmessung:** Die Laufzeit wird gemessen, um zu zeigen, dass alle Muster **nicht-blockierend** arbeiten (die Gesamtzeit sollte ungefähr der Summe der einzelnen Verzögerungen entsprechen, nicht der kumulierten Zeit).
* **Code-Vergleich:** Der Unterschied in der Struktur (Verschachtelung vs. lineare `await`-Zeilen) wird hervorgehoben.

## ⚙️ Installation und Ausführung

Dieses Projekt ist in einer einzigen Datei enthalten (`async_vergleich.js`).

1.  **Dateien erstellen:** Erstellen Sie die Datei `async_vergleich.js` in Ihrem Projektordner.

2.  **Abhängigkeiten installieren (opsional, untuk warna):**
    ```bash
    npm install chalk
    ```

3.  **Skript starten:**
    ```bash
    node async_vergleich.js
    ```
    Beobachten Sie die Konsole, um zu sehen, wie die Ausgaben der drei Muster miteinander verschachtelt sind, und vergleichen Sie die Sauberkeit der Implementierungen.

Wenn Sie mehr erfahren möchten, besuchen Sie :
https://forums.thehomefoundry.org/proxy.php?link=https%3A%2F%2Fstarsinfoworld.com
https://www.mrpretzels.com/locations/redirect.aspx?url=https%3A%2F%2Fstarsinfoworld.com%2F
https://www.motoringalliance.com/proxy.php?link=https%3A%2F%2Fstarsinfoworld.com
https://chomoto.vn/proxy.php?link=https%3A%2F%2Fstarsinfoworld.com
https://eridan.websrvcs.com/System/Login.asp?id=48747&Referer=https%3A%2F%2Fstarsinfoworld.com
https://forums.13x.com/proxy.php?link=https%3A%2F%2Fstarsinfoworld.com
https://forums.theganggreen.com/proxy.php?link=https%3A%2F%2Fstarsinfoworld.com
http://www.cricsim.com/proxy.php?link=https://starsinfoworld.com
https://sculptandpaint.com/proxy.php?link=https://starsinfoworld.com&_debug=1
https://forums.theganggreen.com/proxy.php?link=https%3A%2F%2Fstarsinfoworld.com
https://wotmp.com/proxy.php?link=https://starsinfoworld.com
https://www.abcplus.biz/cartform.aspx?returnurl=https%3A%2F%2Fstarsinfoworld.com%2F
https://whois.hostsir.com/?domain=starsinfoworld.com&act=refresh
https://sunniport.com/proxy.php?link=https://starsinfoworld.com
https://dexless.com/proxy.php?link=https://starsinfoworld.com
https://wotmp.com/proxy.php?link=https://starsinfoworld.com
https://www.odsc.on.ca/proxy.php?link=https://starsinfoworld.com
https://forum.liquidfiles.com/proxy.php?link=https://starsinfoworld.com
