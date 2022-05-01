import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import Styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div className={Styles.page}>
      <div className={Styles.orangeBar}></div>
      <header>
        <Navbar />
      </header>

      <main>{props.children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
