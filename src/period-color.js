const element = document.querySelectorAll("p");
const period = ".";
const regex = new RegExp(period, "g");

element.innerHTML.replaceAll(
  regex,
  `<span class="period-color">${period}<span/>`,
);
