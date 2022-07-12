import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Genres from './components/Genres';
import Navbar from './components/Navbar';
function App() {
  const [firstAnime,setFirstAnime] = useState({'images':{jpg:''}})
  const [topAnimeList,setTopAnimeList] = useState([])
  
  const getTopAnime =  () =>{
    axios.get('https://api.jikan.moe/v4/top/anime').then((response) =>{
    setFirstAnime(response.data.data[0])
    setTopAnimeList(response.data.data)
    })
  }

  /*<img src= {response.data.data[0].images.jpg.large_image_url} />*/ 
  useEffect(()=>{
    getTopAnime();
    console.log(topAnimeList)
  },[])
  
  const imagestyle = {
    backgroundImage: 'linear-gradient(to right,rgba(26,26,29,1),rgba(255,255,255,0)), url(' + firstAnime.images.jpg.large_image_url + '), url(https://assets1.ignimgs.com/2019/11/21/top25anime-blogroll-1574296153994_160w.jpg?width=1280)',
    backgroundSize: '60%',
    backgroundPositionX: '100%',
    backgroundPositionY:'0%',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover'
}
/*{firstAnime.images.jpg ? <img src={firstAnime.images.jpg.large_image_url}></img>:null}*/
  return (
    <div className="App" style={imagestyle}>
      <Navbar />
      <div className= 'top-show-image'>
        <div className='top-show-information'>
        <div className='top-show-title'>
        <h1>{firstAnime.title}</h1>
        </div>
        <ul>
        <li className='top-show-duration'>
          {firstAnime.duration? <p>Duration: {firstAnime.duration}</p>:null}
        </li>
        <li className='top-show-info'>
          <p><img src={require('./components/assets/ratestar.png')}/>{firstAnime.score} | </p>  
           {firstAnime.genres ?<p>{firstAnime.genres[0].name}</p>:null}
        </li>
        <div className='top-show-synopsis'>
        {firstAnime.synopsis}
        </div>
        </ul>
      <div className='top-show-buttons'>
      {firstAnime.url? <button> 
        <a href={firstAnime.url} target='_blank'>MyAnimeList</a>
        </button>:null} 
        {firstAnime.trailer?<button>
          <a href={firstAnime.trailer.url} target='_blank'>Trailer</a>
        </button>:null}
      </div>
      </div>
    </div>
      <Genres topAnimeList = {topAnimeList}/>
    </div>
  );
}

export default App;
