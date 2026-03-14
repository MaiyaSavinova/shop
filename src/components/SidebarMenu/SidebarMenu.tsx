import React from "react"

type MenuItem = {
    label: string;
    path: string;
};

const SidebarMenu: React.FC<{ menuTtem: MenuItem[] }> = ({menuTtem}) => {
    return(
<nav className="sidebar-menu">
    <ul>
        {menuTtem.map((item, index) => (
        <li key={index}>
            <a href={item.path}>{item.label}</a>
        </li>   
    ))}
    </ul>

</nav>
    );
};

export default SidebarMenu;

