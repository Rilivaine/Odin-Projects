"use strict";

const cards = document.querySelectorAll(".project-card");
cards.forEach((card) => {
    const link = card.getAttribute("data-link");
    card.addEventListener("click", () => {
        window.open(`projects/${link}/index.html`, "_self");
    });
});
