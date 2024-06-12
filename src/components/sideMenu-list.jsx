import SideMenuItem from "./sideMenu-item";

export default function SideMenuList({ list = [] }){

    return (
        <ul className="side-menu-list">
            {
                list && list.length 
                ? list.map((listItem) => <SideMenuItem item={listItem} />)
                : null
            }
        </ul>
    );
};