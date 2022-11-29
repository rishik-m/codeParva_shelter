import React from "react";

function Index() {
  // create a contact us page
  // create a form with name, email, message
  // create a submit button
  // create a function to handle the submit button
  // create a function to handle the form data

  //store form data in local storage
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-[100vh] flex-col flex justify-center items-center">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="message">Message</label>
        <textarea name="message" onChange={(e) => handleChange} />
        <button className="bg-pink-300 rounded-xl py-4 px-7" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Index;
