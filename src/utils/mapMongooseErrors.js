export const mapMongooseErrors = (error) => {
    let displayError = '';
    console.log('error------', error.error);
    if(error.error.includes('email')) {
        displayError = 'Invalid email format!'
    } else if (error.error.includes('Password')) {
        displayError = error.error;
    } else if (error.error.includes('fullName')) {
        displayError = 'Full Name must be up to 25 characters!'
    } else if (error.error.includes('credentials')) {
        displayError = error.error
    } else {
        displayError = 'An error occurred!'
    }
    return displayError;
}
