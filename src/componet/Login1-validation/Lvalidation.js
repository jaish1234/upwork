
const Validation = (val) => {
    let error = {};

    if (!val.name) {
        error.name = "Name Required";
    } else if (val.name.length < 5) {
        error.name = "Name must be more than 5 char";
    }

    if (!val.password) {
        error.password = "password Required";
    } else if (val.password.length < 8) {
        error.password = "password must be more than 8 char";
    }

    return error;
};

export default Validation
