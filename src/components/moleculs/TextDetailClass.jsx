/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { convertToHours, convertToMoney } from "../../utils/calculate-helper";
import { ButtonExpand } from "../atoms/Button";
import {
  ContentDetailClass,
  ExtraInfoDetailClass,
  InstructorDetailClass,
  NameDetailClass,
  PriceDetailClass,
  SubTitleDetailClass,
} from "../atoms/Text";

export function ContentHero({
  className,
  price,
  instructorName,
  instructorId,
  duration,
  category,
  level,
  method,
}) {
  return (
    <div className="z-10 pt-4 md:pt-8">
      <NameDetailClass>{className}</NameDetailClass>
      <PriceDetailClass>{convertToMoney(price)}</PriceDetailClass>
      <InstructorDetailClass
        link={`/instructor/${instructorId}`}
        name={instructorName}
      >
        Instruktor:{" "}
      </InstructorDetailClass>
      <ExtraInfoDetailClass>{convertToHours(duration)}</ExtraInfoDetailClass>
      <ExtraInfoDetailClass>{category}</ExtraInfoDetailClass>
      <ExtraInfoDetailClass>{level}</ExtraInfoDetailClass>
      <ExtraInfoDetailClass>{method}</ExtraInfoDetailClass>
    </div>
  );
}

export function ContentDetail({
  title,
  detail,
  section,
  type = "paragraph",
  mark = "•",
}) {
  let listElement;
  const [limitItem, setLimitItem] = useState(true);
  const [items, setItems] = useState([...detail]);

  useEffect(() => {
    if (limitItem) sliceItem();
  }, [limitItem]);

  function sliceItem() {
    if (type === "list") {
      const newItem = items.slice(0, 4);
      setItems(newItem);
    }
  }

  function handleLimitItem() {
    setItems(detail);
    setLimitItem(!limitItem);
  }

  if (type === "list") {
    listElement = items.map((item) => (
      <ContentDetailClass
        key={item.id}
        type={type}
        mark={mark}
        section={section}
      >
        {item.description}
      </ContentDetailClass>
    ));
  }

  return (
    <div>
      <SubTitleDetailClass>{title}</SubTitleDetailClass>
      {type === "list" ? (
        <>
          <ul
            className={`${
              section === "goals"
                ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                : ""
            } transition`}
          >
            {listElement}
          </ul>
          <ButtonExpand expand={limitItem} handleFunction={handleLimitItem} />
        </>
      ) : (
        <ContentDetailClass type={type}>{detail}</ContentDetailClass>
      )}
    </div>
  );
}
