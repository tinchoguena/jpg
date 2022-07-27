
export const fetchUsers = async () => {
  try {
    const res = await fetch("/mocked-data/mocked-users.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'GET'
    })
    const data = await res.json();
    return (data);
  } catch (e) {
    console.log("something went wrong!", e);
  }
};