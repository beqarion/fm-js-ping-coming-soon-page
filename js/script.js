import { emailRegexp } from "./utilities"
const input = document.getElementById("input")
const button = document.getElementById("button")
const errorText = document.getElementById("error-text")
const form = document.getElementById("form")

button.addEventListener("click", function (e) {
  e.preventDefault()
  if (!input.value.match(emailRegexp)) {
    addErrorState()
    return
  } else {
    removeErrorState()
    form.submit()
  }
})
input.addEventListener("keyup", function (e) {
  if (!input.value.match(emailRegexp)) {
    addErrorState()
  } else {
    removeErrorState()
  }
})
input.addEventListener("blur", () => {
  removeErrorState()
})

function addErrorState() {
  if (window.innerWidth < 768) {
    button.style.transform = "translateY(32px)"
  } else {
    button.style.transform = "none"
  }
  input.classList.add("error-class")
  errorText.style.display = "block"
}
function removeErrorState() {
  button.style.transform = "none"
  input.classList.remove("error-class")
  errorText.style.display = "none"
}
