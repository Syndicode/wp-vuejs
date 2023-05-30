const coach = [
    {
        title: 'Basic information',
        fields: [
            {
                type: 'text',
                label: 'First name',
                name: 'first-name',
                isRequired: true,
                model: 'firstName',
            },
            {
                type: 'text',
                label: 'Last name',
                name: 'last-name',
                isRequired: true,
                model: 'lastName'
            },
            {
                type: 'date',
                label: 'Birthday',
                name: 'birthday',
                isRequired: true,
                model: 'birthday'
            },
            {
                type: 'text',
                label: 'Address',
                name: 'address',
                isRequired: true,
                model: 'address',
                cssModifier: 'full'
            },
            {
                type: 'text',
                label: 'Town/City',
                name: 'town',
                isRequired: true,
                model: 'town',
            },
            {
                type: 'text',
                label: 'State',
                name: 'state',
                isRequired: true,
                model: 'state',
            },
            {
                type: 'text',
                label: 'ZIP Code',
                name: 'zip-code',
                isRequired: true,
                model: 'zipCode',
            },
        ],
    },
    {
        title: 'Login information',
        fields: [
            {
                type: 'text',
                label: 'Login',
                name: 'login',
                isRequired: true,
                model: 'login',
            },
            {
                type: 'email',
                label: 'Email',
                name: 'email',
                isRequired: true,
                model: 'email',
                cssModifier: 'full'
            },
            {
                type: 'password',
                label: 'Password',
                name: 'password',
                isRequired: true,
                model: 'password'
            },
            {
                type: 'password',
                label: 'Password repeat',
                name: 'password-repeat',
                isRequired: true,
                model: 'passwordRepeat'
            },
        ],
    },
];

const parent = [
    {
        title: 'Basic information',
        fields: [
            {
                type: 'text',
                label: 'First name',
                name: 'first-name',
                isRequired: true,
                model: 'firstName',
            },
            {
                type: 'text',
                label: 'Last name',
                name: 'last-name',
                isRequired: true,
                model: 'lastName'
            },
        ],
    },
    {
        title: 'Login information',
        fields: [
            {
                type: 'text',
                label: 'Login',
                name: 'login',
                isRequired: true,
                model: 'login',
            },
            {
                type: 'email',
                label: 'Email',
                name: 'email',
                isRequired: true,
                model: 'email',
                cssModifier: 'full'
            },
            {
                type: 'password',
                label: 'Password',
                name: 'password',
                isRequired: true,
                model: 'password'
            },
            {
                type: 'password',
                label: 'Password repeat',
                name: 'password-repeat',
                isRequired: true,
                model: 'passwordRepeat'
            },
        ],
    },
];

const admin = [
    {
        title: 'Login information',
        fields: [
            {
                type: 'text',
                label: 'Login',
                name: 'login',
                isRequired: true,
                model: 'login',
            },
            {
                type: 'email',
                label: 'Email',
                name: 'email',
                isRequired: true,
                model: 'email'
            },
            {
                type: 'password',
                label: 'Password',
                name: 'password',
                isRequired: true,
                model: 'password'
            },
            {
                type: 'password',
                label: 'Password repeat',
                name: 'password-repeat',
                isRequired: true,
                model: 'passwordRepeat'
            },
        ],
    },
];

let formFields = {
    coach,
    parent,
    admin,
};

export default formFields;
