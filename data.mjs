// Instance Files for new Instances of classes and funcCall()

import Employee, { getName, getEmail, getPhone, fetchMe } from "./app.mjs";
import { grabSprints } from "./sprint.mjs";
import { getComments } from "./helper.mjs";

let testEmployee = new Employee("Chester Tester", "@biz.gov", "000-000-0000");

console.log(getName(testEmployee));
console.log(getPhone(testEmployee));
console.log(getEmail(testEmployee));
// ----------------------------------------[INSTANCES]
fetchMe();
grabSprints()
// getPhotos()
console.log("getComments", getComments());
// ----------------------------------------[Initialized_Funcs()]
