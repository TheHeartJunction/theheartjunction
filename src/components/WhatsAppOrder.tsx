
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface WhatsAppOrderProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export const WhatsAppOrder = ({ product }: WhatsAppOrderProps) => {
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [customText, setCustomText] = useState<string>("");

  const handleWhatsAppOrder = () => {
    if (!size || !color) {
      return;
    }

    const message = `Hi, I would like to order:
Product: ${product.name}
Size: ${size}
Color: ${color}${customText ? `\nCustom Text: "${customText}"` : ""}
Starting Price: ₹${product.price}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919412383635&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Size</label>
          <Select onValueChange={setSize} value={size}>
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {product.id === 5 ? (
                <SelectItem value="50 Flowers">50 Flowers</SelectItem>
              ) : (
                <>
                  <SelectItem value="4 Flowers">4 Flowers</SelectItem>
                  <SelectItem value="7 Flowers">7 Flowers</SelectItem>
                  <SelectItem value="10 Flowers">10 Flowers</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Color</label>
          <Select onValueChange={setColor} value={color}>
            <SelectTrigger>
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pink">Pink</SelectItem>
              <SelectItem value="White">White</SelectItem>
              <SelectItem value="Red">Red</SelectItem>
              <SelectItem value="Black">Black</SelectItem>
              <SelectItem value="Yellow">Yellow</SelectItem>
              <SelectItem value="Blue">Blue</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Custom Message (Optional)</label>
        <Input
          placeholder="Enter your custom message"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />
      </div>
      <Button 
        onClick={handleWhatsAppOrder}
        disabled={!size || !color}
        className="w-full bg-green-500 hover:bg-green-600"
      >
        Buy Now on WhatsApp
      </Button>
    </div>
  );
};
