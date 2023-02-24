import { Paper, Typography, List, ListItemAvatar } from "@mui/material";
import Link from "next/link";
import {ListItem, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';

const api_url = process.env.API_URL
export async function getStaticProps() {
  let response = await fetch("http://localhost:8080/api/users", { method: "GET" });
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}

export default function Users({ users }) {
  if(!users){
    return<h2>No user Found</h2>
  }
  return (
    <Paper className="root" elevation={4}>
      <Typography variant="h6" className="title">
        All Users
      </Typography>
      <List dense>
        
        {users.map((item, i) => {
          return (
            <Link href={"/users/" + item._id} key={i}>
              <ListItem >
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <IconButton>
                    <ArrowForwardIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Paper>
  );
}
