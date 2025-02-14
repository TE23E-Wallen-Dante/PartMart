function showDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("active");
    console.log("Dropdown was clicked");

    dropdown.style.transition = 'opacity 0.5s ease';
}
