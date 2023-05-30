import { useState } from 'react'

export const AddCategoria = ({onNewCategory}) => {

    const [inputvalue, setInputvalue] = useState("")

    const onInputChange = (e)=>{
      setInputvalue(e.target.value)
      // Lee cada letra del enunciado
      //console.log(e.target.value)
    }
    
    const onInputSubmit = (event ) =>{
        event.preventDefault();
        if(inputvalue.trim().length <=1) return;
        onNewCategory(inputvalue)
        setInputvalue("")
    }

   

    return (

        <div>
            <h1 className='titulo'>GifsSearch</h1>
            <form onSubmit={onInputSubmit} className='formulario'>
                <input 
                placeholder="Ingrese el nombre a buscar"
                value={inputvalue}
                onChange={onInputChange}
                />
            </form>
            
        </div>

    )
}
