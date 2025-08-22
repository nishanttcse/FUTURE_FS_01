const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nishant_portfolio"

async function testMongoDBConnection() {
  const client = new MongoClient(MONGODB_URI)

  try {
    console.log("Testing MongoDB connection...")
    await client.connect()
    console.log("✅ Successfully connected to MongoDB")

    const db = client.db()

    // Test collections exist
    const collections = await db.listCollections().toArray()
    console.log(
      "📋 Available collections:",
      collections.map((c) => c.name),
    )

    // Test contact insertion
    const testContact = {
      name: "Test User",
      email: "test@example.com",
      subject: "Test Message",
      message: "This is a test message to verify MongoDB integration",
      status: "new",
      createdAt: new Date(),
    }

    const contactResult = await db.collection("contacts").insertOne(testContact)
    console.log("✅ Test contact inserted with ID:", contactResult.insertedId)

    // Test project query
    const projects = await db.collection("projectupdates").find({ isPublished: true }).toArray()
    console.log("✅ Found", projects.length, "published projects")

    // Clean up test data
    await db.collection("contacts").deleteOne({ _id: contactResult.insertedId })
    console.log("🧹 Cleaned up test data")

    console.log("🎉 All MongoDB integration tests passed!")
  } catch (error) {
    console.error("❌ MongoDB connection test failed:", error)
    process.exit(1)
  } finally {
    await client.close()
  }
}

testMongoDBConnection()
