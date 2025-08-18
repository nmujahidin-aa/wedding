let bukaUndangan = document.getElementById("open");
let cover = document.getElementById("cover");
let section = document.getElementById("sectionKecil");

// Ambil parameter dari URL
let params = new URLSearchParams(window.location.search);
let namaParam = params.get("nama") || "";

// Event buka undangan
bukaUndangan.addEventListener("click", function () {
  cover.classList.add("fade-out");
  section.classList.add("slide-out");

  setTimeout(function () {
    // Redirect sambil bawa parameter
    window.location.href = "core.html?nama=" + encodeURIComponent(namaParam);
  }, 900);
});
