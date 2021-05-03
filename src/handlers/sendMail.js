import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-2' });

async function sendMail(event, context) {
  const params = {
    Source: 'estebanpablo89@gmail.com',
    Destination: {
      ToAddresses: ['estebanpablo89@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from the world',
        },
      },
      Subject: {
        Data: 'Test mail',
      },
    },
  };
  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
