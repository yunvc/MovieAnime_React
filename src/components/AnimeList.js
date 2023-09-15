import React from 'react'

export const AnimeList = ({ animelist,setAnimeInfo,animeComponent,handleList}) => {
  const AddToList=animeComponent;
  return (
    <>
      {
        animelist ? (
          animelist.map((anime, index) => {
            return (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 " key={index} >
                <img className='w-full h-[200px] block object-cover mx-9' src={anime.images.jpg.large_image_url} alt="animeImage"/>
                      <AddToList/>
              </div>
            )
          })
        ) : "Not Found"
      }

    </>
  )
}

export default AnimeList