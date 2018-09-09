import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ClearIcon from "@material-ui/icons/Clear";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import MobileStepper from "@material-ui/core/MobileStepper";
import { CardActionArea } from "@material-ui/core";
import GigCard from "./GigCard";

const styles = theme => ({
  container: {
    dispay: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap"
  }
});

class GigsTemplate extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GigCard status="REQUEST" />
        <GigCard status="PENDING" />
        <GigCard status="APPROVED" />
        <GigCard status="DENIED" />
      </div>
    );
  }
}
export default withStyles(styles)(GigsTemplate);
