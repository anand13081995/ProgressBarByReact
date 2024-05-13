import { useState, useEffect } from 'react';
import './style.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress === 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h1 style={{ marginBottom: '20px' }}>Progress Bar</h1>
            <div className="progress-bar">
                <div className="progress">
                    <div className="progress-inner" style={{ width: `${progress}%`, background: `linear-gradient(to right, #28a745 0%, #28a745 ${progress}%, #f0f0f0 ${progress}%, #f0f0f0 100%)` }}></div>
                    <div className="percentage">{progress}%</div>
                </div>
            </div>
            <div className="message-container">
                {progress !== 100 && <div className="message">Loading...</div>}
                {progress === 100 && <div className="message">Complete!</div>}
            </div>
        </div>
    );
};

export default ProgressBar;
