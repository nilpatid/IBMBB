# breeches-buoy
Ionic disaster management App - The goal of this disaster management app is to save lifes. Contributions are welcome for any good feature.


## Prerequisites
- Download nodejs from https://nodejs.org/en/download/current/ It will install `node` and `npm`
```bash
node -v
 - should be >= 6.0.0
npm -v
 - should be >= 3.0.0
```
- For iOS, update XCode version to 8.0 or higher

## Getting Started

* Clone this repository

* Install Ionic, cordova and node_modules

    ```bash
    $ npm uninstall -g ionic cordova
    $ npm install -g ionic cordova
    $ npm install
    $ npm install --only=dev  
    ```

* Get google API key from [Google Developers Console](https://console.developers.google.com/apis/credentials)
  * Replace key in `src/index.html`
  ```html
  <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyAZL0jdvdtBV_DmzLZ8yW53GHnhlRrbIAY&libraries=places">
  </script>
  ```

## Run

#### Browser
```bash
    # iOS 
    ionic serve --platform ios
    # Android
    ionic serve --platform android
    # All Platforms(iOS, Android and Windows)
    ionic serve --lab
```

### Android

```bash
    $ ionic cordova platform add android
    $ ionic cordova build android --prod
    $ ionic cordova run android --prod
```

### iOS
```bash
    $ ionic cordova platform add ios
    $ ionic cordova build ios --prod
```    
    Run using XCode
    
### icon resources
Run post_install script
```bash
    $ ./post_install.sh
```    
    
### Screenshots

* Phone

  <img src="screenshots/android-ios-phone.jpg" alt="android-ios-phone" width="500"/>
  
* Tablet
  
  <img src="screenshots/android-tablet.png" alt="android-tablet" width="350"/>
  <img src="screenshots/ios-tablet.png" alt="ios-tablet" width="350"/>

## Existing Features

* Tabs, Side Menu with image
* Various Animations
* Infinite scroll
* Google Maps API
* SQL Database and WebSQL in browser
* Weather caching to avoid redundant http requests
* 3rd party libraries - lodash, moment, moment-timezone
* Works in all timezones 

## Contribution
Contributions are welcome!



## License
breeches-buoy is available under the MIT license. See the LICENSE file for more info.
