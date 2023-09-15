import React, { useEffect, useState } from 'react'
import  { AnimeList } from './AnimeList'
import { AddToList } from "./AddToList";

const Row2 = () => {
  const [search,setSearch]=useState('bl')
  const [animeData,setAnimeData]=useState();
  const [setAnimeInfo]=useState()
  const [myAnimeList,setMyAnimeList]=useState([])

  const addTo=(anime)=>{
    const index=myAnimeList.findIndex((myanime)=>{
        return myanime.mal_id === anime.mal_id
    })
    if(index < 0){
      const newArray=[...myAnimeList,anime]
      setMyAnimeList(newArray);
    }
    
  }
  
  const getData=async()=>{
      const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      const resData= await res.json();
      setAnimeData(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search])

  return (
    <>
          <div className="search-box flex justify-center">
              <input type="search" placeholder="Search your anime" 
              onChange={(e)=>setSearch(e.target.value)}/>
          </div>


        <div className="container">
          <div className="anime-row">
            <h2 className="text-heading">Anime</h2>
            <div className="row">
                <AnimeList 
                animelist={animeData}
                setAnimeInfo={setAnimeInfo}
                animeComponent={AddToList}
                handleList={(anime)=>addTo(anime)}
                />
            </div>
          </div>
        </div>
    </>
  );
}

export default Row2