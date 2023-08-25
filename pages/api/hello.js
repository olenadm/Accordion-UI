const API_URL = "https://eoyge3duj7xtdqd.m.pipedream.net/";

export async function getChallenges() {
  const response = await fetch(API_URL);
  const data = await response.json();

  
  return data;
}

export async function getChallengeById(id) {
  const allChallenges = await getChallenges();
  return allChallenges.find((challenge) => challenge.id === id);
}
export async function handler(req, res) {
  if (req.method === "POST") {
    const id = req.query.id; 
    console.log(id);
  } else {
    const allChallenges = await getChallenges();
    res.status(200).json({ message: "Success" });
  }
}
