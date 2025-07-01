function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load header
loadComponent("header-placeholder", "components/header.html");

// You can add more if needed:
loadComponent("footer-placeholder", "components/footer.html");

fetch("components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // ✅ Notify other scripts that header is loaded
    document.dispatchEvent(new Event("headerLoaded"));
  });