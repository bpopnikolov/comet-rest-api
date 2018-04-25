const LocalStrategy = require('passport-local').Strategy;

const localStrategy = (options, UserService) => {
    return new LocalStrategy(options, async (email, password, done) => {
        const user = await UserService.getUser({
            email,
        });

        if (!user) {
            return done(null, null, {
                error: 'Login failed. Please try again.',
            });
        }

        const isMatch = user.comparePassword(password);

        if (!isMatch) {
            return done(null, null, {
                error: 'Login failed. Please try again.',
            });
        }

        return done(null, user);
    });
};

module.exports = localStrategy;
