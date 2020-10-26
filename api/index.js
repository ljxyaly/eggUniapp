import * as activity from "./modules/activity.js";
import * as admin from "./modules/admin.js";
import * as order from "./modules/order.js";
import * as publics from "./modules/public.js";
import * as goods from "./modules/goods.js";
import * as user from "./modules/user.js";

export default Object.assign(activity,admin,order,publics,goods,user);
