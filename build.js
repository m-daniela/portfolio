(() => {
  // index.js
  window.onload = (e) => {
    const projects = document.querySelectorAll("li");
    projects.forEach((project) => project.addEventListener("click", selectProject));
    const header = document.querySelector("h1");
    header.addEventListener("click", selectDescription);
  };
  var selectProject = (e) => {
    const selectedProject = e.target;
    const selectedProjectId = selectedProject.id;
    const projects = document.querySelectorAll("li");
    projects.forEach((project) => project.classList.remove("selected"));
    selectedProject.classList.add("selected");
    const projectsArticles = document.querySelectorAll("article");
    projectsArticles.forEach((projectArticle) => projectArticle.classList.remove("selected-article"));
    const selectedProjectArticle = document.getElementById(`${selectedProjectId}-article`);
    selectedProjectArticle.classList.add("selected-article");
  };
  var selectDescription = (e) => {
    const header = e.target;
    const headerId = header.id;
    const projects = document.querySelectorAll("li");
    projects.forEach((project) => project.classList.remove("selected"));
    const projectsArticles = document.querySelectorAll("article");
    projectsArticles.forEach((projectArticle) => projectArticle.classList.remove("selected-article"));
    const selectedProjectArticle = document.getElementById(`${headerId}-article`);
    selectedProjectArticle.classList.add("selected-article");
  };
})();
