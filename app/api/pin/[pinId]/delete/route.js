import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function DELETE(req, { params }) {
  const { pinId } = await params;
  try {
    if (!pinId) {
      return NextResponse.json("Not Found", { status: 404 });
    }

    const deletePin = await db.pin.delete({
      where: {
        id: pinId,
      },
    });

    revalidatePath("/");

    return NextResponse.json(deletePin, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete pin" },
      { status: 500 }
    );
  }
}
