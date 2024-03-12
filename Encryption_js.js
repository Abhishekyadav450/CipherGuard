//backend is sucking mf!!!! for encryption!
//for generate command
//kindly ignore the console.log ,I used to check My values are correct and for debugging!!
function home(){
    document.location.href="Context.html";
   
}

function get_info(){
    let text = document.getElementById("text_input").value;
    var key = document.getElementById("keys").value;
    var encrypted = document.getElementById("encrypted_input");
    console.log(text);
    let textstr = ""
    textstr +=text
    let len = textstr.length

    //it is used to check the key part is Number or not
    if( isNaN(key) ){   
        console.log("it is not a Number either a string")
        alert("Enter a number in Key field!!")
    }
    else 
    {
        console.log("it is  a number ")
        let txt
    let enc = ''
    let a = 0
    for (txt in textstr){
        
        
        let charcode = textstr.charCodeAt(txt)
        let chr = textstr.charAt(txt)
        console.log("came here txt no  "+txt)
        console.log("came here txtstr  "+chr)
        console.log("charcode"+charcode)
        let a = ' '
        let b = a.charCodeAt(0)
        console.log("emty string"+b)
        if(charcode == b ){

            enc+=' '

        }

        else if(charcode >='a'.charCodeAt(0) &&  charcode<= "z".charCodeAt(0)){
            
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr + keys)
            console.log("keys:"+keyss)
            let convert = ((keyss - 97) % 26 + 97)
            console.log("key:"+key)
            console.log("convert:"+convert)
            result = String.fromCharCode(convert)
            console.log("The for lowercase   " + result)
            console.log(result.charCodeAt())
            
            enc +=result
        a++
        console.log(a)    

        console.log(enc)  
        console.log("fked heree!")}
        else if(charcode >='A'.charCodeAt(0) &&  charcode<= "Z".charCodeAt(0))
        {
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr + keys)
            convert =( (keyss-65)%26 + 65)
            result = String.fromCharCode(convert)
            console.log("The for uppercase" + result)
            enc +=result
          
        console.log(enc) }
        else if(charcode >='0'.charCodeAt(0) && charcode<='9'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr + keys)
            convert =( (keyss-48)%10 + 48 )
            result = String.fromCharCode(convert)
            console.log("The for number:" + result)
            enc +=result
            console.log(enc)
        }  
        else if(charcode >='!'.charCodeAt(0) && charcode<='/'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr + keys)
            convert =( (keyss - 33)%15 + 33 )
            result = String.fromCharCode(convert)
            console.log("The for number:" + result)
            enc +=result
            console.log(enc)
        }
        //need to add some the special charactesrs
        else if(charcode >=':'.charCodeAt(0) && charcode<='@'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr + keys)
            convert =( (keyss - 58)%7 + 58 )
            result = String.fromCharCode(convert)
            console.log("The for number:" + result)
            enc +=result
            console.log(enc)
        }
        else if(charcode >='['.charCodeAt(0) && charcode<='`'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr + keys)
            convert =( (keyss - 91)% 6 + 91 )
            result = String.fromCharCode(convert)
            console.log("The for number:" + result)
            enc +=result
            console.log(enc)
        }
       
        let encry = ""
        encry+=enc
        console.log(encry, typeof(encry))
        encrypted.innerHTML = encry;
        console.log("<>----------------------------------------<>");   
    }

    }
    
   // let test = a(text,key) here we are calling the function!
   // console.log(test);
    
    
  
    
}

//for clear command
function clear_encry(){
    console.log("Come to clear!!");
    var text = document.getElementById("text_input");
    var key = document.getElementById("keys");

    var encrypted_txt = document.getElementById("encrypted_input")


    text.value='';
    key.value='';
    encrypted_txt.innerHTML = '';
    console.log("Cleared");
    
}
