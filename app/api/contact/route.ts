import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    console.log("📧 Contact Form Submission:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Subject:", subject || "Portfolio Contact")
    console.log("Message:", message)
    console.log("Timestamp:", new Date().toISOString())
    console.log("---")

    return NextResponse.json(
      {
        message: "Contact form submitted successfully! Check the console for details.",
        id: Date.now().toString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
