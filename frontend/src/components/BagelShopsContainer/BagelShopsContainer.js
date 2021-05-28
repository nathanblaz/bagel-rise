// Import hooks from 'react'. Which hook is meant for causing side effects?
// Import hooks from 'react-redux'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBagelShopsAll } from '../../store/bagelshops';
import styles from './BagelShopsContainer.module.css';

import BagelShopsRow from '../BagelShopsRow';

const BagelShopsContainer = () => {
// Declare variables from hooks
const dispatch = useDispatch();
const bagelShops = useSelector((state) => Object.values(state.bagelShops));
// console.log('BagelShops be here:', bagelShops);

  // Use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(getBagelShopsAll());
  }, [dispatch]);

  return (
    
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Shop</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
            <th>Information</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {bagelShops.map((bagelShop) => <BagelShopsRow key={bagelShop.id} bagelShop={bagelShop} />)}
        </tbody>
      </table>
    </div>
  );
};

export default BagelShopsContainer;
