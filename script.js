// Funktion för att toggla menyn när man klickar på knappen (i navbar)
function showDropdown() {

    var dropdown = document.getElementById("dropdown"); // Skapar en variabel för alla element med id:t dropdown

    dropdown.classList.toggle("active"); // Togglar klassen "active" på alla element med id:t dropdown
    console.log("Dropdown was clicked");

    dropdown.style.transition = 'opacity 0.5s ease'; // Lite fina detaljer :)
}

// Stänger ner menyn ifall fönstrets storlek förändras
// Kollar efter när fönstrets storlek förändras
window.addEventListener("resize", () => {
    const dropdown = document.getElementById("dropdown"); // Skapar en konstant för alla element med id:t dropdown
    if (dropdown) dropdown.classList.remove("active"); // Om alla element med det id:t har klassen "active" tas den klassen bort -> detta för att dölja menyn ifall fönstrets storlek förändras
});

//*******************************************************
//                      VARUKORG
//*******************************************************

// Variabler
const ul = document.querySelector("ul");
const varukorg_varning = document.getElementById("placera-varning-varukorg");
const max = 10;
let count = 0; // Dummyvärde för att kunna utgå från något i mätningar efter att varor lagts till

// Main-sida
// Funktion som identifierar namn, pris, typ, och företag, och skriver ut det i konsolen
function läggTill(namn, pris) {
    console.log("Namn: " + namn + "\nPris: " + pris + "kr")

    // Om count är mindre än max, lägg gör det under
    if (count < max) {
        // Skapa ett li-element med liknande innehåll som konsolen
        let li = document.createElement("li");
        li.textContent = namn + ", Pris: " + pris + " kr";
        li.id = "varukorg";

        // Kopplar ul-elementet med det nyskapade li, så att allt hamnar rätt (kommunikation)
        ul.appendChild(li);
        count++;

        if (count >= max) {
            // Skapa ett p-element med text som säger att varukorgen är full
            let p = document.createElement("p");
            p.textContent = "Varukorgen är full!";
            p.id = "varukorg-full";

            varukorg_varning.appendChild(p);

        }

    }
};