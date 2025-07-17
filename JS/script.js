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

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navlinks');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link (optional)
    const navItems = document.querySelectorAll('.navlinks ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

//newsletter funtionality
const email_box = document.getElementById('footer-txt');
const submit_btn = document.getElementById('footer-btn');

submit_btn.addEventListener('click', () =>{
  event.preventDefault();
  const userInput = email_box.value;
  if(userInput){
    alert('Subscribed!')
  } else{
    alert('Enter your email address to subscribe')
  }
});


  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('navLinks');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      // Optionally toggle icon between menu and close:
      hamburgerBtn.innerHTML = 
        navLinks.classList.contains('open')
          ? "<i class='bx bx-x'></i>"
          : "<i class='bx bx-menu'></i>";
    });
  });

