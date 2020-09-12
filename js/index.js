const left = document.querySelectorAll(".left")
const rigth = document.querySelectorAll(".rigth")


left[0].addEventListener("click", changeSlide)
rigth[0].addEventListener("click", changeSlide)
left[1].addEventListener("click", changeSlide)
rigth[1].addEventListener("click", changeSlide)

function changeSlide() {
  const card = document.querySelectorAll(".card--container")
  card[0].classList.toggle("show")
  card[1].classList.toggle("show")
}