import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class DeletedCoursePage extends React.Component{
    
    render(){
        const {courses} = this.props;
        return(
            <div>
                <h1>Deleted Courses </h1>
                <div className="alert alert-danger">
                    <strong>Note - Deleting course from this page will permanently delete the course from the system.</strong>
                </div>
                <CourseList courses={courses} />
            </div>
        );
    }
}

DeletedCoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return{
            actions: bindActionCreators(courseActions,dispatch)
        };
}

export default connect(mapStateToProps,mapDispatchToProps)(DeletedCoursePage);