import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'


function Post() {
  return (
      <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Somesh Mewal"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="2%"
        image="https://media.licdn.com/dms/image/D4D03AQHjqZHTfjF9rg/profile-displayphoto-shrink_800_800/0/1684416609369?e=2147483647&v=beta&t=lbaq7j17-3ogSYiXjLdij63rAVNYhHzuqZXaP0sU9kE"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        It's not the load that breaks you down, it's the way you carry it
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
