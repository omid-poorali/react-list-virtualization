import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import names from "./assets/names.json";
import { Button } from "@mui/material";

export function Application() {
  const [showAllNames, setShowAllNames] = useState(false);

  const namesToShow = showAllNames ? names : names.slice(0, 100);

  return (
    <div>
      <Button
        variant={"contained"}
        sx={{ my: 2 }}
        onClick={() => {
          setShowAllNames(!showAllNames);
        }}
      >
        {showAllNames ? "Hide All Names" : "Show All Names"}
      </Button>
      <Box
        sx={{
          overflowY: "scroll",
          border: "1px black solid",
          borderRadius: "4px",
          height: "30rem"
        }}
      >
        <List>
          {namesToShow.map(({ first, last }, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={first} secondary={last} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}