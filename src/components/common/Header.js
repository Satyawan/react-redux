import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return(
        <nav>
            <IndexLink to="/" activeClassName="active"> Home </IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active"> Courses </Link>
            {" | "}
            <Link to="/deletedcourses" activeClassName="active"> Deleted Courses </Link>
           
        </nav>
    );
};

export default Header;