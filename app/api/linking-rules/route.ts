import { getLinkingRules } from "@/lib/data/linkingRules"
export async function GET() { return Response.json(await getLinkingRules()) }
