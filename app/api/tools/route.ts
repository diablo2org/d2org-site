import { tools } from "@/data/tools";

export const dynamic = "force-static";

export function GET() {
  return Response.json({ data: tools });
}
