// Sample Product
const product = {
    name: 'Example Product',
    price: 19.99,
    quantity: 10
  };
  
  // Buy Product Function
  function buyProduct() {
    if (product.quantity > 0) {
      product.quantity--;
      console.log('Product purchased successfully.');
    } else {
      console.log('Product is out of stock.');
    }
  }
  
  // Update Product Function
  function updateProduct(newPrice, newQuantity) {
    product.price = newPrice;
    product.quantity = newQuantity;
    console.log('Product updated successfully.');
  }
  
  // Customer Service Function
  function customerService(message) {
    console.log('Customer Service:', message);
  }
  
  // Example usage
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product purchased successfully.
  buyProduct(); // Product is out of stock.
  
  updateProduct(24.99, 5); // Product updated successfully.
  
  customerService('I have a question about my order.'); // Customer Service: I have a question about my order.
  