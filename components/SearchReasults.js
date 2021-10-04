import PaginationButtons from "./PaginationButtons"

const SearchReasults = ({ results }) => {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mb-5 mt-3">
                About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)
            </p>

            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="max-w-xl mb-8">
                            {result.formattedUrl}
                        </a>
                        <a href={result.link} className="max-w-xl mb-8">
                            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                                {result.title}
                            </h2>
                        </a>
                    </div>

                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}

            <PaginationButtons />
        </div>
    )
}

export default SearchReasults