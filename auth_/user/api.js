const api_url = process.env.API_URL
const create = async (user) => {
    console.log(user, "check")
    try {
        let response = await fetch("http://localhost:8080/api/users", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": 'http://localhost:3000',
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
// const list = async (signal) => {
//     try {
//         let response = await fetch(`${api_url}/api/users/`, {
//             method: 'GET',
//             signal: signal,
//         })
//         return await response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }
const read = async (params, credentials, signal) => {
    try {
        let response = await fetch(`http://localhost:8080/api/users/${params.userId}`, {
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const update = async (params, credentials, user) => {
    try {
        let response = await fetch(`http://localhost:8080/api/users/${params.userId}` + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const remove = async (params, credentials) => {
    try {
        let response = await fetch(`${api_url}/api/users/` + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export { create, read, update, remove }