export default class UserService{
    constructor(){
        this.users=[]
    }

    add(user){
        this.users.push(user)
    }
    list (){
        return this.users
    }
    getById (id){
        return this.users.find(u=>u.id===id)
    }

}