//FilterButtons Component

import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

function FilterButtons() { 

    const { filter, setFilter } = useContext(FilterContext);
   
return(
    <div>
        <button onClick={() => setFilter('all')}> All </button>

        <button onClick={() => setFilter('active')}> Active</button>

        <button onClick={() => setFilter('completed')}> Completed </button>

    </div>
)

}

export default FilterButtons
