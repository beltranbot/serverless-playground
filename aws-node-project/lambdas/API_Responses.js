const Responses = {
  _200(data = {}) {
    return buildRequest(200, data)
  },
  _400(data = {}) {
    return buildRequest(400, data)
  }
}

const buildRequest = (statusCode, data) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'
    },
    statusCode,
    body: JSON.stringify(data)
  }
}

module.exports = Responses