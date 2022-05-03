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
    test("3) Update username",()=>{
        const user = UserServices.create(1,"HectorBussan","Hector");
        UserServices.updateUserName(user,"Héctor");
        expect(user.name).toBe('Héctor');
    });
    // test("4) Give a list of users give me list of usernames",()=>{
    //     const user1= UserServices.create(1,'HéctorBussan1','Héctor');
    //     const user2= UserServices.create(1,'HéctorBussan2','Héctor');
    //     const user3= UserServices.create(1,'HéctorBussan3','Héctor');
    //     const usernames= UserServices.getAllUsernames([user1],[user2],[user3]);
    //     expect(usernames).toContain('HéctorBussan1');
    //     expect(usernames).toContain('HéctorBussan2');
    //     expect(usernames).toContain('HéctorBussan3');
    // })
});