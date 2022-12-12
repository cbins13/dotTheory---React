import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  const [guests, setGuests] = useState([
    {
      name: "Treasure",
      isConfirmed: false,
      isEditing: false,
    },
    {
      name: "Nic",
      isConfirmed: true,
      isEditing: false,
    },
    {
      name: "Matt K",
      isConfirmed: true,
      isEditing: false,
    },
  ]);

  const [isFiltered, setIsFiltered] = useState(false);

  const [pendingGuest, setPendingGuest] = useState("");

  const toggleGuestPropertyAt = (property, indexToChange) => {
    setGuests(
      guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      })
    );
  };

  const setNameAt = (name, indexToChange) => {
    setGuests(
      guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      })
    );
  };

  const toggleConfirmationAt = (index) => {
    toggleGuestPropertyAt("isConfirmed", index);
  };

  const removeGuestAt = (index) =>
    setGuests([...guests.slice(0, index), ...guests.slice(index + 1)]);

  const toggleEditingAt = (index) => {
    toggleGuestPropertyAt("isEditing", index);
  };

  const toggleFilter = () => setIsFiltered(!isFiltered);

  const handleNameInput = (e) => {
    return setPendingGuest(e.target.value);
  };

  const newGuestSubmitHandler = (e) => {
    e.preventDefault();
    setGuests([
      {
        name: pendingGuest,
        isConfirmed: false,
        isEditing: false,
      },
      ...guests,
    ]);
    setPendingGuest("");
  };

  const getTotalInvited = () => guests.length;
  const getAttendingGuests = () =>
    guests.reduce((total, guest) => (guest.isConfirmed ? total + 1 : total), 0);

  return (
    <div className="App">
      <Header newGuestSubmitHandler={newGuestSubmitHandler} handleNameInput={handleNameInput} pendingGuest={pendingGuest}/>
      <MainContent totalInvited={getTotalInvited()} numberAttending={getAttendingGuests()} numberUnconfirmed={getTotalInvited() - getAttendingGuests()} guests={guests}
      toggleConfirmationAt={toggleConfirmationAt}
      toggleEditingAt={toggleEditingAt}
      setNameAt={setNameAt}
      isFiltered={isFiltered}
      removeGuestAt={removeGuestAt}
      pendingGuest={pendingGuest} toggleFilter={toggleFilter}/>
    </div>
  );
}

export default App;
