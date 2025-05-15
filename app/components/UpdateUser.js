exports.ProfileUpdate = async (url, data, token) => {
  const res = await fetch(url, {
    method: "post",
    headers: { "Content-type": "application/json", token },
    body: JSON.stringify(data),
  });
  return await res.json();
};
