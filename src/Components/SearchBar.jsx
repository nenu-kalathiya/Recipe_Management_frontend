import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ query, setQuery }) => {
  return (
    <TextField
      label="Search..."
      variant="outlined"
      fullWidth
      margin="normal"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
