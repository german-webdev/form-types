import { useRef, FC } from "react";

interface FormData {
  name: string;
  password: string;
}

export const UncontrolledForm: FC = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      />

      <label htmlFor="password">Password:</label>
      <input
        className="input"
        name="password"
        type="password"
        ref={passwordInput}
      />

      <button type="submit" className="button">Submit</button>
    </form>
  );
};

