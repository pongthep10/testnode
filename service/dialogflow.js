const dialogflow = require('dialogflow');
const uuid = require('uuid');
const config = require('../config.json')
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(projectId, languageCode, text) {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      credentials: {
          client_email: config.client_email,
          private_key: config.private_key
      }
  });
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text,
        // The language used by the client (en-US)
        languageCode,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
//   console.log('Detected intent');
  const result = responses[0].queryResult;
//   console.log(`  Query: ${result.queryText}`);
//   console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    // console.log(`  Intent: ${result.intent}`);
    return {
        intent: result.intent,
        intentName: result.intent.displayName,
        messageResponse: result.fulfillmentText
    }
  } else {
    // console.log(`  No intent matched.`);
    return false
  }
}

module.exports = runSample