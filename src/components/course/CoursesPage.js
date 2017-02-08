import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props,context);
        this.state = {
            course: {title:""}
        };
        
    }

    render(){
        const {courses} = this.props;
        return(
            <div>
                <h1> Courses </h1>
                
                <h2> Find Course </h2>
                <input  type="text" 
                        onChange={this.onTitleChange}
                        value = {this.state.course.title} />

                <input  type="submit" 
                        value="Search"
                        onClick={this.onClickSave} />

                <CourseList courses={courses} />

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