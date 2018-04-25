const JwtStrategy = require('passport-jwt').Strategy;

const jwtStrategy = (options, UserService) => {
    return new JwtStrategy(options, async (payload, done) => {
        const user = await UserService.findUserById(payload.user._id);

        if (!user) {
            return done(null, null);
        }
        return done(null, user);
    });
};

module.exports = jwtStrategy;
