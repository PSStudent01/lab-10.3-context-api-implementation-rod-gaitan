//FilterButtons Component

import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

function FilterButtons() { 

    const { filter, setFilter } = useContext(FilterContext);
   
return(
    <div>
        <button onClick={() => setFilter('all')}  style={{  gap: '12px', marginBottom: '20px' }}> All </button>

        <button onClick={() => setFilter('active')} style={{  gap: '12px', marginBottom: '20px' }}> Active</button>

        <button onClick={() => setFilter('completed')} style={{  gap: '12px', marginBottom: '20px' }}> Completed </button>

    </div>
)

}

export default FilterButtons
