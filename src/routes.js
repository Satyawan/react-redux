import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import CoursePage from './components/course/CoursePage';
import DeletedCoursePage from './components/course/DeletedCoursePage';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route  path="courses" component={CoursesPage} />
        <Route  path="course/*" component={CoursePage} />
        <Route  path="deletedcourses" component={DeletedCoursePage} />
    </Route>
);