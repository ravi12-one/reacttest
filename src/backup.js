import { Button, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { Add } from "@mui/icons-material";
import styled from "styled-components";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor:"blueviolet",
  }
});
  return (
    <>
      <Button
        variant="contained"
        color="othercolor"
        size="large "
      >secondary
      </Button>

      <Button startIcon={< Add />}
        variant="contained" color="success" >
        success</Button>

      <Button startIcon={<SettingsIcon />}
        variant="outlined"
        color="error">setting</Button>
      <Typography variant="h1" component="p">
        It use variant h1 and component p
       </Typography>
       <BlueButton>Myss</BlueButton>
       <BlueButton>Myss</BlueButton>
    </>
  );
}

export default App;
