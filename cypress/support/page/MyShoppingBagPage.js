class MyShoppingBagPage {

    clickOnAddToCartButton() {
        return cy.get(".product-detail-info .product-detail-button .add-cart-button").click();
    };

    clickCartIcon() {
        cy.get('[data-cy="nav_user__cart"]').click()
    };

    getProductInCart() {
        return cy.get(".cart-product");
    }

    getProductImage() {
        return cy.get(".product-image")
    };

    getProductName() {
        return cy.get(".cart-item-info__product-name")
    };

    getProductPrice() {
        return cy.get(".cart-item-info__product-price")
    };

    getItemQuantitySelected() {
        return cy.contains('label', 'Quantity').parent().find('select option:selected')
    };

    adjustQuantity(quantity) {
        return cy.contains('label', 'Quantity').parent().find('select').select(quantity)
    };

    adjustSize(size) {
        return cy.contains('label', 'Size').parent().find('select').select(size)
    };
    getItemSizeSelected() {
        return cy.contains('label', 'Size').parent().find('select option:selected')
    }

    deleteItems() {
        cy.get('.cart-product .cart-remove').click({ multiple: true })
    }

    fillInPromotionCode(promocode) {
        cy.get('[placeholder="Enter Promo Code"]').type(promocode)
    }

    clickApplyButton() {
        cy.get('button').contains('Apply').click()
    }

    clickProceedToCheckoutButton() {
        cy.get('[data-cy="cart__checkout"]').click()
    }


}
export default MyShoppingBagPage
