import { getAll, getByID, removeByID, save, getActiveByUserId } from "../models/cartModel.js";

async function getAllCartsAction(request, response) {
  let carts = await getAll();
  response.json(carts);
}

async function getCartByIdAction(request, response) {
  let id = request.params.id;
  let cart = await getByID(id);
  response.json(cart);
}

export async function getActiveCartByUserIdAction(request, response) {
    let id = request.params.id;
    let cart = await getActiveByUserId(id);
    response.json(cart);
}


async function addCartAction(request, response) {
  let jsonObject = readCartFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function updateCartAction(request, response) {
  let jsonObject = readCartFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function deleteCartByIdAction(request, response) {
  let id = request.params.id;
  await removeByID(id);
  response.json();
}

function readCartFromRequest(request) {
  let body = request.body;
  let warenkorbID = body.warenkorbID;
  let userID = body.userID;
  let istAktiv = body.istAktiv;

  return {
    warenkorbID: warenkorbID,
    userID: userID,
    istAktiv: istAktiv,
  };
}

export {
  getAllCartsAction,
  getCartByIdAction,
  addCartAction,
  updateCartAction,
  deleteCartByIdAction,
};
