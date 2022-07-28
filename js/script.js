"use strict";

import { renderBlogs } from "./renderBlogs.js";
import { sectionObserver, imgObserver } from "./lazyLoading.js";
import { slider } from "./slider.js";

//DOM ELEMENTS
const newsBlog = document.querySelectorAll(".news__blog");
const imgTargets = document.querySelectorAll("img[data-src]");
const allSections = document.querySelectorAll(".section");

const slides = document.querySelectorAll(".slide");

// LAZY LOADING IMAGES SECTION
imgTargets.forEach((img) => {
  imgObserver.observe(img);
});

// REVEAL SECTIONS
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

// READ BLOGS SECTION
if (newsBlog) {
  newsBlog.forEach((news) => {
    renderBlogs(news);
  });
}

if (slides.length > 0) {
  slider();
} else {
}
