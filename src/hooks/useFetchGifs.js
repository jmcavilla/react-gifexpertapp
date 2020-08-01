import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFectchGifs = ( category ) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs( category ).then( (imgs) => {
                setState({
                    data: imgs,
                    loading: false
                });
                
        });

    }, [category])


    return state;

}