export const getTags = async () => {
  try {
    const res = await fetch("/mocked-data/mocked-tags.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    return { data: data.tags };
  } catch (e) {
    return { error: `Error ${e}` };
  }
};
