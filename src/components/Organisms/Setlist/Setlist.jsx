import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Songlist from "../../Molecules/Songlist/Songlist";
import { DragDropContext } from "react-beautiful-dnd";
const styles = theme => ({
  container: {
    flexGrow: 1,
    display: "flex"
  }
});

const onDragEnd = result => {

}

const SetlistScreenTemplate = props => {
  const { classes, setlist, songs } = props;
  return (
    <div className={classes.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Songlist data={songs} secondary={true} dense={true} id={0} />
        {setlist && setlist.setOrder.map((set,i) =>{
        return (
          <Songlist songs={setlist.sets[set]} heading={'Set ' + i+1} key={i+1} id={i+1}/>
        );
      })}
      </DragDropContext>
    </div>
  );
};

export default withStyles(styles)(SetlistScreenTemplate);
