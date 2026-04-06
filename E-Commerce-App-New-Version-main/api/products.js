export default async function handler(req, res) {
  // Set CORS headers to allow your frontend to communicate
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    
    if (!response.ok) {
      throw new Error(`External API status: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    // 🛡️ CRITICAL: Return an empty array so .filter() doesn't crash the frontend
    return res.status(500).json([]);
  }
}