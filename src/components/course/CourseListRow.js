import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
    return(
        <tr>    
            <td><a href={course.watchHref} target="_blank"> Delete </a></td>
            <td><Link to={'/course/'+course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.university}</td>
            <td>{course.discipline}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;