import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';


export default function ButtonAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{fontFamily: 'clod', fontSize: '30px'}} sx={{ flexGrow: 1 }}>
            CLÖD
          </Typography>
          <Drawer style={{height: '60vh', width: '50vw'}} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List style={{fontSize: '30px', fontWeight: '600', height: '250px'}}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Productos"/>
            </ListItem>

            <ListItem button>
              <ListItemText primary="Catalogo" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Servicios" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Donde estamos?" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Servicios" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contactanos" />
            </ListItem>
          </List>
        </Drawer>
    
        </Toolbar>
      </AppBar>
    </Box>
  );
}
