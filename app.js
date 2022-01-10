const switchButton = document.querySelector("header button");
let theme = localStorage.getItem("theme");
const body = document.querySelector("body");

switchButton.addEventListener("click", () => {
    if (theme === "dark") {
        body.classList.remove("dark");
        body.classList.add("light");
        theme = "light";
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}

if (theme === "light") {
    document.querySelector("body").classList.add("light");
}