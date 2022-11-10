// import {Box, Container, Grid, useMediaQuery, useTheme} from "@mui/material";
// import {useFooterStyles} from "./style";
// import logo1 from '../../public/images/logo1.jpg';
// const Footer = () => {
//     const classes = useFooterStyles();
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.down('sm'))
//     return (
//         <footer className={classes.footerContainer}>
//                 <Container>
//                     <Box display='flex'
//                     justifyContent='space-between'
//                     alignItems="center"
//                     flexWrap="wrap"
//                     paddingY={5}>
//                         <Box order = {matches ? 1:1 }
//                              style={{display:'flex',
//                              flexDirection : matches ? 'row': 'column',
//                                  justifyContent : 'center',
//                                  margin : matches? '0 auto' : ""
//                         }}
//                         >
//                             <img
//                                 src={logo1}
//                                 alt = "logo"/>
//                         </Box>
//
//                     </Box>
//                 </Container>
//         </footer>
//     )
// }
// export default Footer;


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Register
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        Material UI Workshop &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}