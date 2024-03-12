//backend is sucking mf!!!! for encryption!
//for generate command
//finaly cleared the bugs ,eeshallah 
function home(){
    document.location.href="Context.html";
    
}

function get_info(){
    let text = document.getElementById("text_input").value;         
    var key = document.getElementById("keys").value;
    var decrypted = document.getElementById("decrypted_input");
    console.log(text);
    let textstr = ""
    textstr +=text
    let len = textstr.length

    if( isNaN(key) ){
        console.log("it is not a Number either a string")
        alert("Enter a number in Key field!!")
    }
    else 
    {
        console.log("it is  a number ")
        let txt
    let dec = ''
    let a = 0
    for (txt in textstr){
        
        
        let charcode = textstr.charCodeAt(txt)
        let chr = textstr.charAt(txt)
        console.log("came here txt no  "+txt)
        console.log("came here txtstr  "+chr)
        console.log("charcode:"+charcode)
        let a = ' '
        let b = a.charCodeAt(0)
        console.log("emty string"+b)
        if(charcode == b ){

            dec+=' '

        }

        else if(charcode >='a'.charCodeAt(0) &&  charcode<= "z".charCodeAt(0)){
            
            let charcodestr = Number(charcode)
            let keys = Number(key)
            //our General formula is chr((ord(txt) - m - 65) % 26 + 65)  #here ord is converting char to ASCII value
            //chr is converting the ASCII to Char
            // for ord in JS we use char.charCodeAt(index_value) it will return the ASCII value
            //for chr in JS we use String.fromCharcode(arg)
            // if u need to check any step u can simply open console and check 
            //here i printed console.log() to check my value at any position and for debug 
            
            let keyss = (charcodestr - keys)  //this line is for minisus the charcode and key eg(97-5) like key is 5 ,97 is a #ASCII
            console.log("keyss:"+keyss)
            let convert = (keyss - 97)   
            console.log("convert:"+convert,typeof(convert))
            let modulo =  Number(convert)   
            console.log("modulo:"+modulo,typeof(modulo))
            let divisible = mod(modulo,26)                        
            console.log("modulo:"+divisible,typeof(divisible)) 
            let modulopos = Math.abs(divisible)
            console.log("moidulo positive "+modulopos,typeof(modulopos)) 
            let conversion = modulopos + 97
            console.log("conversion: "+conversion)
            console.log("key: "+key)
            console.log("conversion: "+conversion)
            result = String.fromCharCode(conversion) //it will convert back to char
            console.log("The for lowercase   " + result)
            console.log(result.charCodeAt())
            
            dec +=result //it will add to the string 
        a++
        console.log(a)    

        console.log(dec)  
        console.log("fked heree!")}
        else if(charcode >='A'.charCodeAt(0) &&  charcode<= "Z".charCodeAt(0))
        {
            //here it will be in string so we are explicitly converting to number by using Number()
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr - keys)   //wec need to pass keyss that have been minused with assci 
            convert = (keyss-65)  // %26 + 65)
            let divisible = mod(convert,26)   //it will call the function 
            let asscistart = divisible+65   //assciistart is to add the assci value as per our formula
            result = String.fromCharCode(asscistart)
            console.log("The for uppercase" + result)
            dec +=result
          
        console.log(dec) }
        else if(charcode >='0'.charCodeAt(0) && charcode<='9'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr - keys)
            convert = (keyss-48)  // %26 + 65)
            let divisible = mod(convert,10)   //it will call the function 
            let asscistart = divisible+48   //assciistart is to add the assci value as per our formula
            result = String.fromCharCode(asscistart)
            console.log("The for number:" + result)
            dec +=result
            console.log(dec)
        }  
        else if(charcode >='!'.charCodeAt(0) && charcode<='/'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr - keys)
            convert = (keyss-33)  // %26 + 65)
            let divisible = mod(convert,15)   //it will call the function 
            let asscistart = divisible+33   //assciistart is to add the assci value as per our formula
            result = String.fromCharCode(asscistart)
            console.log("The for special character:" + result)
            dec +=result
            console.log(dec)
        }
        //need to add some the special charactesrs
        else if(charcode >=':'.charCodeAt(0) && charcode<='@'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr - keys)
            convert = (keyss-58)  // %26 + 65)
            let divisible = mod(convert,7)   //it will call the function 
            let asscistart = divisible+58   //assciistart is to add the assci value as per our formula
            result = String.fromCharCode(asscistart)
            console.log("The for specila charachters!:" + result)
            dec +=result
            console.log(dec)
        }
        else if(charcode >='['.charCodeAt(0) && charcode<='`'.charCodeAt(0)){
            let charcodestr = Number(charcode)
            let keys = Number(key)
            let keyss = (charcodestr - keys)
            convert = (keyss-91)  // %26 + 65)
            let divisible = mod(convert,6)   //it will call the function 
            let asscistart = divisible+91   //assciistart is to add the assci value as per our formula
            result = String.fromCharCode(asscistart)
            console.log("The for number:" + result)
            dec +=result
            console.log(dec)
        }
       
        let decry = ""
        decry+=dec
        console.log(decry, typeof(decry))
        decrypted.innerHTML = decry;
        console.log("<>----------------------------------------<>");   
    }

    }
       
   
}
//this function is eeshallah op .Taken From Stackoverflow   XD
var mod = function (n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);  
};

//for clear command
function clear_decry(){
    console.log("Come to clear!!");
    var text = document.getElementById("text_input");
    var key = document.getElementById("keys");

    var decrypted_txt = document.getElementById("decrypted_input")


    text.value='';
    key.value='';
    decrypted_txt.innerHTML = '';
    console.log("Cleared");
    
}
