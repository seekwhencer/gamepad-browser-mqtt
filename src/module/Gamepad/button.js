import {EventEmitter} from 'events';

export default class {
    constructor(name, controller, buttonNumber) {
        this.event = new EventEmitter();
        this.name = name;
        this.number = buttonNumber;
        this.controller = controller;
        this.value = false;

        this.mapValue();

        this.on('change', () => {
            //console.log('>>>>', this.name, 'CHANGED:', this.value);
        });

    }

    mapValue() {
        this.value = this.controller.buttons[this.number].pressed;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        if (value === this.value)
            return;

        this._value = value;
        this.emit('change');
    }

    on() {
        this.event.on.apply(this.event, Array.from(arguments));
    }

    emit() {
        this.event.emit.apply(this.event, Array.from(arguments));
    }
}