class CourseResource {
    constructor(model) {
        return (async () => {
            if (Array.isArray(model)) {
                let resources = [];
                for (let i = 0; i < model.length; i++) {
                    let resource = await this.initializeResource(model[i]);
                    resources.push(resource);
                }
                return resources;
            } else {
                return await this.initializeResource(model);
            }
        })();
    }

    /**********************************************************************/
    /****************** only change the code below (att) ******************/
    /**********************************************************************/

    async initializeResource(course) {
        let resource = {
            course_id: course.course_id,
            title: course.title,
            level: course.level,
            course_fee: course.course_fee,
            about_the_course: course.about_the_course,
            finished: course.finished,
            teacher: await course.getTeacher(),
        };
        return resource;
    }
}

module.exports = CourseResource;
