"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { siteLinks } from "../site-links";

export function AddToCart({
  productId,
  minimum,
  maximum,
  step,
}: {
  productId: number;
  minimum: number;
  maximum: number;
  step: number;
}) {
  const [quantity, setQuantity] = useState(minimum);

  return (
    <form className="product-cart-form" action={siteLinks.cart} method="get">
      <fieldset className="product-quantity">
        <legend className="sr-only">Quantity</legend>
        <Button
          variant="outline"
          icon="minus"
          aria-label="Decrease quantity"
          disabled={quantity - step < minimum}
          onClick={() => setQuantity(quantity - step)}
        />
        <output aria-label="Selected quantity">{quantity}</output>
        <Button
          variant="outline"
          icon="plus"
          aria-label="Increase quantity"
          disabled={quantity + step > maximum}
          onClick={() => setQuantity(quantity + step)}
        />
      </fieldset>
      <input type="hidden" name="add-to-cart" value={productId} />
      <input type="hidden" name="quantity" value={quantity} />
      <Button type="submit" icon="cart">
        Add to cart
      </Button>
    </form>
  );
}
