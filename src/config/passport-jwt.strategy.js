const JwtStrategy = require('passport-jwt').Strategy;

const jwtStrategy = (options, UserService) => {
    return new JwtStrategy(options, async (payload, done) => {
        console.log(payload);
        const user = await UserService.getUserById(payload.user.id);
        console.log('from DB');
        console.log(user);

        if (!user) {
            console.log('didnt find user');
            return done(null, null);
        }
        console.log('user found');
        return done(null, user);
    });
};

module.exports = jwtStrategy;
