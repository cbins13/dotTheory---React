import React from 'react'
const Home = () => {
    return(
        <div className='homeContainer'>
            <h2>Simple Data-fetching Project using ReactJS</h2>
            <p>This project is created with the help of JSONPlaceHolder API, a free fake API for testing and prototyping.</p>
            <span>Click </span>
            <a className="underlined" href="https://jsonplaceholder.typicode.com/">here</a><span> to view the JSONPlaceholder website.</span>
            <h3>On the header navigation, click on the posts, photos, or users tab to view the fetched data.</h3>
        </div>
    )
}

export default Home;