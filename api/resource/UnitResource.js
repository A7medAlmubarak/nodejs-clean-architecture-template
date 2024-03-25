class UnitResource {
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

    async initializeResource(unit) {
        let resource = {
            unit_id: unit.unit_id,
            title: unit.title,
            unit_number: unit.unit_number,
            course_id: unit.course_id,
        };
        return resource;
    }
}

module.exports = UnitResource;
