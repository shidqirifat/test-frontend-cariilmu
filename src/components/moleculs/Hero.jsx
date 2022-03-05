import React from "react";
import { TitleHero } from "../atoms/Text";
import { ButtonPrimary } from "../atoms/Button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#FED61D] to-[#FDB53D]">
      <div className="pt-48 pb-20 flex flex-col gap-4 justify-center mx-auto max-w-6xl">
        <TitleHero>
          Tingkatkan kemampuan personal kamu <br /> dengan Cariilmu.id
        </TitleHero>
        <ButtonPrimary>Eksplor Kelas</ButtonPrimary>
      </div>
    </div>
  );
}
