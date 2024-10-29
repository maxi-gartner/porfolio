"use server";
import { sendEmail } from "../lib/brevo";

export async function handleForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const phone = formData.get("phone");

  if (!name || !email || !message) {
    return console.log("Please fill out all fields");
  }

  await sendEmail(
    name as string,
    email as string,
    message as string,
    phone ? (phone as string) : undefined
  );
}
