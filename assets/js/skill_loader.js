document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/data/skills.json")
    .then((response) => response.json())
    .then((skills) => renderSkills(skills))
    .catch((error) => console.error("Failed to load skills:", error));
});

function renderSkills(skills) {
  const skillsGrid = document.querySelector(".skills-grid");

  skills.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card";

    const img = document.createElement("img");
    img.src = skill.image;
    img.alt = `${skill.name} image`;

    const name = document.createElement("p");
    name.textContent = skill.name;

    card.appendChild(img);
    card.appendChild(name);
    skillsGrid.appendChild(card);
  });
}