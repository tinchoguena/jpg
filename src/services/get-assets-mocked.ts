export const getAssets = async () => {
  try {
    const res = await fetch("/mocked-data/mocked-assets.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'GET'
    })
    const data = await res.json();
    return ({ data: data.assets });
  } catch (e) {
    return ({ error: `Error ${e}` });
  }
};
