import React from 'react'

const Login = () => {
  return (
    <>
    <div className='w0full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/fba9f1f4-3404-4920-b240-ed436d8a6ffe/TW-zh-20230605-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/"/>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[680px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input className='p-3 my-2 bg-gray-600 rounded' type='email' placeholder='Email' autoComplete='email'/>
                        <input className='p-3 my-2 bg-gray-600 rounded' type='password' placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                    </form>
                </div>

            </div>

        </div>
    </div>
    </>
    
  )
}

export default Login