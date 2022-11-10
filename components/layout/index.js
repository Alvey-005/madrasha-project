import Header from '../Header/NavBar'
import Footer from '../Footer'

const Layout = () =>{
  return (
      <>
          <Header />
          <main>
              {children}
          </main>
          <Footer />
      </>
  )

}
export default Layout;