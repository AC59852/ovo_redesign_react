import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import album from '../img/album_cover.png'
import { fab, faDeezer, faItunes, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'

class HomeTop extends React.Component {
    render() {
        return (
        <div className="homeBottom w-full">
            <div className="w-11/12 mx-auto text-center">
                <h2 className="pt-16 mx-auto w-3/4">money in the grave</h2>
                <h3 className="pt-4 pb-8 text-lg tracking-widest">out now on all platforms</h3>
                <img src={album} className="w-3/4 flex mx-auto" alt="album cover"/>
            </div>
            <div className="">
                <h3 className="text-center text-2xl tracking-widest py-8">listen now</h3>
                <div class="flex justify-evenly w-3/4 mx-auto text-3xl">
                <FontAwesomeIcon className="text-white" icon={faSpotify} />
                <FontAwesomeIcon className="text-white" icon={faItunes} />
                <FontAwesomeIcon className="text-white" icon={faYoutube} />
                <FontAwesomeIcon className="text-white" icon={faDeezer} />
                </div>
            </div>
        </div>
        )
    }
}

export default HomeTop;