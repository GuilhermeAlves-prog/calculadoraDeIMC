const form = document.querySelector("form");
const weightInput = document.querySelector("#weight")
const heightInput= document.querySelector("#height")



const Modal = {
  modal: document.querySelector(".modal"),
  modalText: document.querySelector(".modal h2"),
  modalClose: document.querySelector(".modal button"),

  open() {
    this.modal.classList.add('open')
  },
  close() {
    this.modal.classList.remove('open')
  }
}

form.onsubmit = (e) => {
  e.preventDefault();

  const weight = weightInput.value
  const height = heightInput.value

  const result = IMC(weight, height)
  console.log(result)
  Modal.modalText.innerText = `seu IMC é ${result}`

  Modal.open()
}

Modal.modalClose.onclick = () => {
  Modal.close()
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}