import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { pinId } = await params;
  try {
    if (!pinId) {
      return NextResponse.json("Not Found", { status: 404 });
    }
    const { title, description, type, content } = await req.json();

    const updatePin = await db.pin.update({
      where: {
        id: pinId,
      },
      data: {
        title: title,
        description: description,
        type: type,
        content: content,
      },
    });
    return NextResponse.json(updatePin, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update pin" },
      { status: 500 }
    );
  }
}
