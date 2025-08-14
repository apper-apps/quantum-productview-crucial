import cartData from "@/services/mockData/cart.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Local cart state (would be replaced with real API/localStorage in production)
let cartItems = [...cartData];

export const cartService = {
  async getAll() {
    await delay(200);
    return [...cartItems];
  },

  async addItem(productId, quantity = 1) {
    await delay(300);
    
    const existingItem = cartItems.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newId = cartItems.length > 0 ? Math.max(...cartItems.map(item => item.Id)) + 1 : 1;
      cartItems.push({
        Id: newId,
        productId,
        quantity,
        addedAt: new Date().toISOString()
      });
    }
    
    return [...cartItems];
  },

  async updateQuantity(productId, quantity) {
    await delay(200);
    
    const item = cartItems.find(item => item.productId === productId);
    if (item) {
      item.quantity = quantity;
    }
    
    return [...cartItems];
  },

  async removeItem(productId) {
    await delay(200);
    
    cartItems = cartItems.filter(item => item.productId !== productId);
    return [...cartItems];
  },

  async getItemCount() {
    await delay(100);
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }
};