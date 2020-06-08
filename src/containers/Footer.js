import React from "react";
import './Footer.css'


function Copyright() {
    return (
        <p align="center">
            <small className="text-muted">
                {'Copyright © '}
                <a color="inherit" href="https://symonslabs.com/">
                    Symons Labs
        </a>{' '}
                {new Date().getFullYear()}
                {'.'}
            </small>
        </p>
    );
}

function Footer() {
    return (
        <footer className="dsFooter">
            <span>
                <small className="text-muted">Date Sample was created with love by Benjamin Symons</small>
            </span>
            <Copyright />
        </footer>
    )
}

export default Footer