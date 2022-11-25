import React, {useState, useEffect} from 'react';
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
import {useRouter} from "next/router";

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact', 'Help', 'Notice', 'Governing-body', 'Teacher', 'Student'];

const navItems = [
    {id: 1, name: "হোম", link: "/"},
    // {id: 2, name: "About", link: "about-us"},
    {id: 2, name: "ইতিহাস", link: "history"},
    // {id: 3, name: "Contact", link: "contact"},
    {id: 4, name: "সভাপতির বাণী", link: "principal-lecture"},
    {id: 9, name: "প্রতিষ্ঠান প্রধানের বাণী", link: "president-talk"},
    {id: 5, name: "নোটিশ", link: "all-notices"},
    {id: 6, name: "ম্যানেজিং কমিটি", link: "governing-body"},
    {id: 7, name: "শিক্ষক", link: "teachers"},
    {id: 8, name: "শিক্ষার্থী", link: "students"},
]
const homeData = {
    name: "Abu Taher Dakhil Madrasah",
    banglaName: "আবু তাহের দাখেলিয়া মাদ্রাসা",
    email: "m110874ict@gmail.com",
    phone: "01309110874",
    slogan: "শিক্ষা নিয়ে গড়ব দেশ শেখ হাসিনার বাংলাদেশ"
}
const Header = (props) => {
    const router = useRouter()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [notices, setNotices] = useState([]);
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
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText>
                                <Link href={"/"+item.link}>
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
    useEffect(() => {
        fetch('/api/all-notices')
            .then((res) => res.json())
            .then((data) => {
                    setNotices(data);
            })
    }, [])
    useEffect(() => {
        const handleRouteChange = (url) => {
            setMobileOpen(false);
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])
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
                            <Button key={item.id} sx={{color: '#fff'}}>
                                <Link href={"/"+item.link}><a style={{color: '#fff'}}>{item.name}</a></Link>
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
                        {/*{*/}
                        {/*    Object.keys(notices)?.map((key,index)=>(*/}
                        {/*        <Link key={notices[key].id} href={notices[key].slug}><a style={{color: 'red', margin: "0 1rem"}}> {notices[key].title}</a></Link>*/}
                        {/*    ))*/}
                        {/*}*/}
                        {
                            notices?.map(notice=>(
                                        <Link key={notice.id} href={'notice/'+notice.slug}><a style={{color: 'red', margin: "0 1rem"}}> {notice.title}</a></Link>
                            ))
                        }

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
