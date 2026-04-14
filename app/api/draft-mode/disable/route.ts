import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const draft = await draftMode();
  draft.disable();

  // If there's a referring URL, go back to it
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirect") || "/";
  redirect(redirectTo);
}
