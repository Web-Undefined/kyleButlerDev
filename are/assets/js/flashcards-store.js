document.addEventListener('alpine:init', () => {
  Alpine.store('flashcards', {
    cards: [],
    index: 0,
    correct: 0,
    incorrect: 0,
    CEcards: [],

    firstTry() {
        document.querySelectorAll('.business-card').forEach(card => {
            const toggle = () => {
                card.classList.toggle('is-flipped');
                const flipped = card.classList.contains('is-flipped');
                card.setAttribute('aria-pressed', flipped);
                const back = card.querySelector('.card-back');
                if (back) back.setAttribute('aria-hidden', !flipped);
            };

            card.addEventListener('click', toggle);
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
                }
            });
        });
        
        this.CEcards = [
            {
                index: 0,
                front: '<h3>Why would an Owner hire a Construction Manager as Adviser (CMa)?</h3>',
                back: '<p>To assist in project delivery by providing cost estimating, scheduling, and construction contract management services to the Owner</p>' 
            },
            {
                index: 1,
                front: '<h3>Which project delivery limits the role and responsibilities of the Architect during preconstruction?</h3>',
                back: '<p>IPD</p>' 
            },
            {
                index: 2,
                front: '<h3>Competitive bid</h3>',
                back: '<p>Can be public or private and involves more than 1 contractor</p>' 
            },
            {
                index: 3,
                front: '<h3>Negotiated Bid</h3>',
                back: '<p>For privately funded projects, Owner and Architect work with 1 GC to reach a price</p>' 
            },
            {
                index: 4,
                front: '<h3>Who is responsible for cost control in design-build delivery?</h3>',
                back: '<p>The GC (Architect is responsible for controlling cost of design services)</p>' 
            },
            {
                index: 5,
                front: '<h3>Who must approve a proposed substitution? If approved, what is done with the proposal?</h3>',
                back: '<p>Architect. If approved, it becomes an addendum to be included in the bid documents</p>' 
            },
            {
                index: 6,
                front: '<h3>Who is the only party who guarantees by contract all construction costs?</h3>',
                back: '<p>The GC</p>' 
            },
            {
                index: 7,
                front: '<h3>At a public hearing, which two items are announced by the Architect after each bid is opened?</h3>',
                back: '<p>The bid amount and whether the bidder has submitted the required supporting documentation</p>' 
            },
            {
                index: 8,
                front: '<h3>According to B101 (O+A), what form of dispute resolution must be tried before arbitration?</h3>',
                back: '<p>Mediation</p>' 
            },
            {
                index: 9,
                front: '<h3>What other construction delivery method is most similar to the Construction Manager as Constructor (CMc) with regard to the many roles and responsibilities of the Architect?</h3>',
                back: '<p>Design-Bid-Build</p>' 
            },
            {
                index: 10,
                front: "<h3>During agency review, what is the Architect's role in an IPD project?</h3>",
                back: '<p>Working with AHJ to show code compliance related to the BIM model</p>' 
            },
            {
                index: 11,
                front: "<h3>What is the purpose of the Architect's site observation?</h3>",
                back: '<p>- Becoming generally familiar w/ progress and quality of the work & to keep Owner informed</br>- Endeavoring to guard Owner against defects and deficiencies in the work</br>- Determining if the work is progressing in such a way that it will be in accordance w/ CDs when completed</p>' 
            },
            {
                index: 12,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 13,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 14,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 15,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 16,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 17,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 18,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 19,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 20,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 21,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 22,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 23,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 24,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 25,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 26,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 27,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 28,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 29,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 30,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 31,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 32,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 33,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 34,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 35,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 36,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 37,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 38,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 39,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 40,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 41,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 42,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 43,
                front: '<h3></h3>',
                back: '<p></p>' 
            },
            {
                index: 44,
                front: '<h3></h3>',
                back: '<p></p>' 
            }
        ]

        this.currentCECard = this.CEcards[0];
    },

    currentExamType: 'CE',
    setExamType(type) {
        this.currentExamType = type;
    },

    currentCECard: {},
    nextCECard() {
        if (this.index < this.CEcards.length - 1) {
            this.index++;
            this.currentCECard = this.CEcards[this.index];
        }
    },
    previousCECard() {
        if (this.index > 0) {
            this.index--;
            this.currentCECard = this.CEcards[this.index];
        }
    },
    
  })
})
