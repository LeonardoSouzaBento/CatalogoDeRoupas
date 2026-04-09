import { useHomeContext } from "@/contexts/index";
import type { BooleanSetter } from "@/types/types";
import { EditSectionButton } from "./edit-section-button";

interface HomeTitleSubtitleProps {
  title: string;
  subtitle?: string;
  section?: string;
  editMode?: boolean;
  setEditMode?: BooleanSetter;
}

export const SectionHeader = ({
  title,
  subtitle,
  section,
  editMode,
  setEditMode = () => {},
}: HomeTitleSubtitleProps) => {
  const { homeEditMode } = useHomeContext();
  const mb = section === "clothes" ? "mb-3" : "mb-6 mt-1.5";
  const alignItems = homeEditMode
    ? "items-center"
    : "items-start sm:items-center";
  // const textAlign = homeEditMode ? "text-left sm:text-center" : "text-left sm:text-center";
  const flexDirection = homeEditMode ? "flex-col" : "flex-row";
  const editModeWrapper =
    homeEditMode &&
    `flex ${flexDirection} 
  justify-between gap-3 items-center`;

  return (
    <div>
      <div
        className={`w-full ${section == "clothes" && "px-4"} 
        flex justify-start sm:justify-center items-center gap-3 ${mb}`}
      >
        <div className={`${homeEditMode && editModeWrapper}`}>
          <div className={`flex flex-col ${alignItems} text-left sm:text-center`}>
            <h3
              className={`w-full capitalize text-theme-700`}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className={`w-full font-normal
                text-muted-foreground`}
              >
                {subtitle}
              </p>
            )}
          </div>
          {homeEditMode && (
            <EditSectionButton
              editMode={editMode}
              setEditMode={setEditMode}
              className="relative"
            />
          )}
        </div>
      </div>
    </div>
  );
};
