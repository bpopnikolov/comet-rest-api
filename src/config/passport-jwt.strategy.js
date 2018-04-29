const JwtStrategy = require('passport-jwt').Strategy;

const jwtStrategy = (options, UserService) => {
    return new JwtStrategy(options, async (payload, done) => {
        const user = await UserService.findUserById(payload.user._id);
        console.log(user.email);

        if (!user) {
            console.log('didnt find user');
            return done(null, null);
        }
        console.log('user found');
        return done(null, user);
    });
};

module.exports = jwtStrategy;
