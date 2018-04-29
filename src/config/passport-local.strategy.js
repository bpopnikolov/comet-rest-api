const LocalStrategy = require('passport-local').Strategy;

const localStrategy = (options, UserService) => {
    return new LocalStrategy(options, async (email, password, done) => {
        const user = await UserService.getUser({
            email,
        });

        if (!user) {
            return done(null, null);
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return done(null, null);
        }

        return done(null, user);
    });
};

module.exports = localStrategy;
