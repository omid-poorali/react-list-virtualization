import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import names from "./assets/names.json";
import { Button } from "@mui/material";
import { FixedSizeList } from 'react-window';

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
          border: "1px black solid",
          borderRadius: "4px",
        }}
      >
        <List>
          <FixedSizeList
            width="100%"
            height={500}
            itemCount={namesToShow.length}
            itemSize={72}
          >
            {({ style, index }) => {
              const currentItem = namesToShow[index];
              return (
                <ListItem style={style} divider>
                  <ListItemText primary={currentItem.first} secondary={currentItem.last} />
                </ListItem>
              )
            }}
          </FixedSizeList>
        </List>

      </Box>
    </div>
  );
}