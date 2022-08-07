//  create the object with name of 'user'
var user = {
    firstName: "Saqib",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    //  creating method of the object
    buyCourse: function (courseName) {
      this.courseList.push(courseName); // 'this' keyword is refering the object 'user' itself and 'push' method is add item 
    },
    //  creating another method of course-count
    getCourseCount: function () {
      return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`; // here 'length' is the inbuilt method to check length
    },
};
  
//   var courseList = true;
console.log(user.getCourseCount());   // accessing the method in the log
user.buyCourse("JavaScript course");  // pushing value
user.buyCourse("React course");
console.log(user.getCourseCount());
user.buyCourse("DSA course");
console.log(user.getCourseCount());