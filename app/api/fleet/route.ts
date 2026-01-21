export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Luxury Sedan",
      slug: "luxury-sedan",
      seats: 3,
      description: "Executive sedan for professional transportation",
      image: "/images/fleet/sedan.jpg"
    },
    {
      id: 2,
      name: "Premium SUV",
      slug: "suv",
      seats: 6,
      description: "Spacious SUV for group travel",
      image: "/images/fleet/suv.jpg"
    },
    {
      id: 3,
      name: "Mercedes Sprinter Van",
      slug: "sprinter-van",
      seats: 12,
      description: "Large group transportation",
      image: "/images/fleet/sprinter.jpg"
    }
  ])
}
