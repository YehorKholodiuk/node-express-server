const names = [];
//let count = 0;
export default function info(req, res) {
    //const a = 123;
    //const b = Math.random();
    //const c = a + b;
    //const a = req.body.a;
    //const b = req.body.b;
    //const sum = a + b;
    names.push(req.body.name);
    res.status(200).json(names);
}

