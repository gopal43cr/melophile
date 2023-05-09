import React from 'react';
import styled from "styled-components";

export default function Login(){
    const handleClick = () =>{
        const clientId= "793c93e2a04f4b878cfaa9fab2e2b1ff";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = ["user-read-email",
        "user-read-private",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-position",
        "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
        )}&response_type=token&show_daialog=true`;
    };
    return <Container>
        <img src="https://cdn.icon-icons.com/icons2/2395/PNG/512/sound_music_songs_icon_145685.png" alt="logo" />
        <button onClick={handleClick}>Connect Melophile</button>
        </Container>;
    
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100vh;
width:100vw;
background-color: #1db954;
gap: 5rem;
img{
    height: 20vh;
}
button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    // background-color:black;
    border:#49F585;
    font-size: 1.5rem;
    cursor: pointer;
}
`