const read = require('readline-sync')
const fs = require('fs')

while (true) {
    console.log("1. Add User");
    console.log("2. Update User");
    console.log("3. Delete User");
    console.log("4. Search User");
    console.log("5. Search By Email");
    console.log("6. View all users");
    console.log("7. Exit");

    let option = read.question('Please select an option: ');
    switch (option) {
        case "1":
            addUser();
            break;
        case "2":
            updateUser();
            break;
        case "3":
            deleteUser();
            break;
        case "4":
            searchUser();
            break;
        case "5":
            searchEmail();
            break;
        case "6":
            viewAllUsers();
            break;
        case "7":
            process.exit(0);
            break;
        default:
            console.log("Invalid option");
    }
}

function updateUser() {
    let userName = read.question('Enter the username: ');
    var fileName = getFileName(userName);

    var userText = fs.readFileSync(fileName, 'utf8');
    var user = JSON.parse(userText);

    console.log("Enter the details or leave it blank");
    let name = read.question("Name: ");
    let email = read.question("Email: ");
    let phone1 = read.question("Phone1: ");
    let phone2 = read.question("Phone2: ");

    user.name = name == "" ? user.name : name;
    user.email = email == "" ? user.email : email;
    user.phone1 = phone1 == "" ? user.phone1 : phone1;
    user.phone2 = phone2 == "" ? user.phone2 : phone2;

    fs.writeFileSync(fileName, JSON.stringify(user));
    console.log("User updated successfully 👍");
}
function searchUser() {

    console.log("enter the username to be searched")

    var username = read.question("Enter the username");

    var fileName = getFileName(username);

    var usertext = fs.readFileSync(fileName, 'utf8');

    var customer = JSON.parse(usertext)

    console.log(customer.name)

    console.log(customer.email)

    console.log(customer.phone1)

    console.log(customer.phone2)

}
function deleteUser() {

    console.log("enter the username to be deleted")

    var username = read.question("Enter the username");

    fs.unlinkSync(`data/${username}.json`);

    console.log('file deleted successfully👍')

}
function searchEmail() {
    console.log("enter the email to be checked")

    var email = read.question("Enter your email:")

    var files = fs.readdirSync('./data/')

    for (i = 0; i < files.length; i++) {

        var data = fs.readFileSync(`./data/${files[i]}`, 'utf-8')

        var obj = JSON.parse(data)



        if (obj.email == email) {

            console.log(obj)

            break

        }
    }
}
function viewAllUsers() {

    console.log("View All Users");

    var files = fs.readdirSync('./data/')

    for (i = 0; i < files.length; i++) {

        var data = fs.readFileSync(`./data/${files[i]}`, 'utf-8')

        var obj = JSON.parse(data)

        console.log(obj)

    }
    console.log(" All Users Printed Successfully👍 ")
}

function addUser() {
    console.log("Add User Selected");
    var user = {
        name: null,
        username: null,
        email: null,
        phone1: null,
        phone2: null,
    };
    user.name = read.question("Name: ");
    user.username = read.question("Username: ")
        .toLowerCase();
    user.email = read.question("Email: ");
    user.phone1 = read.question("Phone1: ");
    user.phone2 = read.question("Phone2");

    let fileName = getFileName(user.username);
    var json = JSON.stringify(user);
    fs.writeFileSync(fileName, json);
}
function getFileName(userName) {
    return `data/${userName}.json`;
}