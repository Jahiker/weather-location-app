const resetTabs = () => {
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".tab_content")
    .forEach((content) => content.classList.remove("active"));
};

export const handleClick = (e) => {
  resetTabs();
  e.target.classList.add("active");
  document.querySelector(`${e.target.dataset.target}`).classList.add("active");
};
