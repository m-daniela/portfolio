
const toggleTheme = function() {
    /**
     * toggle the theme and save it to the local storage
     */
    let theme = localStorage.getItem("theme");
    if (theme === "light"){
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

window.onscroll = function() {
    /**
     * make the navbar sticky when you scroll past the
     * landing page and relative when you are back on it
     */
    const navbar = document.querySelector('nav');
    const navbarOffset = navbar.offsetTop;
    if (window.scrollY >= navbarOffset){
        navbar.style.position = "fixed";
    }
    if (window.scrollY < document.documentElement.clientHeight){
        navbar.style.position = "relative";
    }
};

window.onload = function() {
    let theme = localStorage.getItem("theme") ?? "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
};