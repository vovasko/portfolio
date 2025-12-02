function loadComponent(id, file) {
  // const fileName = window.location.pathname.split("/").pop() || "index.html";

  // const filePath = fileName === "index.html"
  //   ? file               // if index.html, use file as-is
  //   : "../" + file;      // if not, prefix with "../"

  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      const name = id.split("-")[0];
      document.dispatchEvent(new Event(`${name}Loaded`));
    });
}

// Load header and footer
loadComponent("header-placeholder", "components/header.html");
loadComponent("footer-placeholder", "components/footer.html");

// document.addEventListener("headerLoaded", () => {
//   console.log("headerLoaded event detected");
//   const isHome = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

//   document.querySelectorAll(".homeLink").forEach(link => {
//     const target = link.getAttribute("href"); // e.g. "#about"
//     link.setAttribute("href", isHome ? target : "../index.html" + target);
//   });

//   document.querySelectorAll(".assetLink").forEach(link => {
//     const target = link.getAttribute("href"); 
//     link.setAttribute("href", isHome ? target : "../" + target);
//   });
// });