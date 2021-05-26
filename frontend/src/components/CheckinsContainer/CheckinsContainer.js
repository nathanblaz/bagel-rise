// Import hooks from 'react'. Which hook is meant for causing side effects?
// Import hooks from 'react-redux'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCheckinsAll } from '../../store/checkins';
import styles from './CheckinsContainer.module.css';

import CheckinRow from '../CheckinRow';

const CheckinsContainer = () => {
// Declare variables from hooks
const dispatch = useDispatch();
const checkins = useSelector((state) => Object.values(state.checkins));
console.log('Checkins be here:', checkins);

  // Use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(getCheckinsAll());
  }, [dispatch]);

  return (
    
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {/* <tr>
            <th>Avatar</th>
            <th>Review</th>
            <th>Rating</th>
          </tr> */}
        </thead>
        <tbody className={styles.tbody}>
          {checkins.map((checkin) => <CheckinRow key={checkin.id} checkin={checkin} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CheckinsContainer;
