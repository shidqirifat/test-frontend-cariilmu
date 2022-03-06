import React, { useState } from "react";
import { DescriptionMatery, TitleMatery } from "../atoms/Text";

export default function AccordionMatery({ description, title }) {
  const [hiddenDescription, setHiddenDescription] = useState(true);

  function handleHidden() {
    setHiddenDescription(!hiddenDescription);
  }

  return (
    <div className="h-max overflow-hidden border border-slate-400">
      <TitleMatery handleFunction={handleHidden} hidden={hiddenDescription}>
        {title}
      </TitleMatery>
      <DescriptionMatery hidden={hiddenDescription}>
        {description}
      </DescriptionMatery>
    </div>
  );
}
