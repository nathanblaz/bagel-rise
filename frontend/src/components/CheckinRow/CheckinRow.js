import { Link, useLocation } from "react-router-dom";
import styles from "./CheckinRow.module.css";

const CheckinRow = ({ checkin }) => {
  const queryString = new URLSearchParams(useLocation().search).get("q") ?? "";
  console.log(checkin);
  if (
    !(
      checkin.review.includes(queryString) ||
      checkin.rating.includes(queryString) ||
      String(checkin.User.avatar).includes(queryString)
    )
  ) {
    return null;
  }

  return (
    <tr>
      <td className={styles.avatarTd}>
        <img className={styles.avatar} src={checkin.User.avatar}></img>
      </td>
      <td>
        <div className={styles.checkinDiv}>
          <Link>{checkin.User.username}</Link> is eating a <Link>{checkin.BagelList.Bagel.bagelType}</Link> bagel by <Link>{checkin.BagelList.BagelShop.name}</Link>, in {checkin.BagelList.BagelShop.city}, {checkin.BagelList.BagelShop.state}.
        </div>
        <div className={styles.reviewDiv}>
        {checkin.review}
        </div>
        <div className={styles.photoDiv}>
          <img className={styles.photo} src={checkin.image} ></img>
          <br></br>
        </div>
      </td>
      <td className={styles.ratingTd}>
        <div className={styles.ratingDiv}>
        {checkin.rating}/5
        </div>
      </td>
    </tr>
  );
};

export default CheckinRow;
