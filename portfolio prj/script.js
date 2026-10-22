
document.addEventListener("DOMContentLoaded", function () {
    const yearElements = document.querySelectorAll(".year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });
});
