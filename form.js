function onSubmit(){
    let passWord=document.getElementById("pwd").value;
    let spl=['!','@','#','%','^','&','*','.','?'];
    let num=['1','2','3','4','5','6','7','8','9','0']
    bool=bool1=false
    if(passWord.length <8)
        return false
    else{
        for(let i=0;i<spl.length;i++){
            if(passWord.includes(spl[i])){
                bool=true;
                break;
            }
        }
        for(let i=0;i<num.length;i++){
            if(passWord.includes(num[i])){
                bool1=true;
                break;
            }
        }
    }    
    if(bool && bool1)
       return true
    else
        return false
}