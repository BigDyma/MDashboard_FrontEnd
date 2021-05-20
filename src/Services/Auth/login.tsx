const login = async (values: {
  userName: string;
  password: string;
}): Promise<any> => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    'Access-Control-Allow-Origin': '*',
    body: JSON.stringify(values)
  };
  const data = await fetch(`https://localhost:5001/Auth/register`, options);
  console.log(data.ok, data.status, data.statusText);
};

export default login;
