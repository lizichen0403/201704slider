//保存到localStorage里
const USERS='users';
export default {
    //保存用户
    saveUser(user){
        user.id=Date.now();
        //先取出上次保存的老用户对象数组
        //把字符串转成对象数组,如果原来没有的话就是空数组
        //把新的数组保存到USERS里
        let usersStr=localStorage.getItem(USERS);
        let users=usersStr?JSON.parse(usersStr):[];
        users.push(user);
        localStorage.setItem(USERS,JSON.stringify(users));
    },
    readUser(){
        let usersStr=localStorage.getItem(USERS);
        return usersStr?JSON.parse(usersStr):[];
    }
}