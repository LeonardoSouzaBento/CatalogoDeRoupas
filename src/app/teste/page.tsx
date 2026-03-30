import React from "react";
import { ButtonTester } from "@/components/ui/button-tester";
import { Icon } from "@/components/ui";
import { IconPhone } from "@tabler/icons-react";

const Page = () => {
  return (
    <div>
      <ButtonTester />
      <Icon Svg={IconPhone} filledIcon size="2xl" />
    </div>
  );
};

export default Page;
