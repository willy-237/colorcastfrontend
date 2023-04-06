const signin = async (client) => {
    try {
      let response = await fetch('http://localhost:3001/auth/signin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
}

const signout = async () => {
  try {
    let response = await fetch('http://localhost:3001/auth/signout/', {
      method: 'GET'
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export { signin, signout };