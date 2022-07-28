export const getUsers = async () => {
  try {
    const res = await fetch("/mocked-data/mocked-users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    return { data: data.users };
  } catch (e) {
    return { error: `Error ${e}` };
  }
};
