import { FC, useRef, useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  password: string;
}

export const ControlledForm: FC = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

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
      name: nameInput.current?.value || "",
      password: passwordInput.current?.value || "",
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
        ref={nameInput}
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        className="input"
        name="password"
        type="password"
        ref={passwordInput}
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit" className="button">Submit</button>
    </form>
  );
};