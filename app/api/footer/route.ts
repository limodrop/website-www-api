export async function GET() {
  return Response.json({
    company: "Oregon Town Car",
    phone: "(503) 123-4567",
    email: "info@oregontowncar.com",
    address: "123 Main St, Portland, OR 97201",
    links: [
      { label: "Services", href: "/services" },
      { label: "Cities", href: "/cities" },
      { label: "Fleet", href: "/fleet" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  })
}
