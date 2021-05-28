import { Link, useLocation } from "react-router-dom";
import styles from "./BagelShopsRow.module.css";

const BagelShopRow = ({ bagelShop }) => {
  const queryString = new URLSearchParams(useLocation().search).get("q") ?? "";
  console.log(bagelShop);
  if (
    !(
      bagelShop.name.includes(queryString) ||
      bagelShop.address.includes(queryString) ||
      bagelShop.city.includes(queryString) ||
      bagelShop.state.includes(queryString) ||
      bagelShop.zipcode.includes(queryString) ||
      bagelShop.phone.includes(queryString) ||
      bagelShop.information.includes(queryString)
    )
  ) {
    return null;
  }

  return (
    <tr>
      <td>
        {bagelShop.name}
      </td>
      <td>
        {bagelShop.city}
      </td>
      <td>
        <div>
        {bagelShop.state}
        </div>
      </td>
    </tr>
  );
};

export default BagelShopRow;
