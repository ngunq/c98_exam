const http = require('http');
const approved_address = `http://${process.argv[2]}:3000`;
const blocked_address = `http://${process.argv[2]}:8080`;



function case_1() {
    const name = "Test API Port"
    http.get(`${approved_address}/health`, (res) => {
        if (res.statusCode === 200 && res.statusMessage === "OK") {
            console.log(`${name}: PASSED`)
            return
        }
        console.log(`${name}: FAILED`)
    }).on("error", (err) => {
        console.log(`${name}: FAILED`)
    });
}

function case_2() {
    const name = "Test unallow port"
    http.get(`${blocked_address}`, (res) => {
        console.log(`${name}: FAILED`)
    }).on("error", (err) => {
        console.log(`${name}: PASSED`)
    });
}

case_1()
case_2()

