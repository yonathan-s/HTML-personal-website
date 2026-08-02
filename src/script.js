const skillsButton = document.getElementById("skills-button");
const skillsTable = document.getElementById("skills-table");

skillsButton.addEventListener("click", function() {
    if (skillsTable.style.display === "none") {
        skillsTable.style.display = "table";
        skillsButton.textContent = "Hide skills table";
    } else {
        skillsTable.style.display = "none";
        skillsButton.textContent = "Show skills table";
    }
});