function validaErro(arr, num){

try{
    if(!arr && !num) throw new ReferenceError("Envie os parametros");
    
    if(typeof arr !== 'object') throw new TypeError("Não é do tipo objeto");
    
    if(typeof num !== 'number') throw new TypeError("Não é do tipo number");
    
    if(arr.length !== num) throw new RangeError('Tamanho inválido');

    return arr
}catch(e){

    if(e instanceof ReferenceError){
        console.log('ReferenceError')
        console.log(e.message)
    }else if(e instanceof TypeError){
        console.log('TypeError')
        console.log(e.message)
    }else if(e instanceof RangeError){
        console.log('RangeError')
        console.log(e.message)
    }else {
        console.log('Tipo de erro não esperado: ', e)
    }
    }
}


console.log(validaErro([],4))

