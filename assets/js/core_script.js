document.addEventListener("DOMContentLoaded", () => {
  let timer_ = Math.floor(new Date("2025-09-19T09:00:00+07:00").getTime() / 1000); // Unix timestamp
  let flipdown = new FlipDown(timer_);
  flipdown.start();
  flipdown.ifEnded(() => {
    document.querySelector(".flipdown").innerHTML = `<h2>Timer end</h2>`;
  });
  let params = new URLSearchParams(window.location.search);
  let namaParam = params.get("nama");

  if (namaParam) {
    let nama = namaParam
      .split("-")
      .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
      .join(" ");

    const targetP = document.querySelector(".nama-undangan p");
    if (targetP) {
      targetP.textContent = nama;
    }
  }
});


document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const attendance = document.querySelector(
    'input[name="attendance"]:checked'
  ).value;
  const message = document.getElementById("message").value;


  const newItem = document.createElement("div");
  newItem.classList.add("submitted-item");

  newItem.innerHTML = `
  <h3>${name} (${attendance})</h3>
  <p>${message}</p>
  `;

  document.getElementById("rsvpForm").reset();
  scrollToTop();
});

const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.add("playing");
    playButton.classList.remove("paused");
  } else {
    audio.pause();
    playButton.classList.add("paused");
    playButton.classList.remove("playing");
  }
});

let slideIndex = 1;

function showSlide(n) {
  let i;
  let slides = document.querySelectorAll(".mySlide");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

showSlide(slideIndex);

function plusSlide(n) {
  showSlide((slideIndex += n));
}
