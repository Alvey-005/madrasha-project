import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Grid,
    Typography,
    Avatar,
    Drawer,
    ListItem,
    List,
    ListItemButton,
    ListItemText, Toolbar, IconButton, Button
} from "@mui/material";
import Image from 'next/image'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import logo1 from '../../public/images/logo1.jpg'
import Marquee from "react-fast-marquee";
import Link from 'next/link'
import Divider from "@mui/material/Divider";
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact', 'Help', 'Notice', 'Governing-body', 'Teacher', 'Student'];
const navItems = [
    {id:1,name:"Home",link:"/"},
    {id:2,name:"About",link:"about-us"},
    {id:3,name:"Contact",link:"contact"},
    {id:4,name:"Presidents-talk",link:"principal-lecture"},
    {id:5,name:"Notice",link:"notice"},
    {id:6,name:"Governing-body",link:"governing-body"},
    {id:7,name:"Teachers",link:"teachers"},
    {id:8,name:"Student",link:"students"},
]
const homeData = {
    name:"Abu Taher Dakhil Madrasah",
    banglaName:"আবু তাহের দাখেলিয়া মাদ্রাসা",
    email:"iscm@gmail.com",
    phone:"48310177",
    slogan:"শিক্ষা নিয়ে গড়ব দেশ শেখ হাসিনার বাংলাদেশ"
}
const Header = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Abu Taher Dakhil Madrasah
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText>
                                <Link href={item.link}>
                                    <a style={{color: 'black'}}>{item.name}</a>
                                </Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <header>
            <AppBar position='static'>
                <Box>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <p style={{textAlign: 'center'}}>{homeData.slogan}</p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <p style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}><MdPhone/> Call
                                Us
                                at: {homeData.phone}</p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <p style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                                <EmailIcon/> {homeData.email}</p>
                        </Grid>
                    </Grid>
                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          alignContent="center">
                        {/*<Image src={logo1} alt='logo' height={200} width={200} />*/}
                        <Avatar
                            alt="Abu Taher "
                            // src="../../public/images/logo1.jpg"
                            sx={{width: 200, height: 200}}
                        >
                            <Image src={logo1} alt='logo' height={180} width={180}/>
                        </Avatar>
                        <Box sx={{m: '2rem'}}>
                            <Typography variant="h3" align='center'>{homeData.name}</Typography>
                            <Typography variant="h4" align='center'>{homeData.banglaName}
                            </Typography>
                        </Box>

                    </Grid>
                    {/*</Box>*/}

                </Box>
                <Toolbar
                    style={{display: "flex", justifyContent: `${matches ? "center" : "end"}`}}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{color: '#fff'}}>
                                <Link href={item.link}><a style={{color: '#fff'}}>{item.name}</a></Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: {xs: 'block', sm: 'none'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box sx={{background: "white"}}>
                    <Marquee speed={40}>
                        <AcUnitIcon/> <Link href="/"><a style={{color: 'red', margin: "0 1rem"}}> Help</a></Link>
                        <AcUnitIcon/>
                        <AcUnitIcon/> <Link href="/"><a style={{color: 'red', margin: "0 1rem"}}> Help</a></Link>
                        <AcUnitIcon/>
                        <AcUnitIcon/> <Link href="/"><a style={{color: 'red', margin: "0 1rem"}}> Help</a></Link>
                        <AcUnitIcon/>
                    </Marquee>
                </Box>

            </AppBar>
        </header>)
}
Header.propTypes = {
    /**s
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default Header;
