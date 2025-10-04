const SearchBox = ({value, handleFilterChange}) => {
return(
 <form>
    <label> Find contacts by name
        <input type="text" value={value} onChange={handleFilterChange}/>
    </label>
 </form>
)
};


export default SearchBox;