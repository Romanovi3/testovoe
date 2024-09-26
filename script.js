const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

span.onclick = function() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
}