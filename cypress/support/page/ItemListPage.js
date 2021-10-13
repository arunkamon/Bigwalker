class ItemListPage {

    clickFirstItemInPage() {
        return cy.get('.product-item').first().click();
    };
}
export default ItemListPage