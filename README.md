# CDN77

URL signer for using secure urls on CDN77 (with optional expiration time)

## Installation

```
npm install cdn77
```

## Usage

```javascript
var cdn77 = require('cdn77')

// replace with your resource url and your secret token
var exampleSigner = cdn77('www.example.com', 'ykX1QNTRvp3tfSn8')

// generate link for /images/photo.png that expires in 5 minutes
// NOTE: we need to convert javascript timestamp from miliseconds to seconds
var now = Math.floor(new Date / 1000)
console.log(exampleSigner('/images/photo.png', now + 5 * 60))
```
