import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nishant_portfolio"

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export function getDbConnection() {
  console.warn("getDbConnection is deprecated. Use connectToDatabase() instead.")
  return connectToDatabase()
}

export interface ContactSubmission {
  _id?: string
  name: string
  email: string
  subject?: string
  message: string
  createdAt?: Date
  status?: "new" | "read" | "replied"
}

export interface ProjectUpdate {
  _id?: string
  title: string
  description?: string
  content?: string
  projectName?: string
  createdAt?: Date
  updatedAt?: Date
  isPublished?: boolean
}

// Contact Schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "read", "replied"], default: "new" },
  },
  {
    timestamps: true,
  },
)

// Project Update Schema
const projectUpdateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    content: { type: String },
    projectName: { type: String },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
)

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
export const ProjectUpdate = mongoose.models.ProjectUpdate || mongoose.model("ProjectUpdate", projectUpdateSchema)
