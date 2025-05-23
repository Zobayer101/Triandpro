exports.ProfileUpdate = async (url, data, token) => {
  const res = await fetch(url, {
    method: "post",
    headers: { "Content-type": "application/json", token },
    body: data,
  });
  let result = await res.json();
  return result;
};

exports.OtherProfileUpload = async (url, data, token) => {
  const res = await fetch(url, {
    method: "post",
    headers: { token },
    body: data,
  });
  let result = await res.json();
  return result;
};
