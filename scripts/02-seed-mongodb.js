const { MongoClient } = require("mongodb")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nishant_portfolio"

async function seedMongoDB() {
  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log("Connected to MongoDB for seeding")

    const db = client.db()

    // Clear existing data
    await db.collection("projectupdates").deleteMany({})
    console.log("Cleared existing project updates")

    // Insert sample project data based on resume
    const sampleProjects = [
      {
        title: "ReWear Community Platform Launch",
        description:
          "Full-stack platform facilitating 1,000+ clothing swaps via direct exchange and point-based system",
        projectName: "ReWear-Community-Clothing-Exchange",
        content:
          "Engineered a comprehensive platform with secure authentication, responsive design, and advanced item management system. Features include user authentication handling 500 daily active users, responsive landing page with 3 CTAs reducing bounce rate by 35%, and item management with 6+ metadata fields improving match accuracy by 40%.",
        isPublished: true,
        createdAt: new Date("2025-03-01"),
        updatedAt: new Date("2025-03-01"),
      },
      {
        title: "Elderly CareAI System Deployment",
        description: "AI-powered elderly assistance system supporting 500+ users with 30% improved response time",
        projectName: "Elderly CareAI",
        content:
          "Innovative AI system with integrated health tracking, predictive analytics, and real-time monitoring capabilities. Includes AI agents for vital tracking and anomaly detection, SQLite database with <0.5s query latency, and predictive analytics achieving 90% early detection accuracy.",
        isPublished: true,
        createdAt: new Date("2024-11-01"),
        updatedAt: new Date("2025-02-01"),
      },
      {
        title: "AI Code Reviewer Beta Release",
        description: "ML-based bug detection system achieving 85% accuracy and reducing review time significantly",
        projectName: "AI Code Reviewer",
        content:
          "Advanced NLP-powered code analysis tool supporting multiple programming languages with automated pattern recognition. Features 85% bug detection accuracy, 15% reduction in codebase bugs, and support for 5+ languages including Python, Java, C++, JavaScript, and Ruby.",
        isPublished: true,
        createdAt: new Date("2024-10-01"),
        updatedAt: new Date("2024-11-01"),
      },
    ]

    const result = await db.collection("projectupdates").insertMany(sampleProjects)
    console.log(`Inserted ${result.insertedCount} sample projects`)

    console.log("MongoDB seeding completed successfully!")
  } catch (error) {
    console.error("Error seeding MongoDB:", error)
  } finally {
    await client.close()
  }
}

seedMongoDB()
