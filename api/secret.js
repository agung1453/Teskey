export default function handler(req, res) {
  const key = process.env.API_KEY;

  res.status(200).json({
    success: true,
    message: "Token loaded securely",
    token: key
  });
}