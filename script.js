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
fetch("testimonial-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("testimonial-section").innerHTML = data;
  });

// Fetch and insert newsletter cta section
fetch("newsletter-cta.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("newsletter").innerHTML = data;

    // Execute the script after inserting the HTML
    const script = document.createElement("script");
    script.src = "https://bearbulltraders.activehosted.com/f/embed.php?id=47";
    script.charset = "utf-8";
    document.getElementById("newsletter").appendChild(script);
  });

// Fetch and insert compare chart section
fetch("compare.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("compare-chart").innerHTML = data;
    initializeAccordion(); // Reinitialize the accordion functionality
  });

// Fetch and insert newsletter form 61
fetch("newsletter-form.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("home-hero-form").innerHTML = data;
  });

// Function to initialize accordion functionality
function initializeAccordion() {
  // table accordions //
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
}

// Run the accordion initialization on initial load
document.addEventListener("DOMContentLoaded", initializeAccordion);

// Cookie POP-up and include
document.addEventListener("DOMContentLoaded", function () {
  // Fetch and insert Cookie-pop HTML
  fetch("cookie-pop.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("gpdr-pop").innerHTML = data;
      initializeCookiePopup(); // Call the function to initialize event listeners
    })
    .catch((error) => {
      console.error("Failed to fetch cookie-pop.html:", error);
    });

  function initializeCookiePopup() {
    // Check if the user has already accepted cookies during this session
    if (!localStorage.getItem("cookieConsent")) {
      // If not, display the cookie popup
      document.getElementById("cookie-popup").style.display = "block";
    }

    // Handle the "Accept All Cookies" button click
    document
      .getElementById("accept-cookies")
      .addEventListener("click", function () {
        // Set a flag in localStorage indicating that the user has accepted cookies
        localStorage.setItem("cookieConsent", "true");
        // Hide the cookie popup
        document.getElementById("cookie-popup").style.display = "none";
      });

    // Handle the "Leave Site" button click
    document
      .getElementById("leave-site")
      .addEventListener("click", function () {
        // Redirect the user to another site
        window.location.href = "https://www.google.com";
      });
  }
});

// Lazy load background images
document.addEventListener("DOMContentLoaded", function () {
  const lazyBackgrounds = document.querySelectorAll(".lazy-background");

  if ("IntersectionObserver" in window) {
    const lazyBackgroundObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyBackground = entry.target;
            lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.bg})`;
            lazyBackground.classList.add("loaded");
            lazyBackgroundObserver.unobserve(lazyBackground);
          }
        });
      }
    );

    lazyBackgrounds.forEach((lazyBackground) => {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyBackgrounds.forEach((lazyBackground) => {
      lazyBackground.style.backgroundImage = `url(${lazyBackground.dataset.bg})`;
      lazyBackground.classList.add("loaded");
    });
  }
});

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Auto play video on membership-levels.html//
var videoModal = document.getElementById("videoModal");
var videoIframe = document.getElementById("videoIframe");
var videoSrc = videoIframe.src;

videoModal.addEventListener("shown.bs.modal", function () {
  videoIframe.src = videoSrc + "?autoplay=1";
});

videoModal.addEventListener("hidden.bs.modal", function () {
  videoIframe.src = "";
});
