import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import BandAvatar from "../../../Atoms/BandAvatar/BandAvatar";

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
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
        avatar={<BandAvatar userId={data.itemId} />}
        title="New User"
        subheader={data.creationDate.toLocaleDateString("en-US")}
      />
      <CardContent>
        <Typography variant="headline" component="h2">
          {data.name} ist deiner Band beigetreten!
        </Typography>
      </CardContent>
      <CardActions />
    </Card>
  );
};
export default withStyles(styles)(SongCard);
