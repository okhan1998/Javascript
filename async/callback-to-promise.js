// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000)
        })
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000)
            
        })
    }
    async getUserWithRole(id, password){
        const user = await this.loginUser(id, password);
        const role = await this.getRoles(user);
        return role;
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');


userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(ret => console.log(ret))
.catch(console.log);

userStorage
.getUserWithRole(id, password)
.catch(console.log)
.then(console.log)


