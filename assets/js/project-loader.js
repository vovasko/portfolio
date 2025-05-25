document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/data/projects.json")
    .then((response) => response.json())
    .then((projects) => renderProjects(projects))
    .catch((error) => console.error("Failed to load projects:", error));
});

function renderProjects(projects) {
  const projectsGrid = document.querySelector(".small-projects-grid");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "small-project-card";
    
    // Creating header
    const header = document.createElement("div");
    header.className = "small-project-header";

    const folder_div = document.createElement("div");
    folder_div.className = "folder-icon";

    const folder_icon = document.createElement("i");
    folder_icon.className = "far fa-folder";

    folder_div.appendChild(folder_icon);
    header.appendChild(folder_div);

    // Creating links
    const links_div = document.createElement("div");
    links_div.className = "small-project-links";
    
    if (typeof project["github-link"] === "string" && project["github-link"].trim() !== "") {
        const github_link = document.createElement("a");
        github_link.href = project["github-link"];
        github_link.ariaLabel = "GitHub Link";

        const github_icon = document.createElement("i");
        github_icon.className = "fab fa-github";

        github_link.appendChild(github_icon);
        links_div.appendChild(github_link);
    }

    if (typeof project["external-link"] === "string" && project["external-link"].trim() !== "") {
        const external_link = document.createElement("a");
        external_link.href = project["external-link"];
       external_link.ariaLabel = "External Link";

        const external_icon = document.createElement("i");
        external_icon.className = "fas fa-external-link-alt";

        external_link.appendChild(external_icon);
        links_div.appendChild(external_link);
    }
    
    header.appendChild(links_div);
    card.appendChild(header);

    // Creating title
    const project_title = document.createElement("h3");
    project_title.className = "small-project-title";
    project_title.textContent = project["project-title"];
    card.appendChild(project_title);

    // Creating description
    const project_desc = document.createElement("p");
    project_desc.className = "small-project-description";
    project_desc.textContent = project["project-description"];
    card.appendChild(project_desc);

    // Creating tech section
    const project_tech = document.createElement("div");
    project_tech.className = "small-project-tech";
    project["project-tech"].forEach((tech) => {
        const span = document.createElement("span");
        span.textContent = tech;
        project_tech.appendChild(span);
    });
    card.appendChild(project_tech);
    
    projectsGrid.appendChild(card);
  });
}

// HTML analog
/*
<div class="small-project-card">
    <div class="small-project-header">
        <div class="folder-icon">
            <i class="far fa-folder"></i>
        </div>
        <div class="small-project-links">
            <a href="#" aria-label="GitHub Link"><i class="fab fa-github"></i></a>
            <a href="#" aria-label="External Link"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
    <h3 class="small-project-title">DevOps Automation Tool</h3>
    <p class="small-project-description">
        A toolkit for automating deployment workflows, monitoring, and infrastructure provisioning for development teams.
    </p>
    <div class="small-project-tech">
        <span>Python</span>
        <span>Docker</span>
        <span>Kubernetes</span>
        <span>AWS</span>
    </div>
</div>
*/