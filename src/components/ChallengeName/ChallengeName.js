import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./ChallengeName.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const ChallengeName = (props) => {
  let { setChallengeName, challengeName, edit, setEditFunc } = props;
  const [inputValue, setInputValue] = useState("choose");
  // const [edit, setEdit] = useState(true);
  const valueToDash = (value) => {
    setChallengeName(value);
    setEditFunc();
    // setInputValue(value);
  };
  const localSetEdit = () => setEditFunc();

  const classes = useStyles();
  return edit ? (
    <div
      className={classes.root}
      id="challengeName"
      noValidate
      autoComplete="off"
    >
      <TextField
        required={true}
        id="outlined-basic"
        label={!challengeName ? " בחר שם לאתגר החדש שלך" : challengeName}
        variant="outlined"
        onBlur={(e) => {
          valueToDash(e.target.value);
        }}
      />
      {/* <button onClick={valueToDash}>save</button> */}
    </div>
  ) : (
    <div>
      {" "}
      <div className="title" onClick={localSetEdit}>
        {challengeName}
      </div>
      {/* <button onClick={setEditFunc}>ערוך</button> */}
    </div>
  );
};
export default ChallengeName;
