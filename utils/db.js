import {MongoClient} from "mongodb"

const URI = process.env.DB_URL
const options = {}
let global_mongoClientPromise;
if(!URI) throw Error("Please add Your MONDO URI")
let client = new MongoClient(URI , options)
let clientPromise

if(!global_mongoClientPromise){
  global_mongoClientPromise = client.connect()
}
clientPromise = global_mongoClientPromise
export default clientPromise 