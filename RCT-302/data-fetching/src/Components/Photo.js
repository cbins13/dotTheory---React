const Photo = ({photo}) => {
    return(
        <div className="photo">
            <h4 className="photoTitle">{photo.title}</h4>
            <img src={photo.thumbnailUrl} alt={photo.id}></img>
        </div>
    )
}

export default Photo;