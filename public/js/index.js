"use strict";
const shareButton = document.querySelector("#icon_share");
const shareContainer = document.querySelector(".icon-container");
const shareIcons = Array.from(
  document.querySelectorAll(".inner-icon-wrapper i")
);
const timemer = document.querySelector(".profile-name-wrapper span");

const runTime = function () {
  const time = new Date();

  let hour = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    fullDate = time.toDateString();

  let currentTime = `${fullDate}, ${
    hour <= 9 ? (hour = "0" + hour) : (hour = hour)
  }:${minutes <= 9 ? (minutes = "0" + minutes) : (minutes = minutes)}:${
    seconds <= 9 ? (seconds = "0" + seconds) : (seconds = seconds)
  }`;

  timemer.innerText = currentTime;
};
// setInterval(runTime, 1000);

shareButton.addEventListener("mouseenter", function () {
  if (window.innerWidth <= 453) {
    shareContainer.style.cssText = "opacity: 1; left: -100%;";
  } else {
    shareContainer.style.cssText = "opacity: 1; left: 0%;";
  }
});

shareButton.addEventListener(
  "mouseleave",
  function () {
    shareContainer.style.cssText = "opacity: 0;";
  },
  false
);

shareContainer.addEventListener(
  "mouseover",
  function () {
    if (window.innerWidth <= 453) {
      shareContainer.style.cssText = "opacity: 1; left: -100%;";
    } else {
      shareContainer.style.cssText = "opacity: 1; left: 0%;";
    }
  },
  false
);

shareContainer.addEventListener(
  "mouseleave",
  function () {
    if (window.innerWidth <= 453) {
      shareContainer.style.cssText = "opacity: 1; left: -100%;";
    } else {
      shareContainer.style.cssText = "opacity: 0; left: 0%;";
    }
  },
  false
);

shareIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (window.innerWidth <= 453) {
      shareContainer.style.cssText = "opacity: 0; left: -100%;";
    } else {
      shareContainer.style.cssText = "opacity: 0; display: none;";
    }
  });
});
