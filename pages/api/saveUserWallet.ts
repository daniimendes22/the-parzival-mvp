import db from '../../db';

export default async function handler(req, res) {
  const walletId = req.body.value ;
  if (req.method === 'POST') {
    var params = {
      TableName: 'wallet',
      Item: {
        'address': {S: walletId},
        'date': {S: new Date().toISOString()}
      }
    };
    db.putItem(params, function (err, data) {
      if (err) {
        console.log('Error', err);
       res = err; 
      } else {
        console.log("Success", data);
        res = data;
      }
    });
  }
  return res;
}
