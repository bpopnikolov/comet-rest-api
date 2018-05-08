const LocalStrategy = require('passport-local').Strategy;

const localStrategy = (options, UserService) => {
    return new LocalStrategy(options, async (email, password, done) => {
        const user = await UserService.getUser({
            email,
        });
        if (!user) {
            return done(null, {
                error: 'There is no such a user',
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return done(null, {
                error: 'Wrong email or password!',
            });
        }

        return done(null, user);
    });
};

module.exports = localStrategy;
