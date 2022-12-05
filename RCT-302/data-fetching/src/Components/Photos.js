import Photo from "./Photo";

const Photos = ({photos}) => {
    let data = photos.map(photo=>{
        return(
            <Photo photo={photo} key={photo.id}/>
        )
    }) 
    return(
        <div className="photosContainer">
        {data}
        </div>
    )
}

export default Photos;