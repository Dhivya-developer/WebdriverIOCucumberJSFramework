
class helper {
  
     generateMailID(){
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var i = 0; i < 7; i++) {
          string += chars[Math.floor(Math.random() * chars.length)];
        }
        
        var emailID = string + '@gmail.com';
       return emailID;
        
    }

}
export default new helper();