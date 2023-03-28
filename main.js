"use strict";
// Make navbar transparent when it is on the top

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  // console.log("dsf")
  // console.log(event.target); // 클릭한 요소가 출력이 되게한다.
  // console.log(event.target.dataset); // dataset이라는것에 우리가 정의한 변수들이 다 할당되어진다.
  // console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return; // 아무것도 하지않고 종료한다.
  }
  console.log(event.target.dataset.link);
  // 함수 사용으로 아래를 지우고 함수 호출 방식으로 변경
  scrollIntoView(link);
  //const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView();
  //scrollTo.scrollIntoView({ behavior: "smooth" }); // smooth하게 이동하게 한다.
});

// Handle click on "contqact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  // 함수 사용으로 아래를 지우고 함수 호출 방식으로 변경
  scrollIntoView("#contact");
  // const scrollTo = document.querySelector("#contact");
  // scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Make home slowly fade to transparent as the vindow scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(1-window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// 위 두개의 중복이 보여 함수로 만들어 중복을 피하자
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
