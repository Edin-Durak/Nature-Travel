const showOnPx = 500;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

// Event Listener za Scroll

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("d-none");
  } else {
    backToTopButton.classList.add("d-none");
  }
});

const goToTop = () => {
  // Varijabla sa funkcijom gdje se selektuje body(vrh stranice) preko .scrollIntoView.
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);
