import './createPostButton.css';

import logo from '../logo.svg';

const CreatePostButton = ({didClick}) => {
    return(
    <div className="Share" onClick={didClick}>
        <h3>
            Share
        </h3>
        <img src={logo} alt="logo"/>
    </div>);
};

export default CreatePostButton;