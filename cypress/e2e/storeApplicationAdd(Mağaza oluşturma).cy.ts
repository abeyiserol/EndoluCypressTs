import LoginByEmailApi from "../api/login/LoginByEmailApi";
import StoreApplicationAdd from "../api/login/StoreApplicationAdd";
import User from "../models/User";
import Store from "../models/Store";

describe('Store Application Add (Mağaza Oluşturma)', () => {
    
    const login=new LoginByEmailApi();
    const user=new User();
    const store=new Store();
    const add=new StoreApplicationAdd()
    
    it('Login and Token', () => {
        
        login.createToken(user,user.getEmail())
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            store.setToken(response.body.data.token)
            cy.log(response.body.data.token)
        })

    });

    it('Store Add', () => {
        
        add.storeAdd(store)
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body.message).to.equal('Mağaza başvurunuz alındı')
        })

    });

});