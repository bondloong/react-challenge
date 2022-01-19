import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name input"
        value={name}
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="888-888-888"
        value={phone}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        type="tel"
        name="name"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="Name input"
        value={email}
        type="text"
        name="name"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
