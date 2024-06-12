import SideMenuList from "./sideMenu-list";
import {useState} from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";

export default function SideMenuItem({item}){

    const [displaycurrent, setDisplaycurrent] = useState({});

    function handleTogleChildren(getCurrentLabel){
        setDisplaycurrent({
            ...displaycurrent, 
            [getCurrentLabel] : !displaycurrent[getCurrentLabel]
        });
    }; 
     
    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length 
                    ? <span onClick={() => handleTogleChildren(item.label)}>
                        {
                            displaycurrent[item.label] 
                            ? <FaMinus color="white" size={25}/> 
                            : <FaPlus color="white" size={25}/>
                        }
                    </span>
                    : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displaycurrent[item.label]
                ? <SideMenuList list={item.children} />
                : null
            }
        </li>
    );
};