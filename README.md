# use a gamepad in a webbrowser and send (normalized) data to a mqtt broker

- install
```
git clone https://github.com/seekwhencer/gamepad-browser-mqtt.git
cd gamepad-browser-mqtt
npm install
```

- dev
```
npm run dev
```
- build
```
npm run build:prod
```

- dist

A build creates a `dist/` folder. There is a `index.html` and a `bundle.js`. Use it.

## Behavior

- two motors
- one axis for the throttle
- yaw (another axis) reduces the throttle of one (the other) motor down to 0
- one button is the enable button. you have to hold em down.
- another button is the "rotate on place" button. this button reversed the other motor. 