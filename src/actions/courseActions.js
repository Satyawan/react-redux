import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course){
    return {type:types.CREATE_COURSE, course};
}

export function findCourse(course){
    return {type:types.FIND_COURSE, course};
}


export function editCourse(course){
    return {type:types.EDIT_COURSE, course};
}


export function deleteCourse(course){
    return {type:types.DELETE_COURSE, course};
}

export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}
export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error=>{
            throw (error);
        });
    }
}