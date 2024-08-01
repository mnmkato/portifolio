import { projectList} from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
function Projects(params) {
    /*
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
    projectCard.appendChild(codeButton);
    projectCard.appendChild(demoButton);

    
    projectItemContent.appendChild(screenshotWrapper);
    projectItemContent.appendChild(projectCard);
    
    projects.appendChild(projectItemContent);
  });

}
    */
    return(
        <div id="projects">
            <h1>Projects</h1>
            <div id="projects_grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project_item_content">
                        <div className="screenshot-wrapper">
                        <img
                            className="screenshot"
                            src={project.screenshot}
                            alt={`${project.title} Screenshot`}
                        />
                        </div>
                        <div className="project_item">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tech-icons">
                            {project.ingredients.map((ingredient, i) => (
                            <div key={i} className="tech-icon" title={ingredient}>
                                {ingredient}
                            </div>
                            ))}
                        </div>
                        <div className="button">
                            <a href={project.code}>
                            <FontAwesomeIcon icon={faCode} /> Code
                            </a>
                        </div>
                        <div className="button">
                            <a href={project.demo}>
                                <FontAwesomeIcon icon={faEye} /> Demo
                            </a>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;