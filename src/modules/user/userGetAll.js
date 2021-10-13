import User from './Model';
export default function userGetAll(req, res) {
User.find({email:'eeeerr.eweew'})
    .limit(1)
    .exec()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json('user get all error');
    });
}
