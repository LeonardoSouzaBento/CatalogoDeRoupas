"use client";
import { useHomeContext, useUserContext } from "@/contexts/index";
import { useEffect } from "react";
import {
  AboutSection,
  EverydaySection,
  FindUsSection,
  GymSection,
  MainCategories,
  SpecialSection,
  GenderSelector,
} from "./main/index";
import { Section } from "./ui";

const Main = () => {
  const {
    hasMainCategories,
    setHasMainCategories,
    hasGymClothes,
    setHasGymClothes,
  } = useHomeContext();
  const { childCatSelected } = useUserContext();

  /* verificaçã simples por enquanto */
  useEffect(() => {
    if (childCatSelected) {
      setHasGymClothes(false);
      setHasMainCategories(false);
    } else {
      setHasGymClothes(true);
      setHasMainCategories(true);
    }
  }, [childCatSelected, setHasMainCategories]);

  return (
    <main>
      <Section
        bgLinear={false}
        defaultShadow={false}
        className={`bg-light-bg px-0 pt-5.5 pb-6`}
      >
        <GenderSelector />
      </Section>

      <Section
        data-clothes
        defaultShadow={false}
        className="pt-4! shadow-first-home-section"
      >
        <SpecialSection />
      </Section>

      <Section data-clothes>
        <EverydaySection />
      </Section>

      {hasGymClothes && (
        <Section data-clothes>
          <GymSection />
        </Section>
      )}

      {hasMainCategories && (
        <Section
          defaultShadow={false}
          className="shadow-[inset_0_8px_16px_hsla(0,0%,100%,1.5)] pt-12.75 pr-0"
        >
          <MainCategories />
        </Section>
      )}

      <Section
        defaultShadow={false}
        className="bg-transparent shadow-[inset_0_6px_12px_hsla(0,0%,0%,0.016)] pb-10"
      >
        <FindUsSection />
      </Section>

      <Section
        bgLinear={false}
        defaultShadow={false}
        className={`bg-light-bg pt-7 pb-5.5`}
      >
        <AboutSection />
      </Section>
    </main>
  );
};

export { Main };
