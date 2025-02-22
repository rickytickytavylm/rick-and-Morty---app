import s from "./Input.module.css";

export const Input = ({onInput}) => {
  return (
    <>
      <input onInput={onInput} className={s.input} type="text" />
    </>
  );
};
