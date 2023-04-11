/* Controle de Fluxo - Condicionais - Switch Case */

/* Posso ter diversas cases dentro do meu switch com os valores diferentes, mas só entra na case que for do mesmo valor. Caso, tenha um valor que não apareça em nenhuma case, posso criar uma case de default, pois assim toda vez que passar pelas cases e não encontrar o valor, ele entra na case default */

const temperature = 39

switch (temperature) {
    case 33,34,35:
        console.log('Temperatura muito Baixa, favor procure um médico com urgência')
    break;
    case 36,37:
        console.log('Temperatura está normal')
    break;
    case 38,39:
        console.log('Temperatura febril, favor tome um dipirona')
    break;
    case 40:
        console.log('Temperatura muito Alta, favor procure um médico com urgência')
    break;            

    default:
        console.log('Nada encontrado')
    break;
}

const bool = true

switch (bool) {
    case true:
        console.log('it is true')
    break;
    case false:
        console.log('it is not')
    break;
}