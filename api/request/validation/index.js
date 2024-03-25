const courseStore = require("./course/courseStore.validate");
const courseUpdate = require("./course/courseUpdate.validate");
const unitStore = require("./unit/unitStore.validate");
const unitUpdate = require("./unit/unitUpdate.validate");
const lectureStore = require("./lecture/lectureStore.validate");
const lectureUpdate = require("./lecture/lectureUpdate.validate");
const questionStore = require("./question/questionStore.validate");
const questionUpdate = require("./question/questionUpdate.validate");
const teacherStore = require("./teacher/teacherStore.validate");
const teacherUpdate = require("./teacher/teacherUpdate.validate");

module.exports = {
    courseStore,
    courseUpdate,
    unitStore,
    unitUpdate,
    lectureStore,
    lectureUpdate,
    questionStore,
    questionUpdate,
    teacherStore,
    teacherUpdate,
};
