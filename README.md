# News Article Evaluation App

## Description
This is a simple Web App created for users to evaluate news articles against parameters such as 'polarity' and 'subjectivity'.

## Getting Started
### Follow these steps to run the app:
- Clone the repo
```
https://github.com/x-mo/evaluate-news-nlp.git
```
- Place the API Key by replacing `process.env.API_KEY` inside `/src/server/index.js` with your
 [MeaningCloud](https://www.meaningcloud.com/) API Key; Or preferably set your key as ***dotenv*** environment variable.

- From the terminal, `cd` into the project folder and run the following commands:
   - Install project dependencies
      ```
     npm install
      ```
  - Build the project in your desired mode (dev/prod)
    ```
    npm run build-dev
    ```
    OR
    ```
    npm run build-prod
    ```
  - Run the app on local server
    ```
    npm run start
    ```
Now the App is ready to use locally on the port echoed in the terminal.
