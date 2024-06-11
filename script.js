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

// Fetch and insert testimonials section
fetch("testimonials.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("testimonials").innerHTML = data;
  });

// Fetch and insert newsletter cta section
fetch("newsletter-cta.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("newsletter").innerHTML = data;
  });

// table accordions //
document.addEventListener("DOMContentLoaded", function () {
  var foldRows = document.querySelectorAll(".fold-table tr.view");
  var openAccordion = null;

  for (var i = 0; i < foldRows.length; i++) {
    foldRows[i].addEventListener("click", function () {
      // Check if this accordion is already open
      var isOpen = this.classList.contains("open");

      // Close any previously open accordion, if it's not the same as the clicked one
      if (openAccordion !== null && openAccordion !== this) {
        openAccordion.classList.remove("open");
        var foldRow = openAccordion.nextElementSibling;
        if (foldRow.classList.contains("fold")) {
          foldRow.classList.remove("open");
          foldRow.style.backgroundColor = ""; // Reset background color
        }
      }

      // Toggle the clicked accordion
      this.classList.toggle("open");
      var foldRow = this.nextElementSibling;
      if (foldRow.classList.contains("fold")) {
        foldRow.classList.toggle("open");

        // Set background color for the clicked row
        foldRow.style.backgroundColor = foldRow.classList.contains("open")
          ? "white"
          : "";
      }

      // Update the openAccordion variable
      if (!isOpen) {
        openAccordion = this;
      } else {
        openAccordion = null;
      }
    });
  }
});
