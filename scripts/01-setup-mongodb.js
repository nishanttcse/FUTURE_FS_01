const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nishant_portfolio"

async function setupMongoDB() {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db()

    // Create collections with indexes
    await db.createCollection("contacts")
    await db.createCollection("projectupdates")

    // Create indexes for better performance
    await db.collection("contacts").createIndex({ email: 1 })
    await db.collection("contacts").createIndex({ createdAt: -1 })
    await db.collection("projectupdates").createIndex({ projectName: 1 })
    await db.collection("projectupdates").createIndex({ isPublished: 1 })

    console.log("MongoDB collections and indexes created successfully!")
  } catch (error) {
    console.error("Error setting up MongoDB:", error)
  } finally {
    await client.close()
  }
}

setupMongoDB()
