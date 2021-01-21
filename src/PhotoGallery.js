import React from 'react'
import PhotoCard from './PhotoCard';

const data = [
    {
        title: "Dream Big",
        description: "Sunset at the beach with inspiration quote",
        url: "/AppBreweryWallpaper 1.png"
    },
    {
        title: "Kid Climbing",
        description: "A nice quote with a kid climbing a rock",
        url: "/AppBreweryWallpaper 2.png"
    },
    {
        title: "Mountain Climbing",
        description: "someone climbing a mountain near sunset",
        url: "/AppBreweryWallpaper 3.png"
    },
    {
        title: "Morning Jog",
        description: "Just keep going someone is running in the beach",
        url: "/AppBreweryWallpaper 4.png"
    },
    {
        title: "You got this",
        description: "",
        url: "/AppBreweryWallpaper 5.png"
    },
    {
        title: "progress",
        description: "a road",
        url: "/AppBreweryWallpaper 6.png"
    },
]

function PhotoGallery() {
    return (
        <div className="gallery">
            {
                data.map(i => <PhotoCard
                    title={i.title}
                    url={i.url}
                    description={i.description}
                />
                )
            }
        {/* <PhotoCard url="/AppBreweryWallpaper 1.png" />
        <PhotoCard url="/AppBreweryWallpaper 2.png" />
        <PhotoCard url="/AppBreweryWallpaper 3.png"/>
        <PhotoCard url="/AppBreweryWallpaper 4.png"/>
        <PhotoCard url="/AppBreweryWallpaper 5.png"/>
        <PhotoCard url="/AppBreweryWallpaper 6.png"/> */}
            
        </div>
    )
}

export default PhotoGallery;