import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { goToListRestaurant } from "../../routes/Coordinator";

export default function FooterHomePage (){ 
    const [value, setValue] = useState();
    const navigate = useNavigate()
    return (
    <footer style={{width: '100vw', overflow:'auto'}}>
       <Box> 
        <BottomNavigation
        
        value={value}
        color='primary'
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction onClick={() => goToListRestaurant(navigate)} icon={<HomeIcon />} />
        {/* <BottomNavigationAction onClick={() => goToCartPage(navigate)}  icon={<ShoppingCartIcon />} /> */}
        {/* <BottomNavigationAction onClick={() => goToProfilePage(navigate)} icon={<PersonIcon />} /> */}
      </BottomNavigation>
      </Box>
    </footer>
       
);
}