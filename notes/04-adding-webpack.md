# Webpack set up
1. install dependencies manually

        npm install --save webpack serverless-webpack

2. create the webpack.config.js file in the root of the project

3. next you can deploy the lambda

        sls deploy


        ran into an issue and how to downgrade the webpack version to ^5.51.2 for this to work
        https://github.com/AnomalyInnovations/serverless-bundle/issues/262#issuecomment-913050532

        Webpack compresses the javascript into a single flie

