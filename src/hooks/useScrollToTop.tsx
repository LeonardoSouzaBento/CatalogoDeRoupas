import { useEffect } from "react";

export const useScrollToTop = ({
  cardRef,
}: {
  cardRef: React.RefObject<HTMLDivElement>;
}) => {
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cardRef]);
};
