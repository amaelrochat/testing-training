"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleIdValue;
    #nameValue;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#articleId = articleId;
        this.quantity = quantity;
        this.price = price;
        this.#name = name;
    }


    get articleId() {
        return this.#articleIdValue;
    }

    get name() {
        return this.#nameValue;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#validateQuantity(value);
        return this.#quantity = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#validatePrice(value);
        return this.#price = value;
    }

    get total() {
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    set #articleId(value) {
        this.#validateArticleId(value);
        return this.#articleIdValue = value;
    }

    set #name(value) {
        return this.#nameValue = value;
    }

    #validateArticleId(articleId) {
        if (articleId >= 1) {
            return articleId;
        }
        else {
            throw new InvalidArticleIdException();
        }
    }

    #validateQuantity(quantity) {
        if (quantity >= 1) {
            return quantity;
        }
        else {
            throw new InvalidQuantityException();
        }
    }

    #validatePrice(price) {
        if (price >= 10) {
            return price;
        }
        else {
            throw new InvalidPriceException();
        }

    }
    //endregion private methods
}



