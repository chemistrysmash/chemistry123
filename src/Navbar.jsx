import { Link,useMatch, useResolvedPath} from "react-router-dom"
import React, { useState, useEffect } from 'react';
export default function Navbar(){
    
    return <nav className='nav'>
        <ul>
            <h1>網路攻防實習</h1>
            <CustomLink to="/Attacking_and_defense_of_network_security/Chat">Chat</CustomLink>
            <CustomLink to="/Attacking_and_defense_of_network_security/about">About</CustomLink>
        </ul>
        <VisitorCounter />
        <ul>
            <a href="\">Login</a>
            <a href="\">Sign Up</a>
        </ul>
        
    </nav>
}

function CustomLink({ to, children,...props}){
    const resolvedPath=useResolvedPath(to)
    const inActive =useMatch({path: resolvedPath.pathname,end:true})
    return(
        <li className={inActive?"active":""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    ) 
}

function VisitorCounter() {
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        // Retrieve visitor count from local storage
        const storedVisitors = localStorage.getItem('visitorCount');
        if (storedVisitors) {
            setVisitors(parseInt(storedVisitors));
        }
        // Increment visitor count when component mounts
        setVisitors(prevCount => prevCount + 1);
    }, []);

    useEffect(() => {
        // Update local storage with the new visitor count
        localStorage.setItem('visitorCount', visitors.toString());
    }, [visitors]);

    return (
            <h1>Total Visitors: {visitors}</h1>
    );
}