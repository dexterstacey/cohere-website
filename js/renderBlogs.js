"use strict";
import { fetchBlogs } from "./fetchBlogs.js";
import { loadMessage } from "./utilities.js";

export const renderBlogs = async (element = null) => {
  let html = ``;
  let colors;

  // fetch blogs
  const blogs = await fetchBlogs(element);

  //show error if it fails
  if (!blogs.success) {
    loadMessage(`${blogs.message}  🚩`, element);
    return;
  }

  const { data } = blogs.data.results;
  console.log(data);

  // Limit to only 3 articles
  let firstThreeArticles;
  if (element.classList.contains("c-news")) {
    firstThreeArticles = filterArr(data, "news");
    colors = ["#ff9343", "#72ccca", "#ff6865"];
  } else if (element.classList.contains("c-jobs")) {
    firstThreeArticles = filterArr(data, "jobs");
    colors = ["#282828", "#ff6865", "#72ccca"];
  }

  firstThreeArticles.forEach((el, index) => {
    // reset colors after every 3 blogs
    if (index > colors.length - 1) index = 0;

    html += `
        <div class="news__item" style="background-color: ${colors[index]};">
          <h4 style="${colors[index] === "#282828" ? "color: white" : ""}">${
      el.name
    }</h4>
          <a href="https://news.wearecohere.org${
            el.permalink
          }"><img style="height: 216px;" src="${
      el.image
    }" referrerpolicy="no-referrer"></a>
        </div>
        `;
  });

  element.innerHTML = "";
  // insert blogs under the news div
  element.insertAdjacentHTML("afterbegin", html);
};

const filterArr = (arr, category) => {
  const returnedArray = arr
    .filter((blog) => blog.category.includes(category))
    .slice(0, 3);

  return returnedArray;
};
