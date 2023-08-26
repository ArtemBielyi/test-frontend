function addDarkClassToHTML() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
    document.querySelector(".switch-input").checked = true;
  } else {
    document.querySelector("html").classList.remove("dark");
    document.querySelector(".switch-input").checked = false;
  }
}

window.addEventListener("load", () => {
  addDarkClassToHTML();

  const btnEL = document.querySelector(".switch-input");
  btnEL.addEventListener("change", (event) => {
    if (event.target.checked) {
      localStorage.setItem("theme", "dark");
      addDarkClassToHTML();
    } else {
      localStorage.setItem("theme", "light");
      addDarkClassToHTML();
    }
  });
});
