import s from "./Input.module.css";

export const Input = ({onInput,placeholder}) => {
  return (
    <>
      <input placeholder={placeholder} onInput={onInput} className={s.input} type="text" />
    </>
  );
};
