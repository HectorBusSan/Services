const User= require('./../models/user');
class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin Bio");
    }
    static getInfo(user){
        let arr = Object.entries(user)
        let array = [arr[0][1],arr[1][1],arr[2][1],arr[3][1]]
        return array;
    }
}
module.exports= UserService;