const TarjetaPresentacion = ({name,img,description}) => {
    return(
        <div>
            <img src={img} alt="img1"/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default TarjetaPresentacion;