import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1> Adminstrator </h1>
                <p> Manage Courses and Contents </p>
                <Link to="courses" className="btn btn-primary btn-lg">Find Course </Link>
                <Link to="deletedcourses" className="btn btn-primary btn-lg">Deleted Courses </Link>
            </div>
        );
    }
}

export default HomePage;