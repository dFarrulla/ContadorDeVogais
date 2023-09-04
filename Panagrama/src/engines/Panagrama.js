import {React} from 'react'
import {Text} from 'react-native'


export const Check = (palavra) => {
    let palavraMinuscula = palavra.toString().toLowerCase();
    let palavraSemEspaco = palavraMinuscula.replace(/ /g,'');
    let arrayPalavra = Array.from(palavraSemEspaco);
    let arrayPalavraSort = arrayPalavra.sort();

    let resultado = "É panagrama";
    for(i=0; i<arrayPalavraSort.length-1; i++){
        if(arrayPalavraSort[i+1].charCodeAt(0) - arrayPalavraSort[i].charCodeAt(0)>=2){
            resultado="Não é panagrama";
            break;
        }
    }
    return(
            <Text>
                {resultado}
            </Text>
        );
};