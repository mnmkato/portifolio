import { data } from '../data.js';

function Home(params) {
   
    return(
        <div id="home">
            <h1>Kato Mahad</h1>
                <div id="home_content">
                <div id="bio">
                    <img id="displayImage" alt={data.userName} src={data.displayImage}/>
                    <h1 id="userName">{data.userName}</h1>
                    <a id="githubURL">{data.githubURL}</a>
                </div>
                <div id="about">{data.about}</div>
        </div>
    </div>
    )
}

export default Home;