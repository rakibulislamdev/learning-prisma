import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { pinId } = await params;
  try {
    const pin = await db.pin.findUnique({
      where: { id: pinId },
    });
    if (!pin) {
      return NextResponse.json("Pin Not Found", { status: 404 });
    }
    return NextResponse.json(pin, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch pin data" },
      { status: 500 }
    );
  }
}
