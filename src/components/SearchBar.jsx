import React from 'react'
import {Paper,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'


const SearchBar = () => {
  return (
    <Paper 
        component='form'
        onSubmit={() => {}}
        sx={{
        background: "#FFF",
        boxShadow: "none",
        borderRadius: 10,
        mr: {sm: 5},
        pl: 2
      }}
    >
        <input
            className='search-bar'
            placeholder='Search...'
            value=""
            onChange={()=>{}}
        />
        <IconButton type="submit" sx={{p:'10px', color: 'red'}}>
            <Search/>
        </IconButton>
      </Paper>
        )
}

export default SearchBar