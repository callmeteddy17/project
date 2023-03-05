import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark';
import '../header/project.css';

function Project(props) {
    return (
        <>
            <div id="persionalPic"></div>
            <div className="header-after2"></div>
            <div className="header-after">
                <span>TEDDY'S PROJECT</span>
                <p
                    onClick={() => {
                        props.setShowProject(false);
                    }}
                >
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                </p>
            </div>
            <div className="project-info">
                <div></div>
            </div>
        </>
    );
}

export default Project;
