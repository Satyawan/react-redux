import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "1",
    title: "Morris 2e",
    watchHref: "",
    authorId: "Satya",
    university: "Baruch College, NY",
    discipline: "Biology"
  },
  {
    id: "2",
    title: "Morris 1e",
    watchHref: "",
    authorId: "Satya",
    university: "Baruch College, NY",
    discipline: "Biology"
  },
  {
    id: "3",
    title: "Morris 3e",
    watchHref: "",
    authorId: "Kincade",
    university: "Baruch College, NY",
    discipline: "Biology"
  },
  {
    id: "4",
    title: "Morris 5e",
    watchHref: "",
    authorId: "Facundo",
    university: "Baruch College, NY",
    discipline: "Biology"
  },
  {
    id: "5",
    title: "Morris 6e",
    watchHref: "",
    authorId: "Harriet",
    university: "Baruch College, NY",
    discipline: "Biology"
  },

  {
    id: "6",
    title: "Micro Economics",
    watchHref: "",
    authorId: "Kincade",
    university: "Baruch College, NY",
    discipline: "Economics"
  },

  {
    id: "7",
    title: "Micro Economics 1e",
    watchHref: "",
    authorId: "Harriet",
    university: "Baruch College, NY",
    discipline: "Economics"
  },
  {
    id: "8",
     title: "Micro Economics 2e",
    watchHref: "",
    authorId: "Michael",
    university: "Baruch College, NY",
    discipline: "Economics"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;