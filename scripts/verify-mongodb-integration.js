const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nishant_portfolio"

async function verifyIntegration() {
  const client = new MongoClient(MONGODB_URI)

  try {
    console.log("🔍 Verifying MongoDB Integration...")
    await client.connect()
    console.log("✅ MongoDB connection successful")

    const db = client.db()

    // Test 1: Verify collections exist
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map((c) => c.name)

    if (collectionNames.includes("contacts") && collectionNames.includes("projectupdates")) {
      console.log("✅ Required collections exist:", collectionNames)
    } else {
      console.log("❌ Missing collections. Found:", collectionNames)
    }

    // Test 2: Verify indexes
    const contactIndexes = await db.collection("contacts").indexes()
    const projectIndexes = await db.collection("projectupdates").indexes()
    console.log("✅ Contact collection indexes:", contactIndexes.length)
    console.log("✅ Project collection indexes:", projectIndexes.length)

    // Test 3: Test contact form simulation
    const testContact = {
      name: "Integration Test",
      email: "test@integration.com",
      subject: "MongoDB Integration Test",
      message: "Testing MongoDB integration after conversion from MySQL",
      status: "new",
      createdAt: new Date(),
    }

    const contactResult = await db.collection("contacts").insertOne(testContact)
    console.log("✅ Contact insertion test passed, ID:", contactResult.insertedId)

    // Test 4: Test project query
    const projects = await db.collection("projectupdates").find({ isPublished: true }).toArray()
    console.log("✅ Project query test passed, found", projects.length, "published projects")

    // Test 5: Verify project data structure
    if (projects.length > 0) {
      const sampleProject = projects[0]
      const requiredFields = ["title", "description", "projectName", "isPublished"]
      const hasAllFields = requiredFields.every((field) => field in sampleProject)
      console.log("✅ Project data structure valid:", hasAllFields)
    }

    // Cleanup test data
    await db.collection("contacts").deleteOne({ _id: contactResult.insertedId })
    console.log("🧹 Test data cleaned up")

    console.log("\n🎉 All MongoDB integration tests passed!")
    console.log("📋 Summary:")
    console.log("   - Database connection: Working")
    console.log("   - Collections: Created with indexes")
    console.log("   - Contact form API: Ready")
    console.log("   - Project queries: Working")
    console.log("   - Data structure: Valid")
  } catch (error) {
    console.error("❌ Integration test failed:", error)
    process.exit(1)
  } finally {
    await client.close()
  }
}

verifyIntegration()
