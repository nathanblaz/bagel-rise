import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBagelShop } from "../../store/bagelshops";

// import styles from "./DeleteBagelShop.module.css";

const DeleteBagelShop = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log ('id is', id);
    console.log ('id type is', typeof id);

    const handleSubmit = async (e) => {
        console.log('here I am in the handleSubmit');
        e.preventDefault();
        await dispatch(deleteBagelShop(id));
        console.log('Deleted event!');
        history.push('/');
    }

    return (
        <div>
            Are you sure you want to delete?

            <button onClick={handleSubmit}>Confirm</button>
        </div>
    )
}

export default DeleteBagelShop;
