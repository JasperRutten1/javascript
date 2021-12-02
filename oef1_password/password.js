/**
 * Schrijf hieronder de code om de sterkte van het wachtwoord
 * weer te geven in de meter.
 * - de berekening gebeurt telkens wanneer de gebruiker iets invult
 *    (een 'input' event)
 * - het ingevulde wachtwoord is de 'value' van het inputveld
 * - de 'sterkte' is de lengte van het wachtwoord
 */
let pass = document.getElementById("password");
let meter = document.getElementById("pass-meter");
window.addEventListener("load", () => {
    pass.addEventListener("input", () => {
        meter.value = pass.value.length;
    })
})
