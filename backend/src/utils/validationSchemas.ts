const createUserValidationSchema = {
    username: {
        isLength: {
            options: { min: 5, max: 32 }
        },
        errorMessage: 'Username must be between 5 and 32 characters long',
        notEmpty: {
            errorMessage: 'Username cannot be empty'
        },
        isString: {
            errorMessage: 'Username must be a string'
        },
    },
    displayName: {
        notEmpty: {
            errorMessage: 'Display name cannot be empty'
        }
    },
    password: {
        notEmpty: true,
    }
}

module.exports = { createUserValidationSchema };