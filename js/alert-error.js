export const AlertError = {
  errorMessege: document.querySelector('.error'),

  open() {
    this.errorMessege.classList.add("open")
  },
  close() {
    this.errorMessege.classList.remove("open")
  }
}