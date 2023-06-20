import {MongoClient} from 'mongodb'
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://3dghazinezam:SS21465000gh@cluster0.nrzacgr.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({message: 'meetup iserted!'})

    }
}

export default handler;