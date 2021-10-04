import HeaderOptionLink from "./HeaderOptionLink"
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'

const HeaderOption = () => {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
            <div className="flex space-x-6">
                <HeaderOptionLink Icon={SearchIcon} title="All" selected />
                <HeaderOptionLink Icon={PhotographIcon} title="Images" />
                <HeaderOptionLink Icon={PlayIcon} title="Video" />
                <HeaderOptionLink Icon={NewspaperIcon} title="News" />
                <HeaderOptionLink Icon={MapIcon} title="Maps" />
                <HeaderOptionLink Icon={DotsVerticalIcon} title="More" />
            </div>

            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOption
