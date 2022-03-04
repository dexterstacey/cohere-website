const news = document.querySelector(".news");

const clearHTML = (html) => {
  // clear the contents
  news.innerHTML = "";
  // insert blogs under the news div
  news.insertAdjacentHTML("afterbegin", html);
};

const fetchBlogs = async () => {
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

  // fetch blogs
  const blogs = await fetchBlogs();

  //show error if it fails
  if (!blogs.success) {
    html = `<p style="color:white; text-align:center">${blogs.message} ☹</p>`;
    clearHTML(html);
    return;
  }

  const { data } = blogs.data.results;

  data.reverse().forEach((el, index) => {
    // reset colors aftee every 3 blogs
    if (index > colors.length - 1) index = 0;

    html += `
      <div class="col-3 newsitem p-2 m-2" style="background-color: ${colors[index]};">
        <div class="titleholder"><h4>${el.name}</h4></div>
        <a href="https://news.wearecohere.org${el.permalink}"><img src="${el.image}" referrerpolicy="no-referrer"></a>
      </div>
      `;
  });

  clearHTML(html);
};

// Render Blogs when the page loads
renderBlogs();
