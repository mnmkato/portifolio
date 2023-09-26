const data = {
    displayImage:"https://ca.slack-edge.com/T05FFAA91JP-U05RYRH1FH7-6d00d18ebc45-512",
    githubURL:"https://github.com/mnmkato/",
    about:"I'm a passionate front-end developer with experience collaborating on diverse projects, where I've learnt different languages, frameworks and technologies. I'm committed to  performance optimization and  ensuring mobile responsiveness in projects I've done. Thank you for visiting my portfolio.",
    skills:[
        {
            type: "Language",
            list: ["JavaScript", "Python", "HTML/CSS"]
        },
        {
            type: "Frameworks",
            list: ["React", "NodeJS"]
        },
        {
            type: "Technologies",
            list: ["Git", "Webpack", "Vite"]
        }],
    projectList:[
        {
          screenshot: "screenshots/movie_project.PNG",
          title: "Movie Box",
          description: "A movie web app that shows the top 10 most popular movies, implements movie search and shows movie details",
          ingredients: ["Javascript", "React", "HTML/CSS","Vite","TMDB API"],
          date: "September 2023",
          code: "https://github.com/mnmkato/movie-project",
          demo: "https://mnmkato.github.io/movie-project/",
        },
        {
            screenshot: "screenshots/weather_app.PNG",
            title: "Weather App",
            description: "A simple web application that provides real-time weather information based on your location.",
            ingredients: ["Javascript","HTML/CSS", "Webpack", "Weather API"],
            date: "August 2023",
            code: "",
            demo: "#",
        }]
}
generateHome()
generateSkills()
generateprojects()
function generateHome() {
    const displayImage_img =  document.getElementById('displayImage')
    displayImage_img.setAttribute("alt",userName)
    displayImage_img.setAttribute("src",data.displayImage)

    const githubURL_a = document.getElementById('githubURL')
    githubURL_a.textContent= data.githubURL
    githubURL_a.setAttribute("href",data.githubURL)

    const about_div = document.getElementById("about")
    const about_p = document.createElement("p")
    about_p.textContent= data.about
    about_div.appendChild(about_p)
}
function generateSkills() {
    const skillsContainer = document.getElementById("skills_content");
    
    data.skills.forEach(skillCategory => {
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = skillCategory.type;

        const skillsList = document.createElement("ul");
        skillCategory.list.forEach(skill => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });

        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("skill-category");
        categoryContainer.appendChild(categoryTitle);
        categoryContainer.appendChild(skillsList);

        skillsContainer.appendChild(categoryContainer);
    });
}
function generateprojects() {

  const projects = document.getElementById("projects_grid");
  
  data.projectList.forEach((project) => {
    const projectItemContent = document.createElement("div");
    projectItemContent.classList.add("project_item_content");

    //screenshot
    const screenshotWrapper = document.createElement("div");
    screenshotWrapper.classList.add("screenshot-wrapper");

    const screenshotElement = document.createElement("img");
    screenshotElement.classList.add("screenshot");
    screenshotElement.src = project.screenshot;
    screenshotElement.alt = `${project.title} Screenshot`;

    screenshotWrapper.appendChild(screenshotElement);
    
    //details
    const projectCard = document.createElement("div");
    projectCard.classList.add("project_item");
  
    // title 
    const titleElement = document.createElement("h2");
    titleElement.textContent = project.title;
  
    // description 
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = project.description;
  
    // languages and tools
    const techIconsElement = document.createElement("div");
    techIconsElement.classList.add("tech-icons");
    project.ingredients.forEach((ingredient) => {
      const techIcon = document.createElement("div");
      techIcon.classList.add("tech-icon");
      techIcon.textContent = ingredient;
  
      techIcon.setAttribute("title", ingredient);
  
      techIconsElement.appendChild(techIcon);
    });
  
    // date
    const dateElement = document.createElement("p");
    dateElement.textContent = project.date;
  
    // code 
    const codeButton = document.createElement("div");
    codeButton.classList.add("button");
    const codeLink = document.createElement("a");
    codeLink.href = project.code;
    const codeIcon = document.createElement("i");
    codeIcon.classList.add("fa", "fa-code");
    const codeText = document.createTextNode(" Code");
    codeLink.appendChild(codeIcon);
    codeLink.appendChild(codeText);
    codeButton.appendChild(codeLink);       
  
    // demo
    const demoButton = document.createElement("div");
    demoButton.classList.add("button");
    const demoLink = document.createElement("a");
    demoLink.href = project.demo;
    const demoIcon = document.createElement("i");
    demoIcon.classList.add("fa", "fa-eye");
    const demoText = document.createTextNode(" Demo");
    demoLink.appendChild(demoIcon);
    demoLink.appendChild(demoText);
    demoButton.appendChild(demoLink);
  
   
    projectCard.appendChild(titleElement);
    projectCard.appendChild(descriptionElement);
    projectCard.appendChild(techIconsElement);
    projectCard.appendChild(dateElement);
    projectCard.appendChild(codeButton);
    projectCard.appendChild(demoButton);

    
    projectItemContent.appendChild(screenshotWrapper);
    projectItemContent.appendChild(projectCard);
    
    projects.appendChild(projectItemContent);
  });

}