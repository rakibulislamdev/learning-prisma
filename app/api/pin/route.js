import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pins = await db.pin.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      pins,
      { message: "Pins fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching pins:", error);
    return NextResponse.json(
      { error: "Failed to fetch pins" },
      { status: 500 }
    );
  }
}
