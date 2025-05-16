exports.ProfileUpdate = async (url, data, token) => {
  console.log(data);
  const res = await fetch(url, {
    method: "post",
    headers: { "Content-type": "application/json", token },
    body: JSON.stringify(data),
  });
  let result = await res.json();
  return result;
};
