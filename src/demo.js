import React, { useState } from "react";
import "./styles.css";
import "./modal.css";
import View from "./view";
import { green, purple } from "@material-ui/core/colors";
//import {VideocamIcon} from '@material-ui/icons/Videocam';
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import VideocamIcon from "@material-ui/icons/Videocam";

import {
  GridList,
  Button,
  Modal,
  Typography,
  Toolbar,
  AppBar,
  InputLabel,
  IconButton,
  FormLabel,
  Grid,
  TextField,
  Select,
  MenuItem,
  makeStyles,
  withStyles
} from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 500,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: "0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  paper1: {
    position: "absolute",
    width: 450,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    border: "0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  select: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: 400,
    height: 40
  },
  crossicon: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(60)
  },
  crossicon1: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(53)
  },
  header: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(20)
  },
  textfield: {
    flexGrow: 1,
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(4),
    width: 500,
    height: 40
  },
  savebuttonmargin: {
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(23)
  },
  root: {
    maxWidth: 345
  },
  title: {
    marginTop: theme.spacing(0),
    flexGrow: 1
  },
  broad: {
    height: 45
  },
  addworkout: {
    marginTop: theme.spacing(1)
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}))(Button);

const SimpleModal = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [o, so] = useState(false);
  const [open, setOpen] = useState(false);
  const [personName, setPersonName] = useState("");
  const [r, setr] = useState("");
  const [link, setlink] = useState("");
  const [i, seti] = useState("");
  const [j, setj] = useState("");
  const [k, setk] = useState("");
  //const [checked, setChecked] = React.useState(false);
  const [Items, setItems] = useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
    if (event.target.value === "Pushup") {
      setr("https://tread.imfast.io/aman/pushup.mp4");
      setlink(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeUZ2qoEVggJ0GhgKrBmu1lqOEBLuwrHouZGW9QOqxBQTcAenB&usqp=CAU"
      );
    }
    if (event.target.value === "Plank") {
      setr("https://tread.imfast.io/aman/plank.mp4");
      setlink(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxyfM0U4Wq8gWlVycfV3AYTxAxZ7mR-BZ3XMyXXKJluOSuXC6m&usqp=CAU"
      );
    }
    if (event.target.value === "Lunges") {
      setr("https://tread.imfast.io/aman/lunges.mp4");
      setlink(
        "data:image/jpeg;base64,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"
      );
    }
    if (event.target.value === "Squats") {
      setr("https://tread.imfast.io/aman/bodyweight_squats.mp4 ");
      setlink(
        "https://i.pinimg.com/474x/9f/e4/4b/9fe44b6520ed9325be06451a2da8c3ee.jpg"
      );
    }
    if (event.target.value === "Jumping Jacks") {
      setr("https://media.giphy.com/media/2tKBrBj4pQJlzWTa81/giphy.mp4");
      setlink(
        "https://images.everydayhealth.com/images/healthy-living/fitness/spring-hiit-workout-05-pg-full.jpg"
      );
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ho = () => {
    so(true);
  };
  const hc = () => {
    so(false);
  };

  const handleCard = () => {
    setItems(oldItems => {
      return [...oldItems, { i, j, k, personName, link }];
    });
    setOpen(false);
    seti("");
    setj("");
    setk("");
    setlink("");
    setr("");
    setPersonName("");
  };
  const text1 = event => {
    seti(event.target.value);
  };
  const text2 = event => {
    setj(event.target.value);
  };
  const text3 = event => {
    setk(event.target.value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <IconButton
        className={classes.crossicon}
        color="default"
        aria-label="watch video"
        onClick={handleClose}
      >
        <CloseOutlinedIcon />
      </IconButton>
      <h2 className={classes.header} id="simple-modal-title">
        Exercise Name
      </h2>
      <InputLabel id="demo-simple-select-label">Add Workouts</InputLabel>
      <Select
        className={classes.select}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={personName}
        onChange={handleChange}
      >
        <MenuItem value="Pushup">Pushup</MenuItem>
        <MenuItem value="Plank">Plank</MenuItem>
        <MenuItem value="Lunges">Lunges</MenuItem>
        <MenuItem value="Squats">Squats</MenuItem>
        <MenuItem value="Jumping Jacks">Jumping Jacks</MenuItem>
      </Select>
      <IconButton color="primary" aria-label="watch video" onClick={ho}>
        {/* <VideocamIcon /> */}

        <VideocamIcon />
      </IconButton>
      <Grid className={classes.textfield} container spacing={3}>
        <Grid item xs={3}>
          <FormLabel>
            <b> Reps</b>
          </FormLabel>
          <br />
          <br />
          <TextField id="outlined-basic" variant="outlined" onChange={text1} />
        </Grid>
        <Grid item xs={3}>
          <FormLabel>
            <b>Time(s)</b>
          </FormLabel>
          <br />
          <br />
          <TextField id="outlined-basic" variant="outlined" onChange={text2} />
        </Grid>
        <Grid item xs={3}>
          <FormLabel>
            <b>Rest(s)</b>
          </FormLabel>
          <br />
          <br />
          <TextField id="outlined-basic" variant="outlined" onChange={text3} />
        </Grid>
      </Grid>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.savebuttonmargin}
        onClick={handleCard}
      >
        Save
      </ColorButton>
    </div>
  );
  const b = (
    <div style={modalStyle} className={classes.paper1}>
      <IconButton
        className={classes.crossicon1}
        color="default"
        aria-label="watch video"
        onClick={hc}
      >
        <CloseOutlinedIcon />
      </IconButton>
      <iframe
        title="video"
        width="450"
        frameBorder="1"
        allowFullScreen
        height="250"
        allow="autoplay"
        src={r}
      />
    </div>
  );

  return (
    <div>
      <div>
        <AppBar className={classes.broad} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Tread Builder
            </Typography>
            <Button href="https://treadtv.github.io/tread/" color="inherit">
              HOME
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Button
        className={classes.addworkout}
        type="button"
        variant="outlined"
        color="primary"
        onClick={handleOpen}
      >
        Add workouts
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      <Modal open={o} onClose={hc}>
        {b}
      </Modal>

      <GridList spacing={15} cellHeight={300} cols={5}>
        {Items.map(item => {
          return (
            <div className="view" key={item.toString()}>
              <View data={item} />
            </div>
          );
        })}
      </GridList>
    </div>
  );
};

export default SimpleModal;
