/**
 * input controller for a two motored boat.
 * connect as usb game controller
 *
 * - throttle slider as axis 2
 * - yaw on axis 0
 * - button 7 as button 6 as the enable button
 * - fire button as button 0 as the the button to rotate the boat on place
 *
 */

import {EventEmitter} from 'events';
import Throttle from './throttle.js';
import Yaw from './yaw.js';
import Button from './button.js';

export default class {
    constructor() {
        return new Promise((resolve, reject) => {
            this.event = new EventEmitter();
            this.label = 'GAMEPAD';

            this.haveEvents = 'GamepadEvent' in window;
            this.haveWebkitEvents = 'WebKitGamepadEvent' in window;

            // throttle joystick
            this.options = {
                throttleAxisNumber: 2,
                yawAxisNumber: 0,
                enableButtonNumber: 6,
                rotationButtonNumber: 0,
                yawScale: {
                    in: {
                        min: 2,
                        max: 0,
                    },
                    out: {
                        min: -100,
                        max: 100,
                    }
                },
                throttleScale: {
                    in: {
                        min: 2,
                        max: 0,
                    },
                    out: {
                        min: -100,
                        max: 100,
                    }
                }
            };

            // gamepad
            this.options = {
                throttleAxisNumber: 1,
                yawAxisNumber: 2,
                enableButtonNumber: 6,
                rotationButtonNumber: 7,
                yawScale: {
                    in: {
                        min: 1,
                        max: -1,
                    },
                    out: {
                        min: -100,
                        max: 100,
                    }
                },
                throttleScale: {
                    in: {
                        min: 1,
                        max: -1,
                    },
                    out: {
                        min: -100,
                        max: 100,
                    }
                }
            };


            this.controllers = {};

            console.log(this.label, 'SEARCHING FOR A GAME CONTROLLER...');

            if (this.haveEvents) {
                window.addEventListener("gamepadconnected", (e) => {
                    this.connectHandler(e);
                });
                window.addEventListener("gamepaddisconnected", (e) => {
                    this.disconnectHandler(e);
                });
            } else if (this.haveWebkitEvents) {
                window.addEventListener("webkitgamepadconnected", (e) => {
                    this.connectHandler(e);
                });
                window.addEventListener("webkitgamepaddisconnected", (e) => {
                    this.disconnectHandler(e);
                });
            } else {
                setInterval(() => {
                    this.scanGamepads();
                    console.log('>>>>', this.controllers);
                }, 500);
            }

            console.log(this.label, '>>> READY!');
            return resolve(this);
        });
    };

    connectHandler(e) {
        this.addGamepad(e.gamepad);
    }

    disconnectHandler(e) {
        this.removeGamepad(e.gamepad);
    }

    removeGamepad(gamepad) {
        delete this.controllers[gamepad.index];
    }

    addGamepad(gamepad) {
        this.controllers[gamepad.index] = gamepad;
        console.log('>>>> CONTROLLERS ADDED', this.controllers);

        const controller = this.controllers[0];

        this.enableButton = new Button('enable', controller, this.options.enableButtonNumber);
        this.rotationButton = new Button('rotation', controller, this.options.rotationButtonNumber);

        this.yaw = new Yaw(
            controller,
            this.options.yawAxisNumber,
            this.options.yawScale
        );

        this.throttle = new Throttle(
            controller,
            this.options.throttleAxisNumber,
            this.options.throttleScale,
            this.yaw,
            this.enableButton,
            this.rotationButton
        );

        this.throttle.on('change', () => {
            this.emit('change', this.throttle);

        });

        this.yaw.on('change', () => {
            this.throttle.calculateSides();
            this.emit('change', this.yaw);
        });

        this.enableButton.on('change', () => {
            this.throttle.calculateSides();
            this.emit('change', this.enableButton);
        });
        this.rotationButton.on('change', () => {
            this.throttle.calculateSides();
            this.emit('change', this.rotationButton);
        });

        this.on('change', (e) => {
            //console.log(this.label, e.name, 'L', this.throttle.left, 'R', this.throttle.right, 'TN', this.throttle.normalized, 'TV', this.throttle.value);
            document.getElementById('debug').innerHTML = `${this.label}  ${e.name} 'L'  ${this.throttle.left} 'R' ${this.throttle.right} 'TN' ${this.throttle.normalized} 'TV' ${this.throttle.value}`;
        });

        window.requestAnimationFrame(() => {
            this.readValues();
        });
    }

    readValues() {
        this.scanGamepads();

        this.throttle.mapValue();
        this.yaw.mapValue();
        this.enableButton.mapValue();
        this.rotationButton.mapValue();

        window.requestAnimationFrame(() => {
            this.readValues();
        });
    }

    scanGamepads() {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
        for (let i = 0; i < gamepads.length; i++) {
            if (gamepads[i]) {
                if (!(gamepads[i].index in this.controllers)) {
                    this.addGamepad(gamepads[i]);
                } else {
                    this.controllers[gamepads[i].index] = gamepads[i];
                }
            }
        }
    }

    on() {
        this.event.on.apply(this.event, Array.from(arguments));
    }

    emit() {
        this.event.emit.apply(this.event, Array.from(arguments));
    }
};