"use server";

import { db } from "@/lib/db";
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
    return { success: true, message: "Pin created successfully", pin };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error creating pin" };
  }
}
