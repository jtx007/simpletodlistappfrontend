const adapters = {
    createUser: createUser,
    loginUser: loginUser
}

export default adapters

function createUser(userlogin, pass) {
    return fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        body: JSON.stringify({user:{username: userlogin, password: pass}}),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}

function loginUser(userlogin, pass) {
    return fetch('http://localhost:3000/api/v1/login', {
        method: "POST",
        body: JSON.stringify({user:{username: userlogin, password: pass}}),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
}