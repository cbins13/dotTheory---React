import React from "react";
import Guest from "./Guest/Guest";
import PendingGuest from "./PendingGuest";
import PropTypes from "prop-types";
const GuestList = ({ guests, toggleConfirmationAt, toggleEditingAt,setNameAt, isFiltered, removeGuestAt, pendingGuest }) => {
  return (
    <ul>
      <PendingGuest name={pendingGuest}/>
      {guests
      .map((guest, index) => {
        if(!isFiltered || guest.isConfirmed){
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
            }
            }
            setName={text=> setNameAt(text,index)}
            handleRemove={()=>removeGuestAt(index)}
          />
        );  
        }
        return false;
      })}
    </ul>
  );
};

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired
};

export default GuestList;
