"use client";

import Link from "next/link";
import React from "react";
import { SlSocialTwitter } from "react-icons/sl";
import common from "@/public/constants/common.json";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
} from "@heroicons/react/outline";

const iconMapping = {
  explore: HashtagIcon,
  home: HomeIcon,
  messages: InboxIcon,
  notifications: BellIcon,
  profile: UserIcon,
  settings: ClipboardListIcon,
};

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="sidebar-wrapper">
      <Button
        className="sidebar-wrapper__button-logo"
        onClick={() => router.push("/")}
        startContent={
          <SlSocialTwitter className="icon-logo" />
        }
      ></Button>
      
      <div className="sidebar-tab-wrapper">
        {common.sidebarTabs.map((tab, key) => {
          const IconComponent = iconMapping[tab.icon];
          return (
            <Button
              key={key}
              className="sidebar-tab-wrapper__button"
              onClick={() => router.push(tab.path)}
              startContent={
                <IconComponent
                  style={{ height: "40px", width: "40px", color: "white" }}
                />
              }
            >
              <div className="sidebar-tab-wrapper__button__title">
                {tab.title}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <ul>
  {common.sidebarTabs.map((val, key) => {
    return (
      <li key={key}>
        <Link href={val.path}>
          <div className="sidebar-tab-content">
          <UserIcon style={{ height: '40px', width: '40px', color: 'white' }} />

            {val.title}
          </div>
        </Link>
      </li>
    );
  })}
</ul> */
}
