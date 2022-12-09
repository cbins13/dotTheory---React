import React from "react";
import Guest from "./Guest";
import PropTypes from "prop-types";
const GuestList = ({ guests, toggleConfirmationAt, toggleEditingAt }) => {
  return (
    <ul>
      {guests.map((guest, index) => {
        return (
          <Guest
            key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={() => {
              toggleConfirmationAt(index);
            }}
            handleToggleEditing={()=>{
              toggleEditingAt(index);
            }}
          />
        );
      })}
    </ul>
  );
};

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
};

export default GuestList;
