export async function GET() {
  return Response.json({
    phone: "(503) 123-4567",
    email: "info@oregontowncar.com",
    address: "123 Main St, Portland, OR 97201",
    hours: "24/7 Service Available"
  })
}
