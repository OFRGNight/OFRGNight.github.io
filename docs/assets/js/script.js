const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
});

document.querySelectorAll(".will-animate").forEach((element) => {
  observer.observe(element);
});
