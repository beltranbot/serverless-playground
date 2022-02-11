const Dynamo = require('../common/Dynamo')
const Responses = require('../common/API_Responses')

const tableName = process.env.tableName

exports.handler = async event => {
  console.log('event', event)

  if (!event.pathParameters || !event.pathParameters.ID) {
    // failed without an ID
    return Responses._400({missing: 'missing the ID from the path'})
  }
  let ID = event.pathParameters.ID;
  const user = await Dynamo.get(ID, tableName)
    .catch(err => {
      console.log("error in Dynamo GET", err)
      return null
    })
  if (!user) {
    // this should be a 404 error
    return Responses._400({missing: 'Failed to get user by ID'})
  }

  return Responses._200({ user })
}
