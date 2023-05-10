"use strict";

// 1. Function to hide personal information
const personal = document.querySelector(".personal");
const btnOpenInfo = document.querySelector(".show-info");
const closeForm = document.querySelector(".close-form");

// Function to show Infomation
const showInfo = function () {
  personal.classList.remove("hide");
  closeForm.classList.add("hide");
};

//Event click with email conditions
btnOpenInfo.addEventListener("click", function () {
  let email = document.getElementById("email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email.value)) {
    showInfo();
  } else {
    alert("Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com");
  }
});

// Catch auto reload error
document.querySelector("[type='submit']").onclick = function (e) {
  e.preventDefault();
};

// 2. Function to hide career information
const btnOpenCareer = document.querySelectorAll(".pointer-open");
const jobDetail = document.querySelectorAll(".pointer");
const pointerView = document.querySelectorAll(".pointer-view");

for (let i = 0; i < btnOpenCareer.length; i++) {
  //Function open career
  const openCareer = function (i) {
    pointerView[i].innerHTML = "view less";
    jobDetail[i].classList.remove("hide");
  };
  //Function close career
  const closeCareer = function (i) {
    pointerView[i].innerHTML = "view more";
    jobDetail[i].classList.add("hide");
  };
  //Event click
  btnOpenCareer[i].addEventListener("click", function () {
    if (jobDetail[i].classList.contains("hide")) {
      openCareer(i);
    } else {
      closeCareer(i);
    }
  });
}
