import search from "../assets/serach/search.svg"

const InputSearch = () => {

    return (
        <div className="relative ">
            <input
                type="text"
                className="rounded-3xl bg-gray-06 px-4 max-w-[204px]"
            />
            <img src={search} className="absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
    )
}

export default InputSearch