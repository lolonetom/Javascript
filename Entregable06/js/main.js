// Clases
class PlanHosting {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class CertificadoSsl {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


class Carrito {
    constructor(id, ) {
        this.id = id;
        this.plan = [];
    }

    calcularTotal(){
        let total = 0;
        for(let i = 0; i < this.plan.length; i++){
            total = total + parseInt(this.plan[i].precio);
        }
        return total;
    }
}

//Funciones
function renderCard(planhosting) {
    let cardRendered = `
<div class="card m-3" style="width: 18rem;">
    <img src="./images/itembg.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${planhosting.id}.${planhosting.nombre}</h5>
        <p class="card-text">$ ${planhosting.precio}.</p>
    <a href="#" class="btn btn-primary botonDeCompra" id="${planhosting.id}">+</a>
    </div>
</div>
`;
    return cardRendered;
}



let catalogoPlanes = [];

let plan1M = new PlanHosting(1, "Básico - Mensual", "150.00");
let plan2M = new PlanHosting(2, "Negocio - Mensual", "200.00");
let plan3M = new PlanHosting(3, "Avanzado - Mensual", "250.00");
let plan1A = new PlanHosting(4, "Básico - Anual", "1500.00");
let plan2A = new PlanHosting(5, "Negocio - Anual", "2400.00");
let plan3A = new PlanHosting(6, "Avanzado - Anual", "2700.00");


catalogoPlanes.push(plan1M);
catalogoPlanes.push(plan2M);
catalogoPlanes.push(plan3M);
catalogoPlanes.push(plan1A);
catalogoPlanes.push(plan2A);
catalogoPlanes.push(plan3A);


let cardsDiv = document.querySelector("#cards");


catalogoPlanes.forEach(planhosting => {
    /**console.log(planhosting)*/
    cardsDiv.innerHTML += renderCard(planhosting);
})

/*Añadir items al carrito */

let carrito = new Carrito(1);
let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = catalogoPlanes.find(planhosting => planhosting.id == e.target.id);
        carrito.plan.push(productoSeleccionado);
        console.log(carrito);
        console.log(carrito.calcularTotal());
    })
})