// pages/users/[id].js

import { useRouter } from 'next/router';
import auth from '../../auth_/auth/auth-helper';
import {useState, useEffect} from 'react'
import { read } from '../../auth_/user/api';
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import DeleteUser from '../../components/DeleteUser'


const useStyles = makeStyles(theme => ({
//   root: theme.mixins.gutters({
//     maxWidth: 600,
//     margin: 'auto',
//     padding: theme.spacing(3),
//     marginTop: theme.spacing(5)
//   }),
  title: {
    marginTop: theme.spacing(3),
    color: theme.palette.protectedTitle
  }
}))
function Profile() {
  const router = useRouter();
  const userId = router.query.userId
  const classes = useStyles()
  const [user, setUser] = useState({})
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true)
      } else {
        setUser(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  }, [userId])
  // Show a loading message while fetching the user
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if(user == {}){
    return <div>No User Found</div>;
  }
  if(user){    
    return (
            <Paper elevation={4}>
              <Typography variant="h6" className={classes.title}>
                Profile
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={user.name} secondary={user.email}/> {
                   auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
                    (<ListItemSecondaryAction>
                      <Link href={"/users/edit/" + user._id}>
                        <IconButton aria-label="Edit" color="primary">
                          <EditIcon/>
                        </IconButton>
                      </Link>
                      <DeleteUser userId={user._id}/>
                    </ListItemSecondaryAction>)
                  }
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemText primary={"Joined: " + (
                    new Date(user.created)).toDateString()}/>
                </ListItem>
              </List>
            </Paper>
          
      );
  }
  
  
}

export default Profile;
