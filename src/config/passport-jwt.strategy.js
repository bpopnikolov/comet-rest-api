const JwtStrategy = require('passport-jwt').Strategy;

const jwtStrategy = (options, UserService) => {
    return new JwtStrategy(options, async (payload, done) => {
        const user = await UserService.getUserById(payload.user.id);

        if (!user) {
            return done(null, null);
        }

        return done(null, user);
    });
};

module.exports = jwtStrategy;
