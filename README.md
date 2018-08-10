# React-Hot-Loader Webpack Bug
> A bare bones repo demonstrating hot module replacement being broken, by the following commit:

[https://github.com/gaearon/react-hot-loader/commit/ffe003532d50d7079efcac6d18254f770691f41d#diff-168726dbe96b3ce427e7fedce31bb0bc](https://github.com/gaearon/react-hot-loader/commit/ffe003532d50d7079efcac6d18254f770691f41d#diff-168726dbe96b3ce427e7fedce31bb0bc)

When using with Webpack, importing `hot` from 'react-hot-loader', the conditional is serving the production version of RHL, thus disabling HMR

DOES NOT WORK
```
'use strict'

if (!module.hot || process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-hot-loader.production.min.js');
} else {
  module.exports = require('./dist/react-hot-loader.development.js');
}
```

### This can be demonstrated by bypassing this file altogether and importing just the development.js
See `src/App.js`.. Comment in the 'DOES WORK import to see HMR working again.

Doing a simple check for the module.filename containing 'react-hot-loader' fixes the issue.

DOES WORK
```
'use strict'

const notRHL = module.filename.indexOf('react-hot-loader') === -1
if ((!module.hot && notRHL) || process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-hot-loader.production.min.js');
} else {
  module.exports = require('./dist/react-hot-loader.development.js');
}
```

The app now benefits from HMR, with state intact.

