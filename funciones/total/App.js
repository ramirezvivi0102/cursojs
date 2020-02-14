//let nombre = " vivian ";
//console.log(nombre) ;

//let dato;
//dato= number ("20");

const producto1 = 'pizza',
    precio1 = 30,
    producto2 = 'hamburgesa ',
    precio2 = 40;

let html;
/*
html = '<ul>' +
    '<li>Orden:'  + producto1 + '</li>' +
    '<li>Precio:' + precio1 +   '</li>' +
    '<li>Orden:'  + producto2 + '</li>' +
    '<li>Precio:' + precio2 + '</li>' +
    '<li>Total:' +(precio1 + precio2) + '</li>' +
    '</ul>'
*/
html =  `
    <ul>
        <li>Orden: ${producto1} </li>
        <li>Precio: ${precio1} </li>
        <li>Orden: ${producto2} </li>
        <li>Precio: ${precio2} </li>


    </ul>
`;
function Total (precio1,precio2){
    return precio1+precio2;
}

document.getElementById('App').innerHTML = html;