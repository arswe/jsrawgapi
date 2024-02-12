/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import { useRef } from 'react'
import useQueryStore from '../../store'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const SearchBar = () => {
  const ref = useRef(null)
  const setSearchText = useQueryStore((s) => s.setSearchText)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (ref.current) setSearchText(ref.current.value)
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          inputRef={ref}
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </form>
  )
}

export default SearchBar
