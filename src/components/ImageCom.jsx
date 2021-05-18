import React, { useState } from "react";
import { Paper, Card, CardMedia, makeStyles, Button } from "@material-ui/core";
import "../css/image.css";
import { dataList } from "../list";
const useStyles = makeStyles({
  paper: {
    display: "flex",
    justifyContent: "center",
    width: "800px",
    padding: "25px",
  },
  cardMedia: {
    width: "750px",
    height: "450px",
    objectFit: "fill",
  },
  button: {
    width: "200px",
    padding: "10px",
    background: "black",
  },
});

function ImageCom() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const addSliderFunction = () => {
    setCount((e) => e + 1);
    if (count === dataList.length - 1) {
      setCount(0);
    }
  };
  const prevSliderFunction = () => {
    setCount((e) => e - 1);
    if (count === 0) {
      setCount(dataList.length - 1);
    }
  };

  console.log(dataList[count].img);

  return (
    <div className="image">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={prevSliderFunction}
      >
        Previous
      </Button>
      <Paper className={classes.paper}>
        <Card>
          <CardMedia
            image={`${dataList[count].img}`}
            className={classes.cardMedia}
          ></CardMedia>
        </Card>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={addSliderFunction}
      >
        Next
      </Button>
    </div>
  );
}

export default ImageCom;
