const url = "https://api.coingecko.com/api/v3/coins";

export async function getCoinList() {
  const res = await fetch(url+'/list');
  return res.json()
}

export async function getCurrentCoin( {id}: any ){
  const res = await fetch(url+`/${id}`);
  return res.json()
}