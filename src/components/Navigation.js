import Project from './Project';
import Footer from './Footer';

function Navigation(props) {
    //use state set which page we're on
    let variable = props.section;

    console.log(variable);

    const projects = [
        {
            image: "https://user-images.githubusercontent.com/130417012/243476330-437775b1-ebf7-4c1f-8701-55b15a888df2.png",
            title: "Work Day Scheduler",
            link: "https://github.com/artorrias/Work-Day-Scheduler",
            number: 1
        },
        {
            image: "https://user-images.githubusercontent.com/130417012/255753321-92bdece6-45f5-4b50-a74f-2f75a548b004.png",
            title: "Simple Note Taker",
            link: "https://github.com/artorrias/Sams-Simple-Note-Maker",
            number: 2
        }
    ];

    const listItems = projects.map(obj => (
        <Project
            key={obj.number.toString()}
            image={obj.image}
            title={obj.title}
            link={obj.link}
        ></Project>
    ))


    //function that checks the page and returns code depending on page
    return (
        <div className="outlet"> 
        {variable==="About" ?
            (
                <div>
                    <p>about</p>
                </div>
            )
        : variable==="Resume" ? (
            <div>
                <p>Resume</p>
            </div>
        )
        : (
            <div>
                <p>Projects</p>
                <div>{listItems}</div>
            </div>
        )}
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default Navigation;


