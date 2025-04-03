import { IoIosSearch } from "react-icons/io";
const SearchBox = () => {
    return(
        <div className="searchBox">
            <IoIosSearch className="search" />
            <input type="text" placeholder="search here..." />
        </div>
    )
}
export default SearchBox;