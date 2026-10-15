require("dotenv").config();

const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

const USER_COUNTS = {
    small: 100,
    medium: 1000,
    large: 10000
};

// ------------------------------------------------------------
// Controlled password for generated benchmark users
// ------------------------------------------------------------
//
// This password is used only for generated test accounts.
// Never use this approach for real production users.
//
// The actual database stores only the bcrypt hash.
//
const GENERATED_USER_PASSWORD =
    process.env.GENERATED_USER_PASSWORD;

const PASSWORD_SALT_ROUNDS =
    Number(
        process.env.PASSWORD_SALT_ROUNDS || 10
    );

if (!GENERATED_USER_PASSWORD) {
    throw new Error(
        "GENERATED_USER_PASSWORD is not configured in dataset/.env"
    );
}

// ------------------------------------------------------------
// Fixed benchmark accounts
// ------------------------------------------------------------

const BENCHMARK_USERS = [
    {
        code: "TEST-CUSTOMER",
        email: "test.customer@shopbench.test",
        role_id: 1,
        role_name: "CUSTOMER"
    },
    {
        code: "TEST-STAFF",
        email: "test.staff@shopbench.test",
        role_id: 2,
        role_name: "STAFF"
    },
    {
        code: "TEST-ADMIN",
        email: "test.admin@shopbench.test",
        role_id: 3,
        role_name: "ADMIN"
    }
];

// ------------------------------------------------------------
// Generate password hash
// ------------------------------------------------------------

function generatePasswordHash() {
    return bcrypt.hashSync(
        GENERATED_USER_PASSWORD,
        PASSWORD_SALT_ROUNDS
    );
}

// ------------------------------------------------------------
// Generate one customer user
// ------------------------------------------------------------

function generateUser(userNumber, passwordHash) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const paddedNumber =
        String(userNumber).padStart(6, "0");

    const code = `U${paddedNumber}`;

    return {
        code,

        first_name: firstName,

        last_name: lastName,

        email:
            `user${paddedNumber}@shopbench.test`,

        phone:
            `+91-9${String(
                100000000 + userNumber
            ).slice(-9)}`,

        password_hash: passwordHash,

        role_id: 1,

        role_name: "CUSTOMER",

        is_active: true
    };
}

// ------------------------------------------------------------
// Generate users for a dataset
// ------------------------------------------------------------

function generateUsers(
    datasetName,
    seed = 20260916
) {
    const count = USER_COUNTS[datasetName];

    if (!count) {
        throw new Error(
            `Unknown dataset: ${datasetName}`
        );
    }

    faker.seed(seed);

    const passwordHash =
        generatePasswordHash();

    const users = [];

    for (let i = 1; i <= count; i++) {
        users.push(
            generateUser(
                i,
                passwordHash
            )
        );
    }

    return users;
}

module.exports = {
    USER_COUNTS,
    BENCHMARK_USERS,
    GENERATED_USER_PASSWORD,
    PASSWORD_SALT_ROUNDS,
    generatePasswordHash,
    generateUser,
    generateUsers
};