'use client'

import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({youtubeID}){
    const [isOpen, setIsOpen] = useState(true)

    function handleVideoPlayer(){
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: 330,
        height: 250
    }

    const TrailerVideo = () => {
        return (
            <div className="fixed bottom-2 right-2">
            <button className="float-right px-2 mb-1 bg-color-blue rounded border-2 hover:bg-color-1 hover:text-color-2 hover:border-color-black transition-all" onClick={handleVideoPlayer}>
                X
            </button>
            <YouTube
            videoId={youtubeID}
            onReady={(e) => e.target.pauseVideo()}
            opts={option}
            onError={() => alert('Video is broken, please try another.')}
            />
        </div>
        )
    }

    const ButtonTrailer = () => {
        return (
            <button className="fixed bottom-5 right-5 bg-color-blue rounded p-1.5 border-2 hover:bg-color-1 hover:text-color-2 hover:border-color-black transition-all" onClick={handleVideoPlayer}>Tonton Trailer</button>
        )
    }

    return (
        isOpen ? <TrailerVideo /> : <ButtonTrailer/>
    )
}