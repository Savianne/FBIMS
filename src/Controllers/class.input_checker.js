// Using Custom String Methods
const CustomStringMethods = require('./class.custom_string_methods');

const customStringMethods = new CustomStringMethods();

const errors = {
    ZERO_INPUT: 'This field can\'t be empty.',
    TOO_SMALL: 'Doesn’t meet the required input length.',
    OVER_FLOW: 'Too many inputs!',
    INVALID_EMAIL: 'Invalid email address!',
    INVALID_DATE: 'Invalid Date!',
    W_PSWRD: 'Wrong Password!',
}

class InputChecker {
    constructor({
        max_len = 1000,
        min_len = 0,
        input_type = 'ALL',
        exclude = null,
    }) {
        this.max_len = max_len;
        this.min_len = min_len;
        this.input_type = input_type;
        this.exclude = exclude;
    }

    errors = errors;

    run(input) {
        return new Promise(async (resolved, reject) => {
            try {
                await this.checklength(input);
                await this.checkEmail(input);

                resolved(input);
            }
            catch(exception) {
                reject({input: input, error: exception});
            }
        })
    }
    

    checkEmail(email) {
        return new Promise((resolved, reject) => {
            if(this.input_type.toUpperCase() == 'EMAIL') {
                if(!(email.includes('@')) || 
                email.indexOf('@') <= 3 || 
                email.split('@').length > 2 ||
                !((customStringMethods.isOnlyAlpha(email[email.indexOf('@') - 1], false)) || (customStringMethods.isOnlyNumeric(email[email.indexOf('@') - 1], false)))||
                !((customStringMethods.isOnlyAlpha(email[email.indexOf('@') + 1], false)) || (customStringMethods.isOnlyNumeric(email[email.indexOf('@') + 1], false)))) {
                    reject(this.errors.INVALID_EMAIL);
                } else {
                    resolved();
                }              
            } else {
                resolved();
            }
        })
    }

    checklength(data) {
        return new Promise((resolved, reject) => {
           if(data.length < this.min_len) return reject(this.errors.TOO_SMALL);
           if(data.length > this.max_len) return reject(this.errors.OVER_FLOW);
           return resolved();
        });
    }

}

module.exports = InputChecker;