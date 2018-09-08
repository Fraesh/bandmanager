import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: theme.spacing.unit
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
    display: "flex",
    justifyContent: "space-between"
  },

  avatar: {
    backgroundColor: red[500]
  }
});

const SongCard = props => {
  const { classes, data } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="newSong" className={classes.avatar}>
            {data.creator[0]}
          </Avatar>
        }
        title="New Song added"
        subheader={data.creationDate.toLocaleDateString("en-US")}
      />
      <CardContent>
        <Typography variant="headline" component="h2">
          {data.name}
        </Typography>
        <div className={classes.pos}>
          <Typography color="textSecondary"> {data.mkey}</Typography>
          <Typography color="textSecondary">{data.bpm} bpm</Typography>
        </div>
      </CardContent>
      <CardActions />
    </Card>
  );
};
export default withStyles(styles)(SongCard);
