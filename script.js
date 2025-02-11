// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.padding = "15px 50px";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
    navbar.style.padding = "20px 50px";
  }
});

// Scroll animation for couple cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".couple-card").forEach((card) => {
  observer.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Countdown Timer
function updateCountdown() {
  const weddingDate = new Date("September 15, 2045 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML =
      "<h2>The Wedding Day Has Arrived!</h2>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay

// RSVP Form Submission
const rsvpForm = document.querySelector(".rsvp-form");
rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your response!");
  rsvpForm.reset();
});
