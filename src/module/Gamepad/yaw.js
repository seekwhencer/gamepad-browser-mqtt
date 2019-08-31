import Axis from './Axis.js';

export default class Yaw extends Axis {
    constructor(controller, axisNumber, options) {
        super('yaw', controller, axisNumber, options);
        this.name = 'yaw';
    };

    get value() {
        return this._value;
    }

    set value(value) {
        document.getElementById('yaw').innerHTML = `${this.name} ${value}`;
        if (value === this.value)
            return;

        this._value = value;
        this.normalize();
        this.emit('change');
    }

};