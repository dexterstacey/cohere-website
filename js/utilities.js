"use strict";
/**
 * Display message in UI
 * @param {String} message
 * @param {DomElement} element
 */
export const loadMessage = (message, element) => {
  element.innerHTML = "";
  let html;
  html = `<p style="color:white; text-align:center;">${message}</p>`;
  element.insertAdjacentHTML("afterbegin", html);
};
