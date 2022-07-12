import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
/*
Import Axios and just have one url thingy. Everytime a button is clicked, the url is changed and so are the properities,
changing the pics of shows

Have shows linked to either Youtube or MyAnimeList

Iterate through Genres to make them into a list I fear
*/

/*There are 76 genres, [0-75]
So whenever we want to access that specific genre, call it by the index I fear
*/

/*{genres.map((genre,index) =>
        setgenreList(genreurlList => [...genreurlList,`https://api.jikan.moe/v3/search/anime?q=genre=${genre.mal_id}`])
    )}*/

function Genres(topAnimeList) {
    console.log(topAnimeList)
    const url ='https://api.jikan.moe/v4/genres/anime'
    const [genres,setGenres] = useState([])
    /*const [genreCards,setGenreCards] = useState([])*/
    const [selectedGenre,setGenreSelection] = useState([])
    const [genreID,fetchGenreID] = useState('')
    
    function getGenres(result){
        axios.get(url).then((response)=>{
        setGenres(response.data.data)
        })
    }
     function callGenre(e){
        const x = e.target.value
        const genreurl = 'https://api.jikan.moe/v3/search/anime?q=genre=' + x
        axios.get(genreurl).then((response) =>{
            console.log(e)
            console.log(e.target.value)
            console.log(response.data.results)
            setGenreSelection(response.data.results)
        })
    }
    /*function setPopular(){
        axios.get('https://api.jikan.moe/v4/top/anime').then((response) =>{
            setGenreCards(response.data.data)
        })
    }*/
    useEffect(()=>{
        getGenres();
        /*setPopular();*/
    },[])
  return (
    <div className='Genre'>
    <h1>Popular in Anime</h1>
        <div className='Genre-wrapper'>
        <div className='category-list'>
            
        </div>
        <ul className='set-shows'>
            <li className='set-lists'>
            {topAnimeList.topAnimeList.map((topAnime,index)=> 
            <div className='set-shows-block'><img src={topAnime.images.webp.image_url} /><div className='show-title'><h3>{topAnime.title}</h3></div></div>
            )}
            </li>
        </ul>
        <h1 className='headers'></h1>
        <ul className='genre-list'>
        {genres.map((genre,index)  =>
        <button className=''
        /*className = {genre.mal_id}*/
        value={genre.mal_id}
        onClick={callGenre}>
        {genre.name}
        </button>
        )}
        </ul>
        <div className='selectedgenre'>
        {selectedGenre.map((selectedgen) =>
            <a href={selectedgen.url} target='_blank'><img src= {selectedgen.image_url} /></a>
            )}
        </div>
        </div>
    </div>
  )
}

export default Genres