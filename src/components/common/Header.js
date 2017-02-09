import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Loading from './Loading';

const Header = ({loading}) => {
    
    return(
        <nav>
            <IndexLink to="/" activeClassName="active"> Home </IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active"> Courses </Link>
            {" | "}
            <Link to="/deletedcourses" activeClassName="active"> Deleted Courses </Link>
            {loading && <Loading interval={100} dots={20} />}
           
        </nav>
    );
};

Header.propTypes ={
    loading: PropTypes.bool.isRequired
};

export default Header;