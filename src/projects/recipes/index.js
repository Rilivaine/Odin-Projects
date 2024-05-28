const tooltipTitle = document.querySelector(".tooltip .title");
const tooltipDescription = document.querySelector(".tooltip .description");

document.querySelectorAll(".recipe-card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");

    if (!title || !description) return;

    tooltipTitle.textContent = title;
    tooltipDescription.textContent = description;
  });
});
