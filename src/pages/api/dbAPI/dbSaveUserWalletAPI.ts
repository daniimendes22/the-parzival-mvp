import db from '../db'

export default async function handler(req, res) {
  const walletId = req.body;
  if (req.method === 'POST') {
    var getDBItem = {
      Key: {
        "address": {
          S: walletId
        }
      },
      TableName: "wallet"
    };
    const data = await db.getItem(getDBItem).promise();

    if (!data.Item) {
      var putDBItem = {
        TableName: 'wallet',
        Item: {
          'address': { S: walletId },
          'date': { S: new Date().toISOString() }
        }
      };

      await db.putItem(putDBItem, function (err, data) {
        if (err) {
          console.log('Error', err);
          res = err;
        } else {
          console.log("Success", data);
          res = data;
        }
      });
    }
  }
  return res;
}
