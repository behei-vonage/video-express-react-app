import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  flex: {
    display: "flex",
  },
  videoFilterContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  buttonContainer: {
    border: "2px solid #757575",
    borderRadius: "0.75rem",
    backgroundColor: "#bdbdbd",
    margin: "0 5px",
    width: "62px",
    height: "62px",
    position: "relative",
    cursor: "pointer",
  },
  backgroundImage: {
    width: "64px",
    height: "64px",
    borderRadius: "0.75rem",
    margin: "0 5px",
    cursor: "pointer",
  },
}));
