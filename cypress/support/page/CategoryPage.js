class CategoryPage {

    goToCategoryPage() {
        return cy.get('[data-cy="nav_desktop__shop"]').click();
    };

    clickAllDressesCategory() {
        cy.wait(2000);
        return cy.get('[data-cy="nav_desktop_shops___all__dresses"]').click();
    };
    
    checkPageUrl(){  
    }
}
export default CategoryPage