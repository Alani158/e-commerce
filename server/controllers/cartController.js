let cart = {}; // In-memory cart storage

const addToCart = (req, res) => {
  const userId = req.userId;
  const { productId, quantity, name, img, price } = req.body;

  if (!cart[userId]) {
    cart[userId] = [];
  }

  const existingProductIndex = cart[userId].findIndex(
    (item) => item.productId === productId
  );
  if (existingProductIndex !== -1) {
    cart[userId][existingProductIndex].quantity += quantity;
  } else {
    cart[userId].push({ productId, quantity });
  }

  res
    .status(200)
    .json({ message: "Product added to cart", cart: cart[userId] });
};

const removeFromCart = (req, res) => {
  const userId = req.userId;
  const { productId } = req.params;

  if (!cart[userId]) {
    return res.status(404).json({ error: "Cart not found" });
  }

  cart[userId] = cart[userId].filter((item) => item.productId !== productId);

  res
    .status(200)
    .json({ message: "Product removed from cart", cart: cart[userId] });
};

const getCart = (req, res) => {
  const userId = req.userId;

  if (!cart[userId]) {
    return res.status(404).json({ error: "Cart not found" });
  }

  res.status(200).json({ cart: cart[userId] });
};

export { addToCart, removeFromCart, getCart };
