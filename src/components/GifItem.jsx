
export const GifItem = ({title,url}) => {
  return (
    <div className="contenedor_imagenes">
        <img src={url} alt={title}/>
        {/* <p>{title}</p>  */}
    </ div>
  )
}
