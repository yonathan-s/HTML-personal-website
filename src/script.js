const skillsButton = document.querySelector("#skills-button");
const skillsTable = document.querySelector("#skills-table");

skillsButton.addEventListener("click", function() {
    if (skillsTable.style.display === "none") {
        skillsTable.style.display = "table";
        skillsButton.textContent = "Hide skills table";
    } else {
        skillsTable.style.display = "none";
        skillsButton.textContent = "Show skills table";
    }
});