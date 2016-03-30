var crypto = require('crypto')

module.exports = function (cdnDomain, secretKey, secure) {
  return function (filePath, expiryTimestamp) {
    if (!filePath) throw new Error('No filePath defined')

    if (filePath[0] !== '/') {
      filePath = '/' + filePath
    }
    filePath = filePath.replace(/\?.*/, '')

    var hashStr = filePath + secretKey

    if (expiryTimestamp) {
      hashStr = expiryTimestamp + hashStr
    }

    var md5 = crypto.createHash('md5').update(hashStr)
    var resultHash = md5.digest('base64').replace(/\+/g, '-').replace(/\//g, '_')

    return (secure === true ? 'https' : 'http') + '://' + cdnDomain + filePath + '?secure=' + resultHash + ',' + expiryTimestamp || ''
  }
}
