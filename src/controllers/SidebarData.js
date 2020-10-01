import React from 'react';
//import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';
//import * as BiIcons from 'react-icons/bi';


export const SidebarData = [
  {
    title: 'Main Menu',
    path: '/main',
    icon: <SiIcons.SiRedhat />,
    cName: 'nav-text'
  },
  {
    title: 'Tutorial',
    path: '/tutorial',
    icon: <RiIcons.RiFolderOpenLine />,
    cName: 'nav-text'
  },
  {
    title: 'Case File One',
    path: '/case-one',
    icon: <RiIcons.RiBriefcase3Line />,
    cName: 'nav-text'
  },
  {
    title: 'Case File Two',
    path: '/case-two',
    icon: <RiIcons.RiBriefcase3Line />,
    cName: 'nav-text'
  },
  {
    title: 'Case File Three',
    path: '/case-three',
    icon: <RiIcons.RiBriefcase3Line />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Hint',
  //   path: '/',
  //   icon: <AiIcons.AiOutlineQuestion />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'About',
  //   path: '/about',
  //   icon: <BiIcons.BiGlasses />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Logout',
    path: '/',
    icon: <RiIcons.RiLogoutBoxFill />,
    cName: 'nav-text'
  }
]