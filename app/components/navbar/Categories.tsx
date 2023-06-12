'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Programming',
    icon: TbBeach,
    description: 'This property is programming!',
  },
  {
    label: 'Math',
    icon: GiWindmill,
    description: 'This property is has Math!',
  },
  {
    label: 'Languages',
    icon: MdOutlineVilla,
    description: 'This property is Langs!'
  },
  {
    label: 'Art',
    icon: TbMountain,
    description: 'This property is art!'
  },
  {
    label: 'Music',
    icon: TbPool,
    description: 'This is property has a beautful song!'
  },
  {
    label: 'Sports',
    icon: GiIsland,
    description: 'This property is on sports!'
  },
  {
    label: 'Skill/Trade',
    icon: GiBoatFishing,
    description: 'This property is near a skill!'
  },
  {
    label: 'Travel',
    icon: FaSkiing,
    description: 'This property has Travel!'
  },
  {
    label: 'Writing',
    icon: GiCastle,
    description: 'This property is an ancient castle!'
  },
  {
    label: 'Resume',
    icon: GiCaveEntrance,
    description: 'This property is resume workshops!'
  },
  {
    label: 'Interviews',
    icon: GiForestCamp,
    description: 'This property offers activities!'
  },
  {
    label: 'WebDev',
    icon: BsSnow,
    description: 'This property is in arctic environment!'
  },
  {
    label: 'Courses',
    icon: GiCactus,
    description: 'This property is in the desert!'
  },
  {
    label: 'Personal',
    icon: GiBarn,
    description: 'This property is in a barn!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

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
}
 
export default Categories;