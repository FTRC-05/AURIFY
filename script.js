//PRODUCT DEAL TIMER
// const Deadline = new Date("July 19th, 2025 11:59:00").getTime();

// PRODUCT DEAL TIMER
const Deadline = new Date("July 19, 2025 11:59:00").getTime();

const updateCountdown = () => {
  const present = new Date().getTime();
  const duration = Deadline - present;

  if (duration <= 0) {
    document.querySelector(".timer").innerHTML = "DEAL EXPIRED";
    return;
  }

  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
};

// Call once immediately so it doesn't wait 1s before showing countdown
updateCountdown();
setInterval(updateCountdown, 1000);

