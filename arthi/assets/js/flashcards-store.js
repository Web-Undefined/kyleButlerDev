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
                front: '<h3>What is the Architect not responsible for during the construction of the project?</h3>',
                back: '<p>- Exhaustive or continuous on-site inspections</br>- Means and methods of construction</br>- Site safety</p>' 
            },
            {
                index: 13,
                front: '<h3>Who pays for additional field testing if the work does not conform with the contract documents?</h3>',
                back: "<p>GC pays to correct the work, subsequent testing, and compensation for Architect's services related to the issue</p>"
            },
            {
                index: 14,
                front: '<h3>During construction, why must the Architect speak directly to the GC and not the subcontractors?</h3>',
                back: '<p>Architect is an agent of the Owner who does not have a contractual relationship with subcontractors</p>' 
            },
            {
                index: 15,
                front: '<h3>Which document defines the lines of communication among parties during CA?</h3>',
                back: '<p>A201 - General Conditions of the Contract for Construction</p>' 
            },
            {
                index: 16,
                front: '<h3>Through whom must the owner and GC communicate during CA?</h3>',
                back: '<p>Architect</p>' 
            },
            {
                index: 17,
                front: "<h3>Who will pay for work to be uncovered when the work was covered contrary to the architect's request?</h3>",
                back: '<p>GC</p>' 
            },
            {
                index: 18,
                front: '<h3>If uncovered work is determined to meet project requirements, and the architect had not previously requested that it remain uncovered, who pays to uncover and replace the work?</h3>',
                back: '<p>Owner</p>' 
            },
            {
                index: 19,
                front: '<h3>Pre-Construction Conference</h3>',
                back: '<p>Organized by Architect; provides design and construction team members with an understanding of project procedures, requirements, due dates, and special characteristics</p>' 
            },
            {
                index: 20,
                front: '<h3>Special Inspections</h3>',
                back: '<p>Required by Ch. 17 IBC, verifies that work is being performed in accordance with AHJ-approved plans and specifications (ex. pre-fab items, steel, concrete, spray-fireproofing)</p>' 
            },
            {
                index: 21,
                front: '<h3>Who prepares the Statement of Special Inspections?</h3>',
                back: '<p>Architect develops, then submits to AHJ officials for review and approval; Owner must hire and pay an independent (not GC) firm to do the inspection work; results are submitted to code officials for approval</p>' 
            },
            {
                index: 22,
                front: '<h3>How is "contract time" defined?</h3>',
                back: '<p>Starts at date established in the agreement and ends at Substantial Completion</p>' 
            },
            {
                index: 23,
                front: '<h3>Which party has sole responsibility for the means and methods of construction?</h3>',
                back: '<p>GC</p>' 
            },
            {
                index: 24,
                front: "<h3>What two parties should each receive a copy of an Architect's field reports?</h3>",
                back: '<p>Owner and GC</p>' 
            },
            {
                index: 25,
                front: '<h3>Name two differences between a Change Order and a Construction Change Directive</h3>',
                back: '<p>- CO must be approved by Owner, Architect, and GC and cost must be agreed upon</br>- CCD must only be agreed upon by Owner and Architect, without all parties agreeing on cost</p>' 
            },
            {
                index: 26,
                front: '<h3>Which party produces an RFI?</h3>',
                back: '<p>GC, Owner, or Architect</p>' 
            },
            {
                index: 27,
                front: '<h3>When is the GC allowed to submit a request for payment of a Construction Change Directive to the Owner on the application for payment?</h3>',
                back: '<p>Upon completion of the work and agreement of the additional cost of work by the Contractor and Owner</p>' 
            },
            {
                index: 28,
                front: '<h3>Name 4 types of submittals the GC must make to the Architect</h3>',
                back: '<p>- Shop drawings</br>- Samples</br>- Product data</br>- Sustainability documents</p>' 
            },
            {
                index: 29,
                front: '<h3>Which document is used to record minor changes in the work?</h3>',
                back: "<p>G710 Architect's Supplemental Instructions</p>" 
            },
            {
                index: 30,
                front: '<h3>If the work does not conform with the contract documents, who has the authority to reject the work?</h3>',
                back: '<p>Architect</p>' 
            },
            {
                index: 31,
                front: "<h3>The Architect's review of shop drawings does not relieve the GC of what?</h3>",
                back: '<p>Conformance with the contract documents</p>' 
            },
            {
                index: 32,
                front: '<h3>During the construction phase, who may make a claim on the project?</h3>',
                back: '<p>Owner or GC may take action if they seek an adjustment to the time or payment of money or other relief from the terms of the contract</p>' 
            },
            {
                index: 33,
                front: '<h3>In a shop drawing review, what are the similarities and differences between the "revise and resubmit" and "rejected" designations assigned by the Architect?</h3>',
                back: '<p>Neither submittal complies with the contract documents as submitted. In the first, the contractor may provide additional information or make corrections and return the submittal to the Architect for review. In the second, an item is unsuitable for use in the project and may not be resubmitted to the Architect for review.</p>' 
            },
            {
                index: 34,
                front: '<h3>Describe the difference in roles between a mediator and an arbitrator</h3>',
                back: '<p>In mediation, this person facilitates a discussion for the parties to reach their own settlement. In arbitration, this person allows the parties to submit their evidence and hears witness testimony before making a decision or ruling on the matter</p>' 
            },
            {
                index: 35,
                front: '<h3>Which party pays for additional non-conformance field testing?</h3>',
                back: '<p>GC</p>' 
            },
            {
                index: 36,
                front: '<h3>What information must be included on every progress payment application?</h3>',
                back: '<p>- Value of the work completed to date</br>- Value of stored material</p>' 
            },
            {
                index: 37,
                front: '<h3>Who pays for work rejected by the Architect?</h3>',
                back: '<p>GC</p>' 
            },
            {
                index: 38,
                front: '<h3>What fee method should be used when the Owner has identified a specific set of services?</h3>',
                back: '<p>Stipulated sum</p>' 
            },
            {
                index: 39,
                front: '<h3>If an Owner fails to substantially perform according to contract, what must an Architect do to terminate the contract?</h3>',
                back: '<p>Give the Owner 7 days written notice</p>' 
            },
            {
                index: 40,
                front: '<h3>When are shop drawings usually prepared?</h3>',
                back: '<p>After the subcontractor or material supplier has signed a contract with the GC</p>' 
            },
            {
                index: 41,
                front: "<h3>Mechanic's Lien</h3>",
                back: '<p>Claim against a property made by a Contractor, material supplier, or Architect for unpaid debt of the Owner</p>' 
            },
            {
                index: 42,
                front: '<h3>What is the advantage to the Owner of using a Construction Change Directive?</h3>',
                back: '<p>Gives the Owner a way to order changes in the work before agreeing to an adjustment to the cost and/or time</p>' 
            },
            {
                index: 43,
                front: "<h3>When does the GC's warranty period start?</h3>",
                back: '<p>Substantial completion</p>' 
            },
            {
                index: 44,
                front: '<h3>What post-construction activity is a prerequisite for LEED certification?</h3>',
                back: '<p>Commissioning of the energy systems</p>' 
            },
            {
                index: 45,
                front: '<h3>What activity must take place if the Architect determines the project is not substantially complete after a site inspection?</h3>',
                back: '<p>Architect must notify the GC of the remaining work</p>' 
            },
            {
                index: 46,
                front: '<h3>What action may the Owner take upon the acceptance of substantial completion by the parties?</h3>',
                back: '<p>Owner may move in or utilize the work for its intended purpose</p>' 
            },
            {
                index: 47,
                front: '<h3>For a large, complex building project, who usually hires the commissioning agent?</h3>',
                back: '<p>Owner</p>' 
            },
            {
                index: 48,
                front: '<h3>What is the next activity after the GC has completed the punch list?</h3>',
                back: '<p>Architect makes an inspection to verify substantial completion</p>' 
            },
            {
                index: 49,
                front: '<h3>If a construction claim is made by the GC, what actions may be taken by the IDM?</h3>',
                back: "<p>- Request supporting data</br>- Suggest a solution</br>- Accept the GC's assertion</br>- Reject the GC's assertion</br>- Notify the parties that a decision cannot be made</p>" 
            },
            {
                index: 50,
                front: '<h3>At the closeout of a project, the GC typically submits 6 items to the Owner (via Architect); what are they?</h3>',
                back: '<p>- Release of liens</br>- Warranties & manuals</br>- Final payment documents</br>- Record (as-built) drawings</br>- C of O</br>- Extra materials</p>' 
            },
            {
                index: 51,
                front: '<h3>Competitive Bidding (Open Bidding)</h3>',
                back: '<p>Contract documents are put out to bid, and successful bidder (usually lowest cost) is awarded the project</p>' 
            },
            {
                index: 52,
                front: '<h3>Value-Based Selection (VBS)</h3>',
                back: '<p>In some jurisdictions, GCs can be selected through this process that considers more than just lowest cost, but also quality, schedule, and personnel</p>' 
            },
            {
                index: 53,
                front: '<h3>Negotiated Bidding</h3>',
                back: '<p>Owner, assisted by Architect, works out a final contract price with one GC (subcontracts may still be competitively bid)</p>' 
            },
            {
                index: 54,
                front: '<h3>Bidder Pre-Qualification Criteria</h3>',
                back: '<p>- Financial qualifications</br>- Personnel</br>- Experience</br>- References</br>- Capacity of firm</br>- Bonding capacity</br>- Method of work (in house/sub out)</p>' 
            },
            {
                index: 55,
                front: '<h3>Invitation to Bid</h3>',
                back: '<p>Sent to pre-qualified contractors only</p>' 
            },
            {
                index: 56,
                front: '<h3>Advertisement for Bid includes:</h3>',
                back: '<p>- Project name and location</br>- Names and addresses of Owner and Architect</br>- Description of project (type, size, principal materials/systems)</br>- When and where bids are due</br>- How bidding documents can be obtained</br>- Type and amount of bid bonds required</br>- Procedures for submitting bids</br>- Whether or not bids will be opened publicly</p>' 
            },
            {
                index: 57,
                front: '<h3>Bid Deposit for Documents</h3>',
                back: '<p>It is general practice to require prospective bidders to put down a deposit on each set of documents they receive</p>' 
            },
            {
                index: 58,
                front: '<h3>Addendum</h3>',
                back: '<p>Written or graphic document issued by the architect during the bid period prior to the execution of the contract that modifies or interprets the bidding documents by addition, deletion, clarification, or correction</p>' 
            },
            {
                index: 59,
                front: '<h3>Issuing Addenda</h3>',
                back: '<p>Addenda must be issued no later than 4 or 5 days prior to receipt of bids</p>' 
            },
            {
                index: 60,
                front: '<h3>Pre-Bid Conference</h3>',
                back: '<p>Meeting where bidders can visit the site, ask questions, and Architect and Owner can emphasize important conditions of the project</p>' 
            },
            {
                index: 61,
                front: '<h3>Bid Log includes:</h3>',
                back: '<p>- Base bid amount</br>- Alternate amounts</br>- Whether receipt of addenda was acknowledged</br>- Made available to bidders in both open and private bidding</p>' 
            },
            {
                index: 62,
                front: '<h3>If all bids exceed project budget:</h3>',
                back: '<p>- Owner may rebid the project (Architect must assist in the bidding process again at no additional charge)</br>- Owner may authorize an increase in the budget</br>- Owner may work with Architect to reduce quality/scope (at no additional cost)</br>- Owner may abandon the project</p>' 
            },
            {
                index: 63,
                front: '<h3>Contract Documents vs Bidding Documents</h3>',
                back: '<p>Bidding documents are NOT part of the contract documents</p>' 
            },
            {
                index: 64,
                front: '<h3>Bidding Documents contain:</h3>',
                back: '<p>- Advertisement or invitation to bid</br>- Instruction to bidders</br>- Forms</br>- Bid security information</br>- Performance bond, if required</br>- Labor and materials bond, if required</p>' 
            },
            {
                index: 65,
                front: '<h3>Bid Security</h3>',
                back: '<p>If successful bidder does not enter into a contract with the Owner, the bid security may be forfeited to compensate for the difference between the low bid and the next lowest bidder</p>' 
            },
            {
                index: 66,
                front: '<h3>Performance Bond</h3>',
                back: '<p>Statement by an insurer that pays for completion of the project in the event that the GC defaults on their obligations</p>' 
            },
            {
                index: 67,
                front: '<h3>Labor and Materials Payment Bond</h3>',
                back: '<p>Guarantees payment for subcontractors and material suppliers in the case of GC default</p>' 
            },
            {
                index: 68,
                front: "<h3>Bidder's Representations</h3>",
                back: '<p>In making a bid, the bidder represents that the documents & specs have been read and understood, the site has been visited, and that the bid is based on the documents without exception</p>' 
            },
            {
                index: 69,
                front: '<h3>After bid is awarded, GC submits...?</h3>',
                back: "<p>- A305 Contractor's Qualification Statement</br>- Summary of work to be performed with GC's own forces</br>- Manufacturers/suppliers of the principal items proposed for the project</br>- Persons/companies proposed to perform major portions of the work</p>"
            },
            {
                index: 70,
                front: '<h3>A101</h3>',
                back: '<p>Standard Form of Agreement Between Owner and Contractor where the basis of payment is a Stipulated Sum</p>' 
            },
            {
                index: 71,
                front: '<h3>A201</h3>',
                back: '<p>General Conditions of the Contract for Construction</p>' 
            },
            {
                index: 72,
                front: '<h3>A701</h3>',
                back: '<p>Instructions to Bidders</p>' 
            },
            {
                index: 73,
                front: '<h3>B101</h3>',
                back: '<p>Standard Form of Agreement Between Owner and Architect</p>' 
            },
            {
                index: 74,
                front: '<h3>C401</h3>',
                back: '<p>Standard Form of Agreement Between Architect and Consultant</p>' 
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
