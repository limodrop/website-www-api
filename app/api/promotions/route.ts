import { getPromotions } from "@/lib/data/promotions"
export async function GET() { return Response.json(await getPromotions()) }
