const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');


const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.datatype._id(),
    };
}

const createCompany = () => {
    return {
        _id: faker.datatype._id(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.zcountry(),
        },
    };
};
app.get('/api/users/new', (res) => {
    const user = createUser();
    res.json(user);
});

app.get('/api/companies/new', (res) => {
    const company = createCompany();
    res.json(company);
});

app.get('/api/user/company', (res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});