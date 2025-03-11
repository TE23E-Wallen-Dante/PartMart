// Funktion för att toggla menyn när man klickar på knappen
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

function läggTill() {
    console.log("Added to cart!");
}