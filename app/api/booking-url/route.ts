import { getBookingUrl } from "@/lib/data/bookingUrl"
export async function GET() { return Response.json(await getBookingUrl()) }
