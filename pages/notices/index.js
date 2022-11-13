import ShowPdf from "../../components/ShowPdf";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const notices = () => {
    return (
        <div className={styles.container}>
            <Header/>
        <ShowPdf />
        <Footer />
        </div>

    )
}
export default notices;