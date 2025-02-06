import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    id: 1,
    image: "/lovable-uploads/0c876f8f-35a0-46e8-9cb5-86d9752161a6.png",
    text: "We were honored to present our handcrafted bouquets to distinguished guest speakers at GL Bajaj Group of Institutions. The blue roses perfectly complemented the prestigious occasion.",
    event: "GL Bajaj Guest Speaker Series"
  },
  {
    id: 2,
    image: "/lovable-uploads/5f98338d-95fc-495d-a1b6-e1eb681bd25f.png",
    text: "Our signature blue rose bouquets were warmly received by the faculty members at GL Bajaj. The elegant presentation added a touch of sophistication to the event.",
    event: "Faculty Recognition Ceremony"
  },
  {
    id: 3,
    image: "/lovable-uploads/05077623-e9e6-4289-9309-96077c06b0de.png",
    text: "The yellow rose bouquet brought vibrant energy to the academic gathering. We're proud to have contributed to this special moment at GL Bajaj.",
    event: "Academic Excellence Awards"
  },
  {
    id: 4,
    image: "/lovable-uploads/1e045a0c-2d4d-4e81-a2cf-93ca4d838064.png",
    text: "Our purple bouquet design was featured at the GL Bajaj Beehive Innovation Cell event. It was a pleasure to be part of this innovative initiative.",
    event: "Beehive Innovation Cell Launch"
  }
];

export const Reviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {reviews.map((review) => (
        <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-all">
          <CardContent className="p-0">
            <img 
              src={review.image} 
              alt={`Event at ${review.event}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{review.event}</h3>
              <p className="text-gray-600">{review.text}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};