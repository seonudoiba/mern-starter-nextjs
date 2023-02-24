const api_url = process.env.API_URL
const signin = async (user) => {
    try {
        let response = await fetch(`http://localhost:8080/auth/signin/`, {
            method: 'POST',
            statusCode: 200,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": 'http://localhost:3000',
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const signout = async () => {
    try {
        let response = await fetch(`${api_url}/auth/signout/`, { method: 'GET' })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export {
    signin,
    signout
}