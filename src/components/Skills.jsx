import {skills} from '../data.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills(params) {
    return(
        <div id="skills">
            <h1>Skills</h1>
            <div id="skills_content">
                {skills.map((skillCategory, index) => 
                <div className='skill-category' key={index}>
                    <FontAwesomeIcon icon={skillCategory.icon} />
                    <h2>{skillCategory.type}</h2>
                    <ul>
                        {skillCategory.list.map((skill, index) => (
                            <li key={index}>
                                {`${skill.name}  `}
                                <FontAwesomeIcon icon={skill.icon} />
                            </li>)
                        )}
                    </ul>
                </div>)}
            </div>
        </div>
    )
}

export default Skills;