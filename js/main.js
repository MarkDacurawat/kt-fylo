const navbar = document.querySelector(".navbar");
const navbarContent = document.querySelector(".navbar-content");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "hsl(218, 28%, 13%)";
    navbar.style.paddingTop = "0.75em";
    navbar.style.paddingBottom = "0.75em";
  } else {
    navbar.style.background = "none";
    navbar.style.paddingTop = "0.5em";
    navbar.style.paddingBottom = "0.5em";
  }
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const emailBtn = document.querySelector("#email-btn");

emailBtn.addEventListener("click", () => {
  const email = document.querySelector("#email");
  const isValid = validateEmail(email.value);

  if (!isValid) {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.style = `
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    `;
    setTimeout(() => {
      errorMessage.style = `
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
    `;
    }, 2000);
  }
});
