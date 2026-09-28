import { servers } from "@/data/servers";

export const dynamic = "force-static";

export function GET() {
  return Response.json({ data: servers });
}
