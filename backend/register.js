const { User } = require('./helper');

const args = process.argv;
const username = args[2];
const password = args[3];
const email = args[4];

if (username && password && email) {

    (async () => {

        try {
            const result = await User.register(username, password, email);
            if (result) {
                console.log("Registration successful");
            } else {
                console.log("Registration was not successful");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }

    })();

} else {
    console.log("Please provide all inputs");
    console.log("Usage: node ./backend/register.js <username> <password> <email>");
}
