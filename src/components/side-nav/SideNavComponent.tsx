import React from "react";
import classes from "./SideNavComponent.module.scss";
import { NavLink } from "react-router-dom";

interface MenuType {
  moduleName: string;
  modulepath: string;
  accessRole: string[];
  iconName: string;
}

interface SideNavProps {
  menuItems: MenuType[];
}

const SideNavComponent = ({ menuItems }: SideNavProps) => {
  return (
    <>
      <div className="sideNav h-full w-full bg-cyan-300">
        <div className="logo-section h-14 bg-cyan-500 flex items-center justify-center cursor-pointer hover:bg-cyan-500 duration-600">
          <h3 className="text-lg font-medium">React App</h3>
        </div>
        <div className={classes["sidenavmenu-content"]}>
          {menuItems.map((menu: MenuType, index: number) => (
            <NavLink
              to={menu.modulepath}
              key={index}
              className={({ isActive }) =>
                `${
                  isActive ? classes["active-menu"] + " bg-cyan-400" + " " : ""
                }${
                  classes["nav-item"]
                } menu-item h-10 cursor-pointer flex justify-start items-center px-3 py-2 relative hover:bg-cyan-400`
              }
            >
              <span className="material-symbols-rounded">{menu.iconName}</span>
              <h6 className="text-sm my-0 mx-2 font-normal">
                {menu.moduleName}
              </h6>
              <span className={classes['module-arrow']+" material-symbols-rounded text-sm absolute"}>
                arrow_forward_ios
              </span>
            </NavLink>
          ))}
        </div>
        <div className="logout-section h-12 bg-cyan-400 flex items-center justify-center cursor-pointer hover:bg-cyan-400 duration-500">
          <h4 className="text-md m-0">Logout</h4>
        </div>
      </div>
    </>
  );
};

export default SideNavComponent;
