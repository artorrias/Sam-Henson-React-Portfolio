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
                    <img href="../../public/images/thumbnail_IMG_9551.jpeg" alt="gojo satoru"/>
                    <p>My name is Sam Henson and I am a student in the University of Minnesota Bootcamp. I want to become a full-stack website developer and am working to hone my skills to better support me in the field. I enjoy playing video games both alone and with friends, and I also enjoy watching anime in my past time. I’m originally from Texas, but I love to travel and see new places that are different from where I grew up.</p>
                    <p>I’ve worked in coffee shops for almost three years now and have met all sorts of different people in my time working in them. People’s differences have always intrigued me and captured my attention and it’s a big part of why I like to make friends. People’s differences both complement my weaknesses and enhance my own strengths. I am a big people person and encourage myself to branch out more for this reason!</p>
                </div>
            )
        : variable==="Resume" ? (
            <div>
                <p>Resume</p>
            </div>
        )
        : variable==="Projects" ? (
            <div>
                <p>Projects</p>
                <div>{listItems}</div>
            </div>
        ) : (
            <div>
                <a href="https://github.com/artorrias">Github: @artorrias</a>
                <p>Email: sam.henson1119@outlook.com</p>
            </div>
        )}
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default Navigation;


