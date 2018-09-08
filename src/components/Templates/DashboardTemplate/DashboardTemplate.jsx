import React from "react";
import SongCard from "./components/SongCard";
import { withStyles } from "@material-ui/core/styles";
import SetlistCard from "./components/SetlistCard";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row"
  }
});

const DashboardTemplate = props => {
  const { classes } = props;
  const sortedNews = Object.values(props.news).sort(
    (a, b) => (a.creationDate < b.creationDate ? 1 : -1)
  );
  return (
    <div className={classes.root}>
      {sortedNews.map(item => {
        switch (item.type) {
          case "SONG":
            return <SongCard data={item} />;
          case "SETLIST":
            return <SetlistCard data={item} />;
          case "USER":
            return null;
        }
      })}
    </div>
  );
};

export default withStyles(styles)(DashboardTemplate);
