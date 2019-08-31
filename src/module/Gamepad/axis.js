import {EventEmitter} from 'events';

export default class Axis {
    constructor(name, controller, axisNumber, options) {
        this.event = new EventEmitter();
        this.name = name;
        this.number = axisNumber;
        this.controller = controller;
        this.options = options;
        this.value;
        this.normalized = 0;

    }

    mapValue() {
        document.getElementById(`${this.name}_read`).innerHTML = `READ ${this.name} ${this.controller.axes[this.number]}`;
        this.value = this.controller.axes[this.number];
    }

    normalize() {
        const opts = this.options;
        if (opts.in && opts.out) {
            this.normalized = parseInt(this.scaleNumberRange(this.value, parseInt(opts.in.min), parseInt(opts.in.max), parseInt(opts.out.min), parseInt(opts.out.max)));
        }
    }

    scaleNumberRange(number, oldMin, oldMax, newMin, newMax) {
        return (((newMax - newMin) * (number - oldMin)) / (oldMax - oldMin)) + newMin;
    }

    on() {
        this.event.on.apply(this.event, Array.from(arguments));
    }

    emit() {
        this.event.emit.apply(this.event, Array.from(arguments));
    }

}