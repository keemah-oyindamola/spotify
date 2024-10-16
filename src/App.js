import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';
import images from './download (1).jpg';
import imagess from './download.jpg';
import imagg from './ab67616100005174d780318487f3fad6bec36086.jpg';
import photo from './ab67616100005174e12972169702affd7a4c48ec.jpg';
import pic from './images.jpg';
import axios from 'axios';
// import { click } from '@testing-library/user-event/dist/click';
// import { AiFillHome } from "react-icons/ai";

function App() {
  const [music, setmusic] = useState([])
  const [next, setnext] = useState({})

  const playSong = () => {
    axios.get('https://robo-music-api.onrender.com/music/my-api')
      .then((res) => {
        console.log(res.data);
        setmusic(res.data)
        // console.log(music);
      }).catch((error) => {
        console.log(error);
      })
    let lol = document.getElementById("lol")
    let stop_music = `<span onClick={stopMu} class="material-symbols-outlined">pause_circle</span>`
    lol.innerHTML = stop_music
    // stop_music.addEventListener('click',()=>{
    //   axios.get('')
    // })


  }
  const Nextsong = () => {
    axios.get('https://robo-music-api.onrender.com/music/my-api')
      .then((res) => {
        console.log(res.data);
        setmusic(res.data)
      }).catch((error) => {
        console.log(error);
      })
  }
    useEffect(() => {
      setnext(next)
      axios.get('https://robo-music-api.onrender.com/music/my-api')
      .then((res)=>{
        console.log(res.data);
        setmusic(res.data)
        // console.log(music);
      }).catch((error)=>{
        console.log(error);
      })

  }, [next])

  // const Nextsong = (el)=>{
  //   console.log(el.id.albumName);
  //   // let id = el.id
  //   // setmusic(id)
  // }
  let data = [
    { photo: images, content: 'Artist', nameof: 'KimTaehyung' },
    { photo: imagg, content: 'Artist', nameof: 'Tatiana' },
    { photo: photo, content: 'Artist', nameof: 'MAMAAOO' },
    { photo: imagess, content: 'Artist', nameof: 'Jimin' }
  ]
  return (
    <>
      <div className='Main-div'>

        <div>
          <div className='First-div'>
            <div className='firstdiv-part'>
              <span class="material-symbols-outlined">home</span>
              <p>Home</p>
            </div>
            <div className='firstdiv-parttwo'>
              <span class="material-symbols-outlined">search</span>
              <p>Search</p>
            </div>
          </div>
          <div className='Second-div'>
            <div className='library'>
              <span class="material-symbols-outlined">library_books</span>
              <p>Your Library</p>
              <span id='add' class="material-symbols-outlined">add</span>
              <span id='add' class="material-symbols-outlined">arrow_forward</span>
            </div>

            <div className='two-btn'>
              <button>Playlists</button>
              <button className='artists'>Artists</button>
              <button className='artists'>Album</button>
            </div>
            <div className='recents'>
              <span class="material-symbols-outlined">search</span>
              <p >Recents</p>
              <span id='added' class="material-symbols-outlined">menu</span>
            </div>
            <div className='seconddivart'>
              <img className='seconddivart-img' src={pic} alt="" />
              <p className='seconddivart-p'>Kizz Daniel <br /> Artist</p>
            </div>
            <div className='seconddivart'>
              <img className='seconddivart-img' src={images} alt="" />
              <p className='seconddivart-p'>KimTaehyung <br /> Artist</p>
            </div>
            <div className='seconddivart'>
              <img className='seconddivart-img' src={images} alt="" />
              <p className='seconddivart-p'>KimTaehyung <br /> Artist</p>
            </div>
          </div>
        </div>
        <div>
          <div className='top'>
            <div className='first-top'>
              <button id='arrowback'><span class="material-symbols-outlined">arrow_back_ios_new</span></button>
              <button id='arrowback'><span class="material-symbols-outlined">arrow_forward_ios</span></button>
              <button className='premium'>Explore Premium</button>
              <button className='app'><span class="material-symbols-outlined">download</span>Install App</button>
            </div>
            <div className='three-btn'>
              <button className='all'>All</button>
              <button className='music'>Music</button>
              <button className='music'>Podcast</button>
            </div>
            <div className='altogether'>
              <div className='tza'>
                <img src={pic} alt="" />
                <p>Kizz Daniel</p>
              </div>
              <div className='tza'>
                <img src={imagess} alt="" />
                <p>Jimin</p>
              </div>
              <div className='tza'>
                <img src={images} alt="" />
                <p>KimTaheyung</p>
              </div>
              <div className='tza'>
                <img src={photo} alt="" />
                <p>MAMMAOO</p>
              </div>
            </div>
            <h1 className='made'>Made For Hikmotbolanle</h1>
          </div>
          <div style={{ display: 'flex', }}>
            {data.map((el, i) => (
              <>
                <div>
                <Button theimage={el.photo} content={el.content} nameof={el.nameof} />

                </div>
              </>
            ))
            }
            {/* <Button theimage={images} content={'Artist'} nameof={'KimTaehyung'} />
            <Button theimage={imagg} content={'Artist'} nameof={'Tatiana'} />
            <Button theimage={photo} content={'Artist'} nameof={'MAMAAOO'} />
            <Button theimage={imagess} content={'Artist'} nameof={'Jimin'} /> */}
          </div>

        </div>

      </div>
      <div className='lastdiv'>
        <div className='lastdiv-first'>
          <span class="material-symbols-outlined">skip_previous</span>
          <span onClick={playSong} id='lol' class="material-symbols-outlined">play_circle</span>
          <span onClick={Nextsong} class="material-symbols-outlined">skip_next</span>
          {/* <span onClick={(()=>setnext(next + 1))} class="material-symbols-outlined">skip_next</span> */}
          <span id='volume' class="material-symbols-outlined">volume_up</span>
        </div>
        <input className='range' type="range" />
        {music.map((el) => (
          <>f
            <div>
              <audio autoPlay src={el.songUrl}></audio>
              {/* <span onClick={(()=>setnext(next + 1))} class="material-symbols-outlined">skip_next</span> */}
            </div>
          </>
        ))}
      </div>



    </>
  );
}

export default App;
