export function authHeader() {
    // return authorization header with jwt token
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFqYXRpYkBnbWFpbC5jb20iLCJpZCI6MjgsInJvbGVfaWQiOjEsImlhdCI6MTU3NTAzNTc0MCwiZXhwIjoxNTg1MDM1NzM5fQ.gaUCasOMUrhkZRxYISImcrVQwAHIhcfGGzurBPkexIQ"

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}

