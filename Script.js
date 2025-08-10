document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("formStatus").textContent = "Thank you! Your message has been received.";
      contactForm.reset();
    });
  }
});

function searchDestinations() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsSection = document.getElementById("resultsSection");

  if (!resultsSection) return;

  let html = "";

  if (query.includes("beach")) {
    html += `
      <div class="card">
        <img src="images/beach1.jpeg" alt="Beach 1">
        <p>Sunny Beach Paradise</p>
      </div>
      <div class="card">
        <img src="images/beach2.jpeg" alt="Beach 2">
        <p>Blue Lagoon Escape</p>
      </div>
    `;
  }

  if (query.includes("temple")) {
    html += `
      <div class="card">
        <img src="images/temple1.jpeg" alt="Temple 1">
        <p>Ancient Serenity Temple</p>
      </div>
      <div class="card">
        <img src="images/temple2.jpeg" alt="Temple 2">
        <p>Golden Peace Pagoda</p>
      </div>
    `;
  }

  if (query.includes("japan")) {
    html += `
      <div class="card">
        <img src="images/japan1.jpg" alt="Japan 1">
        <p>Mount Fuji</p>
      </div>
      <div class="card">
        <img src="images/japan2.jpg" alt="Japan 2">
        <p>Kyoto Temples</p>
      </div>
    `;
  }

  if (query.includes("maldives")) {
    html += `
      <div class="card">
        <img src="images/maldives1.jpg" alt="Maldives 1">
        <p>Crystal Blue Beaches</p>
      </div>
      <div class="card">
        <img src="images/maldives2.jpg" alt="Maldives 2">
        <p>Overwater Villas</p>
      </div>
    `;
  }

  if (html === "") {
    html = "<p>No results found. Try searching for 'beach', 'temple', 'Japan', or 'Maldives'.</p>";
  }

  resultsSection.innerHTML = html;
}

function clearResults() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const resultsSection = document.getElementById("resultsSection");
  if (resultsSection) resultsSection.innerHTML = "<p>Use the search bar above to find beaches, temples, or destinations by country.</p>";
}
