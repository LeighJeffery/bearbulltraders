// JavaScript code for bearbulltraders.com

// Fetch and insert navigation bar
fetch("nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Fetch and insert footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// Fetch and insert moderator section
fetch("moderators.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("moderators").innerHTML = data;
  });

// keeps footer copyright up to date //
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});

// Fetch and insert psychology section
fetch("psychology-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("psychology-section").innerHTML = data;
  });

// Fetch and insert award tape section
fetch("awards-tape.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("awards-tape").innerHTML = data;
  });

// Fetch and insert price chart section
fetch("price-chart.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("price-chart").innerHTML = data;
  });

// Fetch and insert compare chart section
fetch("compare.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("compare").innerHTML = data;
  });

// Fetch and insert community carousels section
fetch("community-carousels.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("community-carousels").innerHTML = data;
  });

// Fetch and insert books row section
fetch("books-row.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("books-row").innerHTML = data;
  });
