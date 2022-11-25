import Header from '../Header'
import Footer from '../Footer'
import styles from "../../styles/Home.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";


const Layout = ({ children }) =>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
      <>
          <div className={matches?styles.container:""}>
          <Header />
          <main>
              {children}
          </main>
          <Footer />
          </div>

      </>
  )

}
export default Layout;