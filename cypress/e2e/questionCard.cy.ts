import { quizQuestions } from "../../src/mocks/questionsData";

const numberOfQuestions = quizQuestions.length;

describe('Quiz tests', () => {
    it('Lunch application and verify it is opened on page 1', () => {
        cy.visit('/');
        cy.contains('1');
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="msg"]').should('exist');
    });

    it('Verify next disabled, until answer will not be selected', () => {
        cy.visit('/');
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="msg"]').should('exist');
        cy.get('[data-testid="c"]').click();
        cy.get('[data-testid="msg"]').should('not.exist');
        cy.get('[data-testid="next"]').click();
        cy.contains('2');
    });

    it('Verify first page has "Next" link only', () => {
        cy.visit('/1');
        cy.contains('1');
        cy.get('[data-testid="previous"]').should('not.exist');
        cy.get('[data-testid="next"]').should('exist');
        cy.get('[data-testid="sumbit"]').should('not.exist');
    });

    it('Verify second page has both "Previous" and "Next" links', () => {
        cy.visit('/2');
        cy.contains('2');
        cy.get('[data-testid="previous"]').should('exist');
        cy.get('[data-testid="next"]').should('exist');
        cy.get('[data-testid="sumbit"]').should('not.exist');
    });

    it('Verify last page has both "Previous" and "Submit" links', () => {
        cy.visit(`/${numberOfQuestions}`);
        cy.contains(`${numberOfQuestions}`);
        cy.get('[data-testid="previous"]').should('exist');
        cy.get('[data-testid="next"]').should('not.exist');
        cy.get('[data-testid="submit"]').should('exist');
    });

    it('Select answer and verify it is being selected', () => {
        cy.visit('/');
        cy.get('[data-testid="c"]').invoke('attr', 'class').then((classNames) => {
            expect(classNames).to.include('answer');
        });
        cy.get('[data-testid="c"]').click();
        cy.get('[data-testid="c"]').invoke('attr', 'class').then((classNames) => {
            expect(classNames).to.include('selectedAnswer');
        });
    });

    it('Select answer, move to next page, get back and verify the answer were saved', () => {
        cy.visit('/3');
        cy.contains('3');
        cy.get('[data-testid="a"]').click();
        cy.get('[data-testid="next"]').click();
        cy.contains('4');
        cy.get('[data-testid="previous"]').click();
        cy.contains('3');
        cy.get('[data-testid="a"]').invoke('attr', 'class').then((classNames) => {
            expect(classNames).to.include('selectedAnswer');
        });
    });

    it('Verify user selected all correct answers and got 100 points', () => {
        cy.visit('/');
        cy.get('[data-testid="c"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="a"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="b"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="b"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="c"]').click();
        cy.get('[data-testid="submit"]').click();
        cy.contains('100');
    });

    it('Verify user selected all not correct answers and got 0 points', () => {
        cy.visit('/');
        cy.get('[data-testid="a"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="b"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="c"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="d"]').click();
        cy.get('[data-testid="next"]').click();
        cy.get('[data-testid="a"]').click();
        cy.get('[data-testid="submit"]').click();
        cy.contains('0');
    });

    it('Verify navigation from Scores to root page', () => {
        cy.visit("/scores");
        cy.get('[data-testid="again"]').click();
        cy.contains('1');
    });
});