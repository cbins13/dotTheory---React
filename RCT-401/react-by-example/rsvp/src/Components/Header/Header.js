import React from "react";
import GuestInputForm from "./GuestInputForm";
import PropTypes from 'prop-types';

const Header = ({newGuestSubmitHandler, handleNameInput, pendingGuest}) => (
<header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm newGuestSubmitHandler={newGuestSubmitHandler} handleNameInput={handleNameInput} pendingGuest={pendingGuest}/>
</header>
);

Header.propTypes = {
        newGuestSubmitHandler: PropTypes.func.isRequired,
        handleNameInput: PropTypes.func.isRequired,
        pendingGuest: PropTypes.string.isRequired
} 

export default Header;