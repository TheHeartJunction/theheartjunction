import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface WhatsAppOrderProps {
  product: {
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
Price: ₹${product.price}`;

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
              <SelectItem value="Small">Small</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Large">Large</SelectItem>
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
              <SelectItem value="Black">Black</SelectItem>
              <SelectItem value="White">White</SelectItem>
              <SelectItem value="Red">Red</SelectItem>
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