# DynamoDB with serverless

Add the resource to the serverless.yml file

## custom variables
1. define the variable within the custom section of the serverless.yml file

        custom:
            tableName: player-points

2. use the custom variable elsewhere

        TableName: ${self:custom.tableName}
