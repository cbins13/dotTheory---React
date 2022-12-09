import React, { useState } from "react";
import "./App.css";
import GuestList from "./Components/GuestList";

function App() {
  const [guests, setGuests] = useState([
    {
      name: "Treasure",
      isConfirmed: false,
      isEditing: false
    },
    {
      name: "Nic",
      isConfirmed: true,
      isEditing: false
    },
    {
      name: "Matt K",
      isConfirmed: true,
      isEditing: true
    }
  ]);

  const toggleGuestPropertyAt = (property, indexToChange) => {
    setGuests(
      guests.map((guest,index)=>{
        if(index===indexToChange){
          return(
            {
              ...guest,
              [property]: !guest[property]
            }
          )
        }
        return guest;
      })
    )
  }

  const toggleConfirmationAt = (index) => {
    toggleGuestPropertyAt("isConfirmed", index);
  }

  const toggleEditingAt = (index) => {
    toggleGuestPropertyAt("isEditing", index);
  }

  const getTotalInvited = () => (
    guests.length
  );
    //getAttendingGuests = () => 
    //getUnconfirmedGuests = () =>

  return (
    <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
          <input type="text" value="Safia" placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit">
            Submit
          </button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" /> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <GuestList guests={guests} toggleConfirmationAt={toggleConfirmationAt}
          toggleEditingAt={toggleEditingAt}
        />
      </div>
    </div>
  );
}

export default App;
