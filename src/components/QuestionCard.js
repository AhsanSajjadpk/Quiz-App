import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function QuestionCard() {
  return (
    <Card
      sx={{
        minWidth: "90%",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
      }}
    >
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 28 }}>
          Question
        </Typography>
        <Typography variant="h4" component="div">
          This is Dummy Question?
        </Typography>
        <ButtonGroup
          sx={{ marginTop: "15px" }}
          orientation="vertical"
          aria-label="Vertical button group"
          fullWidth
        >
          {[
            <Button sx={{ fontSize: "22px" }} key="one">
              One
            </Button>,
            <Button sx={{ fontSize: "22px", color: "red" }} key="two">
              Two
            </Button>,
            <Button sx={{ fontSize: "22px", color: "green" }} key="three">
              Three
            </Button>,
            <Button sx={{ fontSize: "22px" }} key="four">
              Four
            </Button>,
          ]}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
