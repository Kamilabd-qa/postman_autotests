// autotest for method https://swapi.py4e.com


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Successful GET request", function () {
    pm.response.to.have.status(200);
});
