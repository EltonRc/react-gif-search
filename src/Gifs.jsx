import { useState } from 'react'
import { AddCategoria } from "./components/AddCategoria"
import { GifGrid } from "./components/GifGrid"

export const Gifs = () => {

    const [categorias, setCategorias] = useState(["All The"])
    
    const NewCategoria = (categ) =>{ 
        if(categorias.includes(categ)) return;
        setCategorias([categ])
    }

    

    return (
        <div >
            
            <AddCategoria  onNewCategory = {NewCategoria}/>

            {
                categorias.map(categoria=>{
                    return(
                        <GifGrid 
                        key={categoria} categoria={categoria}
                        />
                    )
                })
            }
            
        </div >
            

    )
}
