import Module from "../Module.js";
import * as Mqtt from 'mqtt';

export default class extends Module {
    constructor(args) {
        super(args);
        return new Promise((resolve, reject) => {
            this.label = 'MQTT';
            console.log(this.label, 'INIT');
            this.connect();

            this.on('ready', ()=>{
                resolve(this);
            });
        });
    }

    connect() {
        this.options = {
            host: '192.168.100.100',
            port: '9091',
            clientId: 'browser',
            keepalive: 1,
            clean: false,
            reconnectPeriod: 1000 * 1
        };

        this.client = Mqtt.connect(this.options);

        this.client.on('connect', (conn) => {
            console.log(this.label, 'CONNECTED', conn);
            this.emit('ready');
        });

        this.client.on('message', (topic, message) => {
            // message is Buffer
            console.log(message.toString());
            this.client.end();
        });

        this.client.on('error', err => {
            console.log('?????????', err);
        });
    }

    publish(topic, payload) {
        let _payload = Buffer.from(JSON.stringify(payload));
        this.client.publish(topic, _payload);
    }
}