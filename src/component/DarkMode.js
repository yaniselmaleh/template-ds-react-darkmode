import React, { useState, useEffect } from 'react'

import Toggle from "react-toggle";
import "react-toggle/style.css"

export default function DarkMode() {
    const [schemeState, setschemeState] = useState(false);
    const SCHEME_ATTRIBUTE = 'data-rf-theme';

    useEffect(() => {
        const getscheme = localStorage.getItem('scheme');
        if (getscheme === 'dark') {
            setschemeState(true);
        }
    }, []);

    useEffect(() => {
        if (schemeState) {
            localStorage.setItem('scheme', 'dark');
            document.getElementsByTagName("html")[0].setAttribute(SCHEME_ATTRIBUTE, "dark");
        } else {
            localStorage.setItem('scheme', 'light');
            document.getElementsByTagName("html")[0].setAttribute(SCHEME_ATTRIBUTE, "light");
            return
        }
    }, [schemeState]);

    return (
        <>
            <Toggle
                className="DarkToggle"
                checked={schemeState}
                onChange= {e => setschemeState(e.target.checked)}
                icons={{ checked: "🌙", unchecked: "🔆" }}
                aria-label="Changer le thème du site"
            />
        </>
    );
}