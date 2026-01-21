export async function GET() {
  return Response.json([
    {
      id: 1,
      type: "text",
      title: "Why Choose Oregon Town Car",
      content: "Professional chauffeur service with over 10 years of experience."
    },
    {
      id: 2,
      type: "image",
      image: "/images/blocks/team.jpg",
      caption: "Our professional team"
    },
    {
      id: 3,
      type: "cta",
      label: "Book Your Ride Today",
      href: "https://book.oregontowncar.com"
    }
  ])
}
