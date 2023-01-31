import { NavLink, useLocation } from 'react-router-dom';

const NavLinks = ({ classLinkActive }) => {

    const route = useLocation();
    const currentPath = route.pathname;

    const links = [
        {
            name: "Today's tasks",
            path: "/today"
        },
        {
            name: "All Task",
            path: "/"
        },
        {
            name: "Important tasks",
            path: "/important"
        },
        {
            name: "Completed tasks",
            path: "/completed"
        },
        {
            name: "Uncompleted tasks",
            path: "/uncompleted"
        },
    ];

    return(
        <ul className="mt-10 grid gap-2">
            {links.map( (link) => (
                <li className="list-none" key={link.path}>
                    <NavLink
                        to={link.path}
                        className={`px-10 py-2 w-full transition block hover:text-red-600
                        ${ currentPath === link.path ? classLinkActive : ''}`}
                        >
                            {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default NavLinks;