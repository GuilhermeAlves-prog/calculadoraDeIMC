import { AlertError } from './alert-error.js';
import { Modal } from './modal.js'
import { notANumber, calculateIMC } from './utils.js';

const form = document.querySelector("form");
const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")


weightInput.oninput = () => AlertError.close()
heightInput.oninput = () => AlertError.close()
form.onsubmit = (e) => {
  e.preventDefault();

  const weight = weightInput.value
  const height = heightInput.value

  const showAlertError = notANumber(height) || notANumber(weight)

  if(showAlertError) {
    AlertError.open()
    return;
  }
  AlertError.close()

  const result = calculateIMC(weight, height)
  showResult(result)
}

function showResult(result) {
  Modal.modalText.innerText = `seu IMC é ${result}`
  Modal.open()
}