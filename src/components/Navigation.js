import React from "react";

import Button from "@mui/material/Button";

const Navigation = () => {
  return (
    <div style={{width: '90%', display:'flex', justifyContent:"flex-end"}}>
      <Button sx={{fontSize: "22px"}} variant="contained" size="large">Next</Button>
    </div>
  );
};

export default Navigation;
