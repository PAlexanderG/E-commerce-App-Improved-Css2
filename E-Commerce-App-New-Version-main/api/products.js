export default async function handler(req, res) {
  // Set CORS headers so your frontend can communicate with this API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    
    // If the external API is down, throw an error to trigger the catch block
    if (!response.ok) {
      throw new Error(`External API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Serverless Function Error:", error);
    // 🛡️ Return an empty array so the frontend .filter() doesn't break
    return res.status(200).json([]); 
  }
}