export async function GET() {
  return Response.json([
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Cities", href: "/cities" },
    { label: "Fleet", href: "/fleet" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ])
}
