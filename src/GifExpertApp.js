import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>


            <ol>
                { 
                    categories.map( (category, idx) => 
                        //  <li key={category}>{category}</li>
                         <GifGrid key={category} category={category}></GifGrid>
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
