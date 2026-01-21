import { getSettings } from "@/lib/data/settings"
export async function GET() { return Response.json(await getSettings()) }
