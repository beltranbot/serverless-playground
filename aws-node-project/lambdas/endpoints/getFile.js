const S3 = require('../common/S3')
const Responses = require('../common/API_Responses')

const bucketName = process.env.bucketName

exports.handler = async event => {
  console.log('event', event)

  if (!event.pathParameters || !event.pathParameters.fileName) {
    // failed without an ID
    return Responses._400({ missing: 'missing the fileName from the path' })
  }
  let fileName = event.pathParameters.fileName;
  const file = await S3.get(fileName, bucketName)
    .catch(err => {
      console.log('error in S3 get', err)
      return null
    })
  if (!file) {
    return Responses._400({ message: 'Failed to read data by filename'})
  }
  return Responses._200({ file })
}
