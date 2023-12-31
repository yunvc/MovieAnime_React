import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies';


const Row = ({title,fetchURL}) => {
    const[movies,setMovies]=useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div className='ml-9' id={'slider'}>
                {movies.map((item,id)=>(
                    <Movies key={id} item={item}/>
                ))}
            </div>

        </div>
    </>
  )
}

export default Row