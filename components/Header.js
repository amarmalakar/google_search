import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { useRef } from 'react';
import googleIcon from '../pages/images/google.png'
import HeaderOption from './HeaderOption';

const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src={googleIcon}
                    height={40}
                    width={120}
                    onClick={() => router.push('/')}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow w-full focus:outline-none"
                        defaultValue={router.query.term}
                    />
                    <XIcon
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = '')}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4" />
                    <SearchIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>

                <Avatar url="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="ml-auto" />
            </div>

            <HeaderOption />
        </header>
    )
}

export default Header
