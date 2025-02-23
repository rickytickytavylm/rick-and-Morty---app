import React from "react";
import s from "./Selects.module.css";
export const Selects = ({ data, onChange }) => {
  return (
    <div className={s.selects}>
      {data.map((select, index) => (
        <div key={index}>
          <select className={s.select} onChange={(e) => onChange(select.label, e.target.value)}>
            <option value="" disabled selected hidden>
              {select.label}
            </option>
            {select.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
