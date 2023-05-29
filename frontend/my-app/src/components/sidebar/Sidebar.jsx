import styles from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, resetShop } from "./../../store/shopSlice";
import { fetchProducts } from "./../../store/productSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops.shops);
  const pro = useSelector((state) => state.products.products);
  console.log("pro", pro);
  const isChooseOtherShopDisabled = useSelector((state) => {
    return state.shops.isChooseOtherShopDisabled;
  });

  const handleShopSelect = (shopId) => {
    console.log("work");
    dispatch(selectShop(shopId));
    dispatch(fetchProducts(shopId));
  };

  const handleReset = () => {
    dispatch(resetShop());
  };

  return (
    <div className={styles.sidebar}>
      <h2>Shops:</h2>
      {/* {shops.map((shop) => (
        <button
          key={shop.shopId}
          onClick={() => handleShopSelect(shop.shopId)}
          className={`${shop[Object.keys(shop)[0]] ? styles.selectedShop : ""}`}
        >
          {shop.name}
        </button>
      ))} */}
      <div className={styles.shops}>
        {shops.map((shop) => (
          <button
            key={shop.shopId}
            onClick={() => handleShopSelect(shop.shopId)}
            className={`${styles.shops__item} ${
              shop.isActiveShop ? styles.selectedShop : ""
            }`}
            disabled={shop.disabled}
          >
            {shop.name}
          </button>
        ))}
      </div>

      <button
        onClick={handleReset}
        disabled={isChooseOtherShopDisabled}
      >
        Choose other shop
      </button>
    </div>
  );
};
export default Sidebar;
