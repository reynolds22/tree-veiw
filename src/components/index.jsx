import React from "react";
import SideMenuList from "./sideMenu-list";
import "./styles.css";

export default function TreeVeiw({sideMenu = []}){

    
    return (
        <div className="tree-veiw">
            <SideMenuList list={sideMenu}/>
        </div>
    );
};