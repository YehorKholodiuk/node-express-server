import User from './Model';
export default function userRegister(req, res) {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
    });
    //const a = 123;
    //const b = Math.random();
    //const c = a + b;
    //const a = req.body.a;
    //const b = req.body.b;
    //const sum = a + b;
    newUser
        .save()
        .then(() => {
            res.status(200).json('User created');
        })
        .catch(() => {
            res.status(400).json('User not created');
        })
        .finally(() => {
            console.log('END');
        });
}
