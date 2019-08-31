import Axis from './Axis.js';

export default class Throttle extends Axis {
    constructor(controller, axisNumber, options, yaw, enableButton, rotationbutton) {
        super('throttle', controller, axisNumber, options);
        this.name = 'throttle';
        this.yaw = yaw;
        this.enableButton = enableButton;
        this.rotationButton = rotationbutton;
        this.left = 0;
        this.right = 0;
    }

    calculateSides() {
        if (!this.enableButton || !this.rotationButton)
            return false;

        if (this.enableButton.value !== true) {
            this.value = 0;
            this.left = 0;
            this.right = 0;
            return;
        }

        let source = this.normalized;

        this.left = source;
        this.right = source;

        let percent = this.yaw.normalized / 100;

        // left
        if (percent > 0) {
            percent = 1 - percent;
            this.left = parseInt(this.right * percent);

        }
        // right
        if (percent < 0) {
            percent = 1 + percent;
            this.right = parseInt((this.left * percent));
        }

        // flip the other side with same throttle to rotate on place
        if (this.rotationButton.value === true) {
            if (source > 0) {
                if (this.right > this.left) {
                    this.left = this.right * -1;
                }
                if (this.left > this.right) {
                    this.right = this.left * -1;
                }
            }
            if (source < 0) {
                if (this.right < this.left) {
                    this.left = this.right * -1;
                }
                if (this.left < this.right) {
                    this.right = this.left * -1;
                }
            }
        }
    }

    get value() {
        return this._value;
    }

    set value(value) {
        document.getElementById('throttle').innerHTML = `${this.name} ${value}`;

        if (value === this.value)
            return;

        this._value = parseFloat(value);
        this.normalize();
        this.calculateSides();
        this.publish();
        this.emit('change');
    }

    publish() {
        const payload = {
            name: this.name,
            value: this.normalized,
            eased: this.eased,
            side: {
                left: this.left,
                right: this.right,
            }
        };
        try {
            MQTT.publish(`movement`, payload);
        } catch (error) {
            console.log(error);
        }
    }
}