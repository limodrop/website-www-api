import { getFleet } from "@/lib/data/fleet"
export async function GET() { return Response.json(await getFleet()) }
