
const LOGIN_CSS = {
    inputs:  `bg-transparent w-full h-600 outline-none text-white text-preset-mobile-2 sm:text-preset-4 p-100 border-b border-blue-500`,
    inputsError: "border-red-500",
    button: "group w-full flex justify-center h-600 items-center text-preset-4 bg-red-500 hover:bg-white rounded-lg cursor-pointer transition-colors duration-300",
    btnText: "text-white group-hover:text-blue-950",
    form: "mt-8 space-y-6",
    
    loginForm: "min-h-[360px] sm:min-h-[373px]",
    registerForm: "min-h-[425px]",
};
export const LOGIN = {
    LOGIN_FORM: {
        title: 'Login',
        buttonText: 'Login to Your Account',
        linkText: 'Sign Up',
        footerText: 'Don\'t have an account? ',
        linkTo: '/register',
        isLoginForm: true,
        CSS: LOGIN_CSS,
    },
    REGISTER_FORM: {
        title: 'Sign Up',
        buttonText: 'Create Account',
        linkText: 'Login',
        footerText: 'Already have an account? ',
        linkTo: '/login',
        isLoginForm: false,
        CSS: LOGIN_CSS,
    },
};

export type TLogin = typeof LOGIN.LOGIN_FORM;
export type TRegister = typeof LOGIN.REGISTER_FORM;