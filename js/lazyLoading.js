"use strict";

//-------------------
// Lazy Load Sections
const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

export const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

//-------------------
// Lazy Load Images
const loadImage = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;

      // unobserve
      observer.unobserve(entry.target);
    }
  });
};

export const imgObserver = new IntersectionObserver(loadImage, {
  // play around with this
  threshold: 0.5,
});
