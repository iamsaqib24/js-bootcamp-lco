var user = "";

switch (user) {
    case "testprep":
        console.log("You only access of test");
        break;
    
    case "admin":
        console.log("You have the full access");
        break;

    case "subadmin":
        console.log("You can create courses");
        break;

    case "user":
        console.log("you can consume the content");
        break;

    default:
        console.log("Nothing");
        break;
}