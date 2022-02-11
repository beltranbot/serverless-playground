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
  const data = JSON.parse(event.body)

  const newData = await S3.write(data, fileName, bucketName)
    .catch(err => {
      console.log('error in S3 write', err)
      return null
    })
  if (!newData) {
    return Responses._400({ message: 'Failed to write data by filename'})
  }
  return Responses._200({ data: newData })
}
