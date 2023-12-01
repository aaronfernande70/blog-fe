export const fetchData = async (url, method, body) => {
  let data,loading,error;

  try {
    let response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    let json = await response.json();

    data = json;
    loading = false;
  } catch (err) {
    error = err;
    loading = false;
  }
  return { data, loading, error };
};
