"use strict";

import "regenerator-runtime/runtime";
import "core-js/stable";
import { renderBlogs } from "./renderBlogs.js";
import { sectionObserver, imgObserver } from "./lazyLoading.js";

//DOM ELEMENTS
const newsBlog = document.querySelectorAll(".news__blog");
const imgTargets = document.querySelectorAll("img[data-src]");
const allSections = document.querySelectorAll(".section");

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
