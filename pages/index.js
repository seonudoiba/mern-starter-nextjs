import Image from "next/image";
import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
 
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#3f4771",
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
    

      <Image
      src="/image.jpg"
      alt="Landscape picture"
      width={800}
      height={500}
    />

      <Typography
        variant="body2"
        component="p"
        className={classes.credit}
        color="textSecondary"
      >
        Photo by{" "}
        <a
          href="https://unsplash.com/@boudewijn_huysmans"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boudewijn Huysmans
        </a>{" "}
        on Unsplash
      </Typography>
      <CardContent>
        <Typography variant="body1" component="p">
          Welcome to the MERN Skeleton home page.
        </Typography>
      </CardContent>
    </Card>
  );
}
