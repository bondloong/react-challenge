import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={() => handleSubmit}>
      <ContactPicker
        contacts={contacts}
        setContact={(e) => setContact(e.target.value)}
      />
      <input
        placeholder="Title input"
        value={title}
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Date input"
        value={date}
        min={getTodayString()}
        type="date"
        name="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        placeholder="Time input"
        value={time}
        type="time"
        name="time"
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add Appointment</button>
    </form>
  );
};
