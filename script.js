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
//                      VARUKORG MED LOCAL STORAGE
//*******************************************************

// Variabler
const ul = document.querySelector("ul");
const varukorgStatus = document.getElementById("varukorg-status");
const varukorgKostnad = document.getElementById("kostnad");
const max = 5; // Max antal varor som användaren kan lägga i
let count = 0;

// Hämta varukorgen från localStorage
let varukorg = JSON.parse(localStorage.getItem("varukorg")) || [];
laddaVarukorg(); //Kallar på funktionen som visar varukorgen för att visa den direkt när sidan laddas

// Lägga till varor i varukorgen
function läggTill(namn, pris) {
    if (varukorg.length < max) {
        let produkt = {namn, pris};

        varukorg.push(produkt);
        localStorage.setItem("varukorg", JSON.stringify(varukorg));
        laddaVarukorg();
    }
}

// Funktion för att visa varukorgen
function laddaVarukorg() {
    // Tömmer listan av produkter och produktkostnader när sidan laddas för att se till att dubbletter och felaktiga priser inte visas
    ul.innerHTML = "";
    let produktkostnad = 0;

    varukorg.forEach((produkt, index) => {
        let li = document.createElement("li");
        li.textContent = `${produkt.namn}, Pris: ${produkt.pris} kr`;
        li.id = "varukorg";

        // Skapa en knapp för att ta bort varan
        let raderaProdukt = document.createElement("button");
        raderaProdukt.textContent = "Ta bort";
        raderaProdukt.onclick = () => taBort(index);

        // Lägg till priset på produkten till den totala summan av kostnaden
        produktkostnad += produkt.pris;

        li.appendChild(raderaProdukt);
        ul.appendChild(li);
    });
    count = varukorg.length;

    // Uppdaterar statusmeddelandet beroende på om varukorgen är tom, full, eller något där emellan :)
    if (varukorg.length === 0){
        varukorgStatus.textContent = "När du lägger till saker i varukorgen hamnar de här.";
    } else if (varukorg.length < max) {
        varukorgStatus.textContent = "";
    } else if (varukorg.length >= max) {
        varukorgStatus.textContent = "Varukorgen är full!";
    }

    // Uppdaterar den totala summan i varukorgen
    varukorgKostnad.textContent = `Total kostnad: ${produktkostnad} kr`;
}

// Ta bort produkt från varukorg
function taBort(index) {
    varukorg.splice(index, 1);
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    laddaVarukorg();
}
