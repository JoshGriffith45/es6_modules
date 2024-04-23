import Wishlist from "./wishlist";

const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMakePara = document.querySelector("#car-make");
const carModelPara = document.querySelector("#car-model");
const carYearPara = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const wishListUL = document.querySelector("#wishListContainer > ul");

const wishlistVar = new Wishlist();

submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
    carMakePara.textContent = car.make;
    carModelPara.textContent = car.model;
    carYearPara.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
    while (wishListUL.firstChild) {
        wishListUL.firstChild.remove();
    }

    wishlistVar.list.forEach((car) => {
        const tempListItem = document.createElement("li");
        tempListItem.textContent = `${car.make} : ${car.model}`;
        tempListItem.addEventListener("click", () => {
            showCarDetails(car);
        });
        wishListUL.append(tempListItem);
    });
}

function addCar(event) {
    event.preventDefault();
    wishlistVar.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
}

function removeCar() {
    const carId = Number(removeBtn.getAttribute("data-carId"));
    wishlistVar.remove(carId);
    updateDOMList();
    carMakePara.textContent = "";
    carModelPara.textContent = "";
    carYearPara.textContent = "";
    removeBtn.disabled = true;
}