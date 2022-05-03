const UserServices= require('../../app/services/UserServices');

describe('Test for UserServices',()=>{
    test('1) Create a new using the UserService',()=>{
        const user = UserServices.create(1,'HéctorBussan',"Héctor");
        expect(user.username).toBe('HéctorBussan');
        expect(user.name).toBe('Héctor');
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    }),
    test('2) Get all user data a list',()=>{
        const user = UserServices.create(1,'HéctorBussan','Héctor');
        const userInfoInList= UserServices.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe('HéctorBussan');
        expect(userInfoInList[2]).toBe('Héctor');
        expect(userInfoInList[3]).toBe('Sin Bio');
    })
    // test("3)",()=>{

    // })
});