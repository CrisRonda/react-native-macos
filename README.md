## Steps

1. update the metro library in
   - node_modules/react-native-macos/Libraries/Utilities/HMRClient.js
     with

```js
const MetroHMRClient = require('../../../@react-native-community/cli/node_modules/metro/src/lib/bundle-modules/HMRClient');
```
