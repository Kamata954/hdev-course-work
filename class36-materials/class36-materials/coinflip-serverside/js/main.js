document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#coinSide").textContent = data.decision
  document.querySelector("img").src = data.img
}
