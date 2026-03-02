// ThemeToggleButton Component

import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react';

function ThemeToggleButton() { 

    const { theme, toggleTheme} = useContext(ThemeContext)



return(
    <div>
        <button onclick={toggleTheme}>
            {theme === 'Light' ? 'Dark Mode': 'Light Mode'}
        </button>
    </div>
)

}

export default ThemeToggleButton