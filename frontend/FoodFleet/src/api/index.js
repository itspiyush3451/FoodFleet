// FoodFleet API Service - centralizes all backend calls
const BASE_URL = "http://localhost:8080"; // Change if your backend runs on a different port

// User APIs
export async function registerUser(data) {
  const res = await fetch(`${BASE_URL}/addingUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${BASE_URL}/userLogin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Product APIs
export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function addProduct(data) {
  const res = await fetch(`${BASE_URL}/addingProduct`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Admin APIs
export async function adminLogin(data) {
  const res = await fetch(`${BASE_URL}/adminLogin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Order APIs
export async function placeOrder(data) {
  const res = await fetch(`${BASE_URL}/product/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Utility: Add more functions as needed for update, delete, etc.
