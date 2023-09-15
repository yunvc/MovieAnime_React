import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests  from '../Requests'

const Main = () => {
    const[movies,setMovies]= useState([])
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    // const movie=movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
         setMovies(response.data.results)
        })
    },[])
    //console.log(movie)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentMovieIndex((prevIndex) => {
          if (prevIndex === movies.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 5000); // 设置间隔时间为5秒
    
      return () => {
        clearInterval(interval);
      };
    }, [movies]);

    const movie = movies[currentMovieIndex];

    const truncateString=(str,num)=>{
      if(str?.length>num){
        return str.slice(0,num)+'...';
      }else{
        return str;
      }
    }

    

  return (
    <div className='w-full h-[280px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[280px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[10%] p-4 md:p-8'>
          <h1 className='text-2xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-2'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border text-white  border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-sm'>{truncateString(movie?.overview,100)}</p>
        </div>
      </div>
    </div>
  )
  
}

export default Main