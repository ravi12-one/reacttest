import { Diversity3, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
display:'none',
alignItems:"center",
gap:"20px",
[theme.breakpoints.up("sm")]:{
  display:"flex"
}
}));

const Userbox = styled(Box)(({ theme }) => ({
  display:'flex',
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
  }));


function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyleToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <Diversity3 sx={{ display: { xs: "block", sm: "none" } }} />
        
        <Search sx={{bgcolor:"background.default"}}><InputBase placeholder='search... '></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:30, height:30 }} src="https://media.licdn.com/dms/image/D4D03AQHjqZHTfjF9rg/profile-displayphoto-shrink_800_800/0/1684416609369?e=2147483647&v=beta&t=lbaq7j17-3ogSYiXjLdij63rAVNYhHzuqZXaP0sU9kE"
          onClick={(e)=>setOpen(true)}
          />
        </Icons>
        <Userbox onClick={(e)=>setOpen(true)}>
        <Avatar sx={{width:30, height:30 }} src="https://media.licdn.com/dms/image/D4D03AQHjqZHTfjF9rg/profile-displayphoto-shrink_800_800/0/1684416609369?e=2147483647&v=beta&t=lbaq7j17-3ogSYiXjLdij63rAVNYhHzuqZXaP0sU9kE"/>
        <Typography variant='span'>somesh</Typography>
        </Userbox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} 
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      ><MenuItem >Profile</MenuItem>
      <MenuItem >My account</MenuItem>
      <MenuItem >Logout</MenuItem>
    </Menu>
    </AppBar>
  )
}

export default Navbar