import { type NextRequest, NextResponse } from "next/server"
import { connectToDatabase, ProjectUpdate } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const projects = await ProjectUpdate.find({ isPublished: true }).sort({ createdAt: -1 }).lean()

    return NextResponse.json({ projects }, { status: 200 })
  } catch (error) {
    console.error("Projects fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
