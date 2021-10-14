class ItemListPage {

    clickFirstItemInPage() {
        cy.wait(2000);
        return cy.get('.product-item').first().click();
    };
}
export default ItemListPage