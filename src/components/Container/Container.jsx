import s from "./Container.module.css";

export const Container = ({ children, className }) => {
  return (
  <div className={`${s.container} ${className}`}>
    {children}
    </div>

)
};
