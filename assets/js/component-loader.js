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