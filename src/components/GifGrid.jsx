import { useEffect, useState } from "react";
import { apiGifs } from "../helper/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({categoria}) => {
    
    const [images, setImages] = useState([])

    const getImages = async()=>{
        const newImages = await apiGifs(categoria);
        setImages(newImages);
    }

    useEffect( ()=>{
        getImages();
    },[])
    return (
            <>
                
                <h2>{categoria}</h2>
                <div className="imagenes">
                
                {
                    images.map(imag =>{
                        return(
                            <GifItem key={imag.id} {...imag}/>
                        )
                        
                    })
                }
                </div>
                
            </>
    )
}
