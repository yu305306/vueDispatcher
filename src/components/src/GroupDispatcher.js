/**
 * Created by PC-275 on 2017/6/12.
 */
let groupDispatcherInstance = null;
class GroupDispatcher {
    constructor() {
        this.typeObj = {};
        this.onceTypeObj = {};
        Array.prototype.remove = function (val) {
            let index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };
    }

    static addListenter(type, listener) {
        let ts = this.getInstance();
        if (!ts.typeObj.hasOwnProperty(type)) {
            ts.typeObj[type] = [];
        }
        ts.typeObj[type].push(listener);
        return listener;
    }

    static dispatch(type, data, ...age) {
        let ts = this.getInstance();
        if (ts.typeObj.hasOwnProperty(type)) {
            if (ts.typeObj[type].length > 0) {
                let len = arguments.length;
                let obj = { 'type': type };
                ts.typeObj[type].forEach(function (value, index, array) {
                    if (len > 0) {
                        obj.data = data;
                    }
                    value(obj, ...age);
                });
            }
        }
    }

    static removeListenter(type, listener) {
        let ts = this.getInstance();
        if (ts.typeObj.hasOwnProperty(type)) {
            if (ts.typeObj[type].length > 0) {
                let index = ts.typeObj[type].indexOf(listener);
                if (index != -1) {
                    ts.typeObj[type].splice(index, 1);
                }
                // ts.typeObj[type].remove(listener);
            }
        }
    }

    static getInstance() {
        if (!groupDispatcherInstance)
            groupDispatcherInstance = new GroupDispatcher();
        return groupDispatcherInstance;
    }
}
export default GroupDispatcher;