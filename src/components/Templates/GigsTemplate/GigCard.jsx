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

const styles = theme => ({
  card: {
    maxWidth: 400,
    display: "inline-block",
    margin: theme.spacing.unit
  },
  headerCanceled: {
    backgroundColor: red[600]
  },
  headerTitleCanceled: {
    color: "#fff"
  },
  headerSubtitleCanceled: {
    color: "#fff"
  },
  header: {
    backgroundColor: green[600]
  },
  headerTitle: {
    color: "#fff"
  },
  headerSubtitle: {
    color: "#fff"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  prograssBar: {
    width: "100%",
    flexGrow: 1
  },
  users: {
    padding: ".5rem",
    display: "flex",
    flexWrap: "wrap"
  },
  user: {
    width: "50%",
    minWidth: 100
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class GigCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const color = 2;
    return (
      <Card className={classes.card}>
        <CardHeader
          //   avatar={
          //     <Avatar aria-label="Recipe" className={classes.avatar}>
          //       R
          //     </Avatar>
          //   }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Kamehemhe Suite Frankfurt"
          subheader="31. Dezember 2018"
          classes={{
            root: color === 1 ? classes.header : classes.headerCanceled,
            title: classes.headerTitle,
            subheader: classes.headerSubtitle
          }}
        />
        <CardContent>
          <Typography variant="subheading" component="p">
            ANFRAGE
          </Typography>
          <Typography variant="display1" component="p">
            22:00 - 01:00 Uhr
          </Typography>
          <div className={classes.users}>
            <Typography component="p" className={classes.user}>
              Julian
            </Typography>
            <Typography component="p" className={classes.user}>
              Nic
            </Typography>
            <Typography component="p" className={classes.user}>
              Jasper
            </Typography>
            <Typography component="p" className={classes.user}>
              Philipp
            </Typography>
            <Typography component="p" className={classes.user}>
              Kevin
            </Typography>
            <Typography component="p" className={classes.user}>
              Robin
            </Typography>
            <Typography component="p" className={classes.user}>
              Jakob
            </Typography>
            <Typography component="p" className={classes.user}>
              Holgi
            </Typography>
            <Typography component="p" className={classes.user}>
              Cori
            </Typography>
            <Typography component="p" className={classes.user}>
              Günni
            </Typography>
          </div>
        </CardContent>
        <CardActionArea style={{ width: "100%" }}>
          <CardContent>
            <Typography variant="button" component="p">
              TO GIG SETLIST
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to ThumbUps">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="AssignmentInd">
            <AssignmentIndIcon />
          </IconButton>
          <IconButton aria-label="AssignmentInd">
            <ReportProblemIcon />
          </IconButton>
          <IconButton aria-label="AssignmentInd">
            <ClearIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Dispo:
            </Typography>
            <Typography paragraph>
              Toller Gig zur Silvester Party in der Kamehameha Suite
            </Typography>
            <Typography>Mit Übernachtung</Typography>
            <Typography>14:00 Uhr Treffpunkt Hänger laden</Typography>
            <Typography>15:00 Uhr Abfahrt</Typography>
            <Typography>16:00 Uhr Get-in und Aufbau</Typography>
            <Typography>17:30 Uhr Ende Soundcheck</Typography>
            <Typography>22:00 Uhr Showtime</Typography>
            <Typography>01:00 Uhr Ende</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
export default withStyles(styles)(GigCard);
