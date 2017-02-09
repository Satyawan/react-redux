import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props,context);
        this.state = {
            course: {title:""}
        };
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage(){
        browserHistory.push('/course/');
    }

    render(){
        const {courses} = this.props;
        return(
            <div>
                <h1> Courses </h1>
                
               
                    <h3> Find Course </h3>
                    <input  type="text" 
                            onChange={this.onTitleChange}
                            value = {this.state.course.title} />

                    <input  type="submit" 
                            value="Search"
                            onClick={this.onClickSave} />
                
                <CourseList courses={courses} />

                 <div className="well">

                    <input  type="submit" 
                            value="Add Course"
                            className="btn btn-primary"
                            onClick={this.redirectToAddCoursePage} />
                </div>

            </div>

        );
    }
}

CoursesPage.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);