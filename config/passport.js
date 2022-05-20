const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt

module.exports = passport.use(
    new jwtStrategy(
        {
            jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), 
            secretOrKey: process.env.SECRETORKEY,
        },
        (payload, done) => {
        if(!!payload.username && !!payload.password && payload.username === process.env.AEUSERNAME && payload.password === process.env.AEPASSWORD){
            return done(null, payload)
        } else {
            return done(null, false)
        }

        }
    )
)