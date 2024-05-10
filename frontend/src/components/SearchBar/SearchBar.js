import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import './SearchBar.css'

const SearchBar = ({ searchQuery, setSearchQuery }) => {

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
          placeholder="Search"
          variant=""
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
  )
}

export default SearchBar