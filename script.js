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

// Fetch and insert books row section
fetch("books-row.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("books-row").innerHTML = data;
  });

document.addEventListener("DOMContentLoaded", function () {
  var foldRows = document.querySelectorAll(".fold-table tr.view");
  var openAccordion = null;

  // Log foldRows to ensure they are selected correctly
  console.log("Fold Rows: ", foldRows);

  for (var i = 0; i < foldRows.length; i++) {
    foldRows[i].addEventListener("click", function () {
      // Check if this accordion is already open
      var isOpen = this.classList.contains("open");

      // Log which row is being clicked
      console.log("Clicked Row: ", this, " Is Open: ", isOpen);

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
      if (foldRow && foldRow.classList.contains("fold")) {
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

      // Log the state after toggling
      console.log("Open Accordion: ", openAccordion);
    });
  }
});
