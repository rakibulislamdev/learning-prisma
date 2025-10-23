"use server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function createPin(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const type = formData.get("type");
  const content = formData.get("content");

  try {
    const pin = await db.pin.create({
      data: {
        title,
        description,
        type,
        content,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create pin" },
      { status: 500 }
    );
  }
}
