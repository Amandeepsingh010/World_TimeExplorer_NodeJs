import { countries } from "./data.js";

const nav = document.getElementById("nav");
const content = document.getElementById("content");

// Create navigation
countries.forEach((country, index) => {
  const btn = document.createElement("button");
  btn.innerText = `${country.flag} ${country.name}`;
  
  btn.onclick = () => renderCountry(index);

  nav.appendChild(btn);
});

// Render country data
function renderCountry(index) {
  const country = countries[index];

  content.innerHTML = `
    <h2>${country.flag} ${country.name}</h2>
    <div class="cards">
      ${country.zones.map(zone => `
        <div class="card">
          <h3>${zone.city}</h3>
          <p id="${zone.tz}"></p>
        </div>
      `).join("")}
    </div>
  `;

  updateTimes(country);
  animateCards();
}

// Update time dynamically
function updateTimes(country) {
  setInterval(() => {
    country.zones.forEach(zone => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: zone.tz
      });
      document.getElementById(zone.tz).innerText = time;
    });
  }, 1000);
}

// GSAP Animations
function animateCards() {
  gsap.from(".card", {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2
  });
}

// Default load
renderCountry(0);