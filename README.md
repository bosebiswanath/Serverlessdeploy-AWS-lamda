# DemoAWS Lmada

Step Followed:

    1. In the existing project install serverless globally it not [npm install -g serverless]

    2. serverless config credentials --provider aws --key <your-key> --secret <your-secrete-key>

    3. serverless create -t <template-name>

    4. npm i serverless-http

    5. changes in the serverless.yml file and handler.js and package.json

    6. npm run deploy

    7. check this
        https://dwxeqwi2a8.execute-api.us-east-1.amazonaws.com/dev
        https://dwxeqwi2a8.execute-api.us-east-1.amazonaws.com/dev/getcountry
