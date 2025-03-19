import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Explorer/Explorer.css';
import App from '../App'

const Explorer = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/explorerhome')}>
                    Blockchain Explorer
                </h1>
            </div>
        </div>
    )
}

export default Explorer