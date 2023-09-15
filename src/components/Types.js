import React from 'react'
import { Link } from 'react-router-dom'

const Types = () => {
  return (
    <div className='flex justify-center  my-5'>
        <Link to='/'>
        <button className='border text-white  border-gray-300 py-2 px-5 ml-4 w-[130px] sm:w-[170px] md:w-[210px] lg:w-[250px] bg-cover text-4xl rounded-lg flex items-center justify-center font-bold'  style={{ backgroundImage: "url('https://news.agentm.tw/wp-content/uploads/%E6%9C%AA%E5%91%BD%E5%90%8D-2-47-750x422.png')" }}>Movie</button>
        </Link>
        <Link to='/anime'>
        <button className='border text-white  border-gray-300 py-2 px-5 ml-4 w-[130px] sm:w-[170px] md:w-[210px] lg:w-[250px] bg-cover text-4xl rounded-lg flex items-center justify-center font-bold'  style={{ backgroundImage: "url('https://static.acgsecrets.hk/img/f4/f475a688c4a25dedf4617008f6e85205/a96222d8c3cb0611a8e074a559d3f913f5f58e29d3ac82df64687d442c86353c.jpg')" }}>Anime</button>
        </Link>
    </div>
  )
}

export default Types