//require navigation

function Header() {

    const [nav, setNav] = useState('About');
    const [resumeActive, setResumeActive] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const { target } = e;
        const navType = target.navSection;
        //set nav to specific
        //render specific nav page?

        if (navType === 'Resume') {
            setNav(navType);
            setResumeActive('active');
        }
    };

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <p class="navbar-brand">Sam Henson</p>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <p class="nav-item nav-link active">About Me</p>
                    <p class="nav-item nav-link">Resume</p>
                </div>
            </div>
        </nav>
    )
};