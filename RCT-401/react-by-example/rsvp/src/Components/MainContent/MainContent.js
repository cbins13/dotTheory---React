import React from "react";
import ConfirmedFilter from "./ConfirmedFilter";
import Counter from "./Counter";
import GuestList from "./GuestList/GuestList";
import PropTypes from 'prop-types';

const MainContent = ({totalInvited, numberAttending, numberUnconfirmed, guests, toggleConfirmationAt, toggleEditingAt, setNameAt, isFiltered, removeGuestAt, pendingGuest, toggleFilter}) => (
  <div className="main">
    <div>
      <h2>Invitees</h2>
      <ConfirmedFilter toggleFilter={toggleFilter} isFiltered={isFiltered}/>
    </div>
    <Counter
      totalInvited={totalInvited}
      numberAttending={numberAttending}
      numberUnconfirmed={numberUnconfirmed}
    />
    <GuestList
      guests={guests}
      toggleConfirmationAt={toggleConfirmationAt}
      toggleEditingAt={toggleEditingAt}
      setNameAt={setNameAt}
      isFiltered={isFiltered}
      removeGuestAt={removeGuestAt}
      pendingGuest={pendingGuest}
    />
  </div>
);


MainContent.propTypes = {
  totalInvited: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired
}


export default MainContent;
