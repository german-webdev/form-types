import { FC, useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  password: string;
}

export const ControlledForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data: FormData = {
      name: formData.name,
      password: formData.password,
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Name:</label>
      <input
        className="input"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        className="input"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};