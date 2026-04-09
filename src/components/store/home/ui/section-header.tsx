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
    ? "items-start sm:items-center"
    : "items-start sm:items-center";
  const editModeWrapper =
    homeEditMode &&
    `mx-auto flex flex-row gap-4 flex-wrap justify-between items-center 
    sm:flex-col sm:items-center`;

  return (
    <div>
      <div
        className={`w-full ${section == "clothes" && "px-4"} 
        flex items-center gap-3 ${mb}`}
      >
        <div className={`sm:mx-auto ${homeEditMode && editModeWrapper}`}>
          <div
            className={`flex flex-col ${alignItems} text-left sm:text-center`}
          >
            <h3 className={`w-full capitalize text-theme-700`}>{title}</h3>
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
