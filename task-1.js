function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = (quantity * pricePerDroid);
        return `You ordered ${quantity} worth ${totalPrice} credits!`;
      }