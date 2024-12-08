class MenuPage {
    
    selectorList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]'
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorList().performanceButton).click()
    }

    accessDashboard(){
        cy.get(this.selectorList().dashboardButton).click()
    }
    

}

export default MenuPage