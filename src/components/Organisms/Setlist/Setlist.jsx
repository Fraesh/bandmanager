import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Songlist from "../../Molecules/Songlist/Songlist";
import { DragDropContext } from "react-beautiful-dnd";
const styles = theme => ({
  container: {
    flexGrow: 1,
    display: "flex",
    alignItems: "start"
  }
});

const SetlistScreenTemplate = props => {
  const { classes, setlist, songs, moveSong, onDelete } = props;

  const onDragEnd = result => {
    moveSong(result.draggableId, result.source, result.destination);
  };
  let combinedSets = [];
  setlist && (combinedSets = [].concat.apply([], Object.values(setlist.sets)));

  return (
    <div className={classes.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Songlist
          data={songs.filter(song => !combinedSets.includes(song.id))}
          secondary={true}
          dense={true}
          id={"SONGPOOL"}
        />
        {setlist && setlist.setOrder
          ? setlist.setOrder.map((set, i) => {
              return (
                <Songlist
                  data={setlist.sets[set].map(songId =>
                    songs.find(song => song.id === songId)
                  )}
                  heading={"Set " + (i + 1)}
                  key={i + 1}
                  id={set}
                  secondary={true}
                  dense={true}
                  onDelete={onDelete}
                />
              );
            })
          : null}
      </DragDropContext>
    </div>
  );
};

export default withStyles(styles)(SetlistScreenTemplate);
