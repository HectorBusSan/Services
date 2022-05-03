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
    static updateUserName(user,name){
        user.name= name;
    }
    static getAllUsernames(array){
       let arr1= array[0].username;
       let arr2= array[1].username;
       let arr3 =array[2].username;
       return arr1+ arr2 +arr3
    }
}
module.exports= UserService;