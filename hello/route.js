/**
 * Created by ysm on 2017/3/7.
 */

export const Hello = (store) => ({
    path: "hello",
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const welcome = require('./Hello').default;
            cb(null, welcome)
        }, 'hello')
    }
});
