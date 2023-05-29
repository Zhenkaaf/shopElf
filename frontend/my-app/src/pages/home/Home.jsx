import Products from "../../components/products/Products";
import Menu from "../../components/menu/Menu";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      {/* <Menu /> */}
      <div className={styles.main}>
        <Sidebar />
        <Products />
      </div>
    </div>
  );
};
export default Home;
