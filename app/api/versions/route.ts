import { versions } from "@/data/versions";

export const dynamic = "force-static";

export function GET() {
  return Response.json({ data: versions });
}
