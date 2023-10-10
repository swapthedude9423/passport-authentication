const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/user.js');

const strategy = {
    usernameField: 'email',
    passwordField: 'password'
};

passport.use(
    'signup',
    new localStrategy(strategy,
    async (email, password, done) => {
        try {
            //check if user exists
            const existingUser = await UserModel.findOne({email});
            if(existingUser)
                return done(null,false,{message: 'Email already exists!'});
            const user = await UserModel.create({email, password});
            return done(null,user);
        } catch (error) {
            done(error);
        }
    }
    
    
    )
)

passport.use(
    'login',
    new localStrategy(
        strategy,
        async (email, password, done) => {
            try {
                const user = await UserModel.findOne({email});
                if(!user)
                {    
                    return done(null, false, {message: 'invalid username or password'});  
                }
                
                const validate = await user.isValidPassword(password);
                
                if(!validate){
                    return done(null,false,{message: 'invalid username or password'});
                }

                return done(null, user, {message: 'Logged in Successfully'});

            } catch (error) {
                done(error);
            }
        }
    )
)