import * as tools from "./tools.js";

const appElem = document.querySelector('#app');

appElem.innerHTML += '<h1>' + tools.getTitle() + '</h1>';
tools.insertColorsIntoElement(appElem);
