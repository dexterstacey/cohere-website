"use strict";

//TODO: Arrange functions in their own files

const news = document.querySelector(".news__blog");
const imgTargets = document.querySelectorAll("img[data-src]");

//---------------------------------------------------------------------------------------
// LAZY LOADING IMAGES SECTION

const loadImage = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;

      // unobserve
      observer.unobserve(entry.target);
    }
  });
};

const imgObserver = new IntersectionObserver(loadImage, {
  // play around with this
  threshold: 0.5,
});

imgTargets.forEach((img) => {
  imgObserver.observe(img);
});

//----------------------------------------------------------------------------------------
// Reavel sections
const allSections = document.querySelectorAll(".section");

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

//-----------------------------------------------------------------------------------------
// READ BLOGS SECTION
const clearHTML = (html) => {
  // clear the contents
  news.innerHTML = "";
  // insert blogs under the news div
  news.insertAdjacentHTML("afterbegin", html);
};

const loadMessage = (message) => {
  let html;
  html = `<p style="color:white; text-align:center;">${message}</p>`;
  news.insertAdjacentHTML("afterbegin", html);
};

const fetchBlogs = async () => {
  loadMessage("Loading...🚀");
  try {
    const response = await fetch("https://calm-inlet-18337.herokuapp.com/");
    if (!response.ok) {
      throw new Error("Couldn't fetch blogs'");
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

const renderBlogs = async () => {
  let html = ``;

  const colors = ["#ff9343", "#72ccca", "#ff6865"];

  //TODO: Clean this when files are arranged
  if (!news) return;

  // fetch blogs
  const blogs = await fetchBlogs();

  //show error if it fails
  if (!blogs.success) {
    html = `<p style="color:white; text-align:center">${blogs.message} 🚩</p>`;
    clearHTML(html);
    return;
  }

  const { data } = blogs.data.results;

  // Limit to only 3 articles
  const firstThreeArticles = data.slice(0, 3);

  firstThreeArticles.forEach((el, index) => {
    // reset colors aftee every 3 blogs
    if (index > colors.length - 1) index = 0;

    html += `
      <div class="news__item" style="background-color: ${colors[index]};">
        <h4>${el.name}</h4>
        <a href="https://news.wearecohere.org${el.permalink}"><img style="width: 385px; height: 216px;" src="${el.image}" referrerpolicy="no-referrer"></a>
      </div>
      `;
  });

  clearHTML(html);
};

// Render Blogs when the page loads
renderBlogs();
