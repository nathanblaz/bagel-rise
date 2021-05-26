import { useLocation } from 'react-router-dom';

const CheckinRow = ({ checkin }) => {
  const queryString = new URLSearchParams(useLocation().search).get('q') ?? '';
  console.log(checkin)
  if (!(checkin.review.includes(queryString) || checkin.rating.includes(queryString) || String(checkin.id).includes(queryString))) {
    return null;
  }

  return (
    <tr>
      <td>{checkin.id}</td>
      <td>{checkin.review}</td>
      <td>{checkin.rating}</td>
    </tr>
  );
};

export default CheckinRow;
