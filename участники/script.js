document.addEventListener("DOMContentLoaded", () => {
  const revealables = document.querySelectorAll(".reveal, .country-card, .neutral-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealables.forEach((element) => observer.observe(element));
});
