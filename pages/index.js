import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import googleIcon from './images/google.png'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Home() {
  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`)
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
      </header>
      
      <form className="flex flex-col items-center mt-24 flex-grow w-4/5">
        <Image
          src={googleIcon}
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
            placeholder="Search..."
          />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I'm Filing Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
