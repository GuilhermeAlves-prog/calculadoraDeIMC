export const Modal = {
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

Modal.modalClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', (event) => {
  event.key == 'Escape' ? Modal.close() : ''
})