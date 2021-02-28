describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
    .then(($el) => {
      expect($el).to.have.value(75);
    });
  });
  
  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
    .then(($el) => {
      expect($el).to.have.value(33);
    })
  });
  
  it('Volume of audio element changes when slider value changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    })
  });
  
  it('Image and sound sources change when party horn radio button selected', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    });
    
  });
  
  it('Volume image changes from 0 to 1 when volume increases', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    });

    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });
    
    
  });

  it('Volume image changes from 1 to 2 when volume increases', () => {
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });

    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });
    
    
  });

  it('Volume image changes from 2 to 3 when volume increases', () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });

    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    });
    
    
  });

  it('Honk button is disabled when textbox input is empty or a non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.have.attr('disabled','disabled');
    });

    cy.get('#volume-number').clear().type('A');
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });

  });

  it('Error is shown when number outside of given range for volume textbox is typed', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').should('have.length', 1);
  });
  
});  
