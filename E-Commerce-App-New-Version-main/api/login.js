export default async function handler(req, res) {
  // Only allow POST requests for login
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We pass the username/password from the frontend to FakeStore
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    // Standard CORS fix
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Login proxy failed" });
  }
}