import React, { useState } from "react";

const Search = (value) => {
    const [keyword, setKeyword] = useState('');

    const handleChange = () => {
        setKeyword(value);
    }
    return (
        <div>
            <input type="text" />
            <input type="submit" value="Search Brewery" />
        </div>
    )
}

export default Search;