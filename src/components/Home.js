import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleNavigateSinglePlayer = () => {
        navigate('/singleplayer');
    };

    const handleNavigateDoublePlayer = () => {
        navigate('/doubleplayer');
    };

    return (
        <div className="home-container">
            <video autoPlay loop muted className="video-background">
                <source src="./b1.mp4" type="video/mp4" />
            </video>

            <div className="content">
    <img src="./logo3.png" alt="EcoSprout Logo" className="home-logo" />
    <h1>Welcome to EcoSprout!</h1>
    <div className="button-container">
      <button onClick={handleNavigateSinglePlayer} className="home-button">Single Player</button>
      <button onClick={handleNavigateDoublePlayer} className="home-button">Double Player</button>
    </div>
  </div>
        </div>
    );
}

export default Home;
