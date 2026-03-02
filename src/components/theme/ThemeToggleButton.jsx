// ThemeToggleButton Component

import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react';

function ThemeToggleButton() { 

    const { theme, toggleTheme} = useContext(ThemeContext)

return(
    <div>
        <button onClick={toggleTheme} style={{ flex: 1, marginBottom: '15px'}}>
            {theme === 'light' ? 'Dark Mode': 'Light Mode'}
        </button>
    </div>
)

}

export default ThemeToggleButton






