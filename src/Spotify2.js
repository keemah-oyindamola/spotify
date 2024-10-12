import React, { useRef, useState, useEffect } from 'react'
import './Spotify.css'
import Button from './Button';
import images from './download (1).jpg';
import imagess from './download.jpg';
import imagg from './ab67616100005174d780318487f3fad6bec36086.jpg';
import photo from './ab67616100005174e12972169702affd7a4c48ec.jpg';
import pic from './images.jpg';
import axios from 'axios';

const Spotify2 = () => {
    const useref = useRef([])
    console.log(useref.current);
    const [music, setmusic] = useState([])
    useEffect(() => {
        axios.get("https://robo-music-api.onrender.com/music/my-api")
            .then((res) => {
                console.log(res.data);
                setmusic(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const playMusic = (i) => {
        const plays = useref.current[i]
        console.log(plays);
        if (plays.paused) {
            plays.play()
        }else{
            plays.pause()
        }

    }
    return (
        <div>
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
                            <Button theimage={images} content={'Artist'} nameof={'KimTaehyung'} />
                            <Button theimage={imagg} content={'Artist'} nameof={'Tatiana'} />
                            <Button theimage={photo} content={'Artist'} nameof={'MAMAAOO'} />
                            <Button theimage={imagess} content={'Artist'} nameof={'Jimin'} />
                        </div>

                    </div>

                </div>
                <div className='lastdiv'>
                    <div className='lastdiv-first'>
                        <span class="material-symbols-outlined">skip_previous</span>
                        {/* <span onClick={() => playMusic()} id='lol' class="material-symbols-outlined">play_circle</span> */}
                        {/* <span onClick={() => nextmusic(0)} class="material-symbols-outlined">skip_next</span> */}
                        <span id='volume' class="material-symbols-outlined">volume_up</span>
                    </div>
                    <input className='range' type="range" />
                    {
                        music.map((el, index) => (
                            <>
                                <div className='d-flex'>
                                    <audio ref={(el) => useref.current[index] = el} src={el.songUrl}></audio>
                                    <img src={el.songImage} alt="" />
                                    <p>{el.songTitle}</p>
                                    <span onClick={() => playMusic(index)} class="material-symbols-outlined">play_circle</span>

                                </div>
                            </>
                        ))
                    }
                </div>



            </>
        </div>
    )
}

export default Spotify2