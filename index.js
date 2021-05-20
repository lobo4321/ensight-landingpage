
/* Form-----------------*/

const Medium = {
    open() {
        document.querySelector(".medium").classList.add("active");
        document.querySelector(".easy").classList.remove("active")
        document.querySelector(".customize").classList.remove("active")
    }
}

const Easy = {
  open() {
    document.querySelector(".easy").classList.add("active")
    document.querySelector(".medium").classList.remove("active")
        document.querySelector(".customize").classList.remove("active")
  }
}

const Customize = {
  open() {
document.querySelector(".customize").classList.add("active")
document.querySelector(".easy").classList.remove("active")
        document.querySelector(".medium").classList.remove("active")
  }
}

/* Button Send-----------------*/
