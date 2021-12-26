import './createPost.css';

import { useState, useRef } from 'react';

import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField'
import Button from '@mui/material/Button';

import logo from '../logo.svg'

const CreatePost = () => {

    const username = useRef("");
    const title = useRef("");
    const story = useRef("");

    const [usernameIsValid, setUsernameIsValid] = useState(true);
    const [titleIsValid, setTitleIsValid] = useState(true);
    const [storyIsValid, setStoryIsValid] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const validateInputs = () => {
        const usernameIsValid = username.current;
        const titleIsValid = title.current;
        const storyIsValid = story.current;

        setUsernameIsValid(usernameIsValid);
        setTitleIsValid(titleIsValid);
        setStoryIsValid(storyIsValid);

        if (usernameIsValid && titleIsValid && storyIsValid) {
            setIsLoading(true);
            submitPost();
            setTimeout(() => { window.location.reload(false); }, 4000);
        }
    };

    const submitPost = async () =>{
        const request = {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify({
                username: username.current,
                title: title.current,
                content: story.current
            })
        };
        try {
            await fetch("https://not_reddit.j927chen.workers.dev/posts", request);
        } catch (error) {}
    };

    return(
    <div>
        <h1>
            Share Your Story
        </h1>
        {isLoading ? 
            <div className='Loading'>
                <img src={logo} alt="logo"/>
                <h2>Posting...</h2>
            </div> 
            : 
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '75%' },}} noValidate autoComplete="off">
                <TextField label="Username" onChange={e => {username.current = e.target.value}} error={!usernameIsValid}/>
                <TextField label="Title" onChange={e => {title.current = e.target.value}} error={!titleIsValid}/>
                <TextField label="Story" multiline onChange={e => {story.current = e.target.value}} rows={4} error={!storyIsValid}/>
                <Button variant="outlined" onClick={validateInputs}>Submit</Button>
            </Box>}
    </div>
    );
};

export default CreatePost;