class ItemDetailPage {

    selectSize() {
        // select only size that not sold out
        cy.get('.pdp__options-container').get('.pdp__options-item').first().as('firstsizebtn') 
        cy.get('@firstsizebtn').click({force : true})
    };

    clickAddToBagButton() {
        cy.contains('Add To Bag').click({force : true})
    };  
}
export default ItemDetailPage