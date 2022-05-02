const UserServices= require('../../app/services/UserServices');

describe('Test for UserServices',()=>{
    test('1) Create a new using the UserService',()=>{
        const user = UserServices.create(1,'HéctorBussan',"Héctor");
        expect(user.username).toBe('HéctorBussan');
        expect(user.name).toBe('Héctor');
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    }),
    // test('2) ')

});