import { mods } from "@/data/mods";

export const dynamic = "force-static";

export function GET() {
  return Response.json({ data: mods });
}
