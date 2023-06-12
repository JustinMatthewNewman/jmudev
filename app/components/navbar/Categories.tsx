"use client";

import { usePathname, useSearchParams } from "next/navigation";

import {
  HiCode,
  HiChartPie,
  HiTranslate,
  HiPhotograph,
  HiMusicNote,
  HiUserGroup,
  HiTruck,
  HiPaperAirplane,
  HiPencil,
  HiInboxIn,
  HiPhoneIncoming,
  HiTemplate,
  HiAcademicCap,
  HiEyeOff,
  HiPresentationChartLine,
} from "react-icons/hi";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Programming",
    icon: HiCode,
    description: "This property is programming!",
  },
  {
    label: "Math",
    icon: HiChartPie,
    description: "This property is has Math!",
  },
  {
    label: "Languages",
    icon: HiTranslate,
    description: "This property is Langs!",
  },
  {
    label: "Art",
    icon: HiPhotograph,
    description: "This property is art!",
  },
  {
    label: "Music",
    icon: HiMusicNote,
    description: "This is property has a beautful song!",
  },
  {
    label: "Sports",
    icon: HiUserGroup,
    description: "This property is on sports!",
  },
  {
    label: "Skill/Trade",
    icon: HiTruck,
    description: "This property is near a skill!",
  },
  {
    label: "Travel",
    icon: HiPaperAirplane,
    description: "This property has Travel!",
  },
  {
    label: "Writing",
    icon: HiPencil,
    description: "This property is an ancient castle!",
  },
  {
    label: "Resume",
    icon: HiInboxIn,
    description: "This property is resume workshops!",
  },
  {
    label: "Interviews",
    icon: HiPhoneIncoming,
    description: "This property offers activities!",
  },
  {
    label: "WebDev",
    icon: HiTemplate,
    description: "This property is in arctic environment!",
  },
  {
    label: "Courses",
    icon: HiAcademicCap,
    description: "This property is in the school!",
  },
  {
    label: "Personal",
    icon: HiEyeOff,
    description: "This property is personal!",
  },
  {
    label: "Speaking",
    icon: HiPresentationChartLine,
    description: "This property is brand new and public speaking!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
