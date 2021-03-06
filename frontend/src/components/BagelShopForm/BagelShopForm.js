import React, { useState } from "react";
import * as bagelShopsActions from "../../store/bagelshops";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./BagelShopForm.module.css";
import { NavLink } from "react-router-dom";

const BagelShopForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [information, setInformation] = useState("");
  const [errors, setErrors] = useState([]);

  //   if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      bagelShopsActions.addBagelShop({
        name,
        address,
        city,
        state,
        zipcode,
        phone,
        information,
      })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Add a Bagel Shop</h2>
        {/* <p className={styles.subtitle}>
          Don't have an account? <NavLink to="/signup">Sign up</NavLink>
        </p> */}
        <ul className={styles.errors}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className={styles.bagelShopFormInputContainer}>
          <label>Shop Name (required)</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>City (required)</label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>State (required)</label>
          <select
            name="state"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AS">American Samoa</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="MP">Northern Mariana Is</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="VI">Virgin Islands</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <label>Zipcode</label>
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Information</label>
          <input type="text" value={information} onChange={(e) => setInformation(e.target.value)}/>
          <button id={styles.confirmBtn} type="submit">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default BagelShopForm;
