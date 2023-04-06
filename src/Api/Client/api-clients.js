const createClient = async (client) => {
    try{
        let reponse = await fetch("http://localhost:3001/api/clients", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(client)
        })
        return await reponse.json();
    }catch(err){
        console.log(err)
    }
}

export { createClient }