import { useState } from "react";
import style from "./ContactDropdown.module.css";

export const ContactDropdown = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectValue, setSelectValue] = useState("Select");

  const optionList = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];

  return (
    <div className={style.selectContainer}>
      <label htmlFor="areaAttivita" className={style.selectLabel}>
        In quale area intendi aprire l&apos;attività
      </label>
      <div
        id="areaAttivita"
        className={`${style.contactSelect} ${
          isOpenSelect ? style.removeBottomBorder + " " + style.rotateArrow : ""
        }`}
        onClick={() => setIsOpenSelect(!isOpenSelect)}
      >
        {selectValue}
      </div>
      {isOpenSelect && optionList.length > 0 && (
        <ul className={style.selectDropdown}>
          {optionList.map((option, index) => (
            <li
              key={index}
              className={style.dropdownItem}
              onClick={() => {
                setSelectValue(option);
                setIsOpenSelect(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
