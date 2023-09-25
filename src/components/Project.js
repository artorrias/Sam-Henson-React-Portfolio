
function Project(props) {
    let image = props.image;
    let title = props.title;
    let link = props.link;

    return (
        <a className='card' href={link}>
            <img className='card-img-top' src={image} alt="desc"/>
            <div className='card-body'>
                <p className='card-text'>{title}</p>
            </div>
        </a>
    );
}

export default Project;