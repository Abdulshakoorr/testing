
import { Button, Typography,Stack,IconButton,ButtonGroup } from "@mui/material";
import React from "react";
import BackupSharpIcon from '@mui/icons-material/BackupSharp';
import WarningSharpIcon from '@mui/icons-material/WarningSharp';
const Typograpy = () => {
  return (
    <div>
      {/* <Typography variant="h1">heading 01</Typography>
      <Typography variant="h2">heading 02</Typography>
      <Typography variant="h3">heading 03</Typography>
      <Typography variant="h4">heading 04</Typography>
      <Typography variant="h5">heading 05</Typography>
      <Typography variant="h6">heading 06</Typography>

      <Typography variant="subtitle1">subtitle one</Typography>
      <Typography variant="subtitle2">subtitle two</Typography>
      <Typography variant="body1">body 01</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Dolores rerum
        iste sunt illum. Possimus voluptatem  <br /> delectus dolor id placeat esse,
        officiis nostrum <br /> voluptatum vero! Tenetur illo mollitia deserunt illum
        possimus.
      </Typography><br /> <br /> <br /> */}
      <Stack spacing ={2} direction='column'>
        <Button variant="text">Text</Button>
        <Button variant="field">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Contained</Button>
        <br /> <br /> <br />
        <Button size='large' variant="contained">Primary</Button>
        <Button size='medium' variant="contained" href="https://www.google.com" target="blank">Google</Button>
        <Button size='small' variant="contained">Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button><br /> <br /> <br />
        <Button variant="contained" color="error" size='small'
            onClick={() => {
                alert('clicked');
            }}
            >
            Click me
            </Button>
      </Stack><br /> <br /> <br /><br /> <br /> <br />
      <Stack spacing={4} direction='row' > 
            {/* <IconButton variant="contained">
            <input hidden accept="image/*" type="file" />
            </IconButton> */}
            <Button variant="primary" color='primary'>Primary</Button>
            <Button variant="contained" color='success'>success</Button>
            <Button variant="contained" color='secondary'>secondary</Button>
            <Button variant="contained" color='info' disableElevation>info</Button>
            <Button variant="contained" color='error'>error</Button>
            <Button variant="contained" color='warning' startIcon={<WarningSharpIcon/>}> warning</Button>
            <IconButton aria-label="upload">
                <BackupSharpIcon/>
            </IconButton>
      </Stack>
      <br /> <br /> <br /><br /> <br /> <br />
      <Stack spacing={4} direction='row'>

            <ButtonGroup variant="contained">
            <Button>Right</Button>
            <Button>Center</Button>
            <Button>Right</Button>
            </ButtonGroup>

      </Stack>
      <br /> <br /> <br /><br /> <br /> <br />
    </div>
  );
};

export default Typograpy;
