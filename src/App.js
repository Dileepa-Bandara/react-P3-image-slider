import { Grid } from "@material-ui/core";
import HeaderCom from "./components/HeaderCom";
import ImageCom from "./components/ImageCom";
import "./css/app.css";

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        <HeaderCom></HeaderCom>
        <Grid item>
          <ImageCom></ImageCom>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
