/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { SubTitleDetailClass } from "../atoms/Text";
import AccordionMatery from "../moleculs/AccordionMatery";
import { ButtonExpand } from "../atoms/Button";

export default function MaterialsClass({ title, materials }) {
  let MaterialsElement;
  const [limitItem, setLimitItem] = useState(true);
  const [items, setItems] = useState([...materials]);

  useEffect(() => {
    if (limitItem) sliceItem();
  }, [limitItem]);

  function sliceItem() {
    const newItem = items.slice(0, 4);
    setItems(newItem);
  }

  function handleLimitItem() {
    setItems(materials);
    setLimitItem(!limitItem);
  }

  MaterialsElement = items.map((matery) => (
    <AccordionMatery
      title={matery.title}
      description={matery.description}
      key={matery.id}
    />
  ));

  return (
    <>
      <SubTitleDetailClass>{title}</SubTitleDetailClass>
      {MaterialsElement}
      {materials.length > 4 && (
        <ButtonExpand expand={limitItem} handleFunction={handleLimitItem} />
      )}
    </>
  );
}
