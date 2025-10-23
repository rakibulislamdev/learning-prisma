import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, type, content } = await request.json();
    if (!title || !description || !type || !content) {
      return new NextResponse("Missing required fields", { status: 400 });
    }
    const pin = await db.pin.create({
      data: { title, description, type, content },
    });

    return NextResponse.json(
      pin,
      { message: "Pin created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating pin:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
