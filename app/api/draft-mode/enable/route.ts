import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { client } from "@/lib/sanity";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const token = process.env.SANITY_API_READ_TOKEN;
  if (!token) {
    return new Response(
      "The `SANITY_API_READ_TOKEN` environment variable is required to enable Draft Mode.",
      { status: 401 }
    );
  }

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    client.withConfig({ token }),
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  redirect(redirectTo);
}
