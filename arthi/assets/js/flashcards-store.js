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
            },
            {
                index: 75,
                front: '<h3>A305</h3>',
                back: "<p>Contractor's Qualification Statement</p>" 
            },
            {
                index: 76,
                front: '<h3>G701</h3>',
                back: '<p>Change Order</p>' 
            },
            {
                index: 77,
                front: '<h3>G702</h3>',
                back: '<p>Application and Certificate for Payment</p>' 
            },
            {
                index: 78,
                front: '<h3>G703</h3>',
                back: '<p>Continuation Sheet</p>' 
            },
            {
                index: 79,
                front: '<h3>G704</h3>',
                back: '<p>Certificate of Substantial Completion</p>' 
            },
            {
                index: 80,
                front: '<h3>G711</h3>',
                back: "<p>Architect's Field Report</p>" 
            },
            {
                index: 81,
                front: '<h3>G710</h3>',
                back: "<p>Architect's Supplemental Instructions</p>" 
            },
            {
                index: 82,
                front: '<h3>G714</h3>',
                back: '<p>Construction Change Directive</p>' 
            },
            {
                index: 83,
                front: '<h3>G716</h3>',
                back: '<p>Request for Information</p>' 
            },
            {
                index: 84,
                front: '<h3>Schedule of Values</h3>',
                back: '<p>Breakdown of the contract sum among all portions of the work; agreed upon at contract execution</p>' 
            },
            {
                index: 85,
                front: '<h3>Continuation Sheet</h3>',
                back: '<p>Lists every trade of work, percentages complete, and the amount due</p>' 
            },
            {
                index: 86,
                front: '<h3>Alternate Bid</h3>',
                back: '<p>Amount stated in a bid that can be added or deducted by an owner if the defined changes are made to the plans or specs of the base bid</p>' 
            },
            {
                index: 87,
                front: '<h3>Minimum Waiting Period Between Conflict and Binding Mediation</h3>',
                back: '<p>60 days</p>' 
            },
            {
                index: 88,
                front: '<h3>Clerk of the Works</h3>',
                back: "<p>Architect's full-time site representative (additional service)</p>" 
            },
            {
                index: 89,
                front: '<h3>Prime Agreement</h3>',
                back: "<p>Architect-Consultant contract references the 'prime agreement' (B101) to ensure the consultant's responsibilities align with architect's responsibilities to the owner</p>" 
            },
            {
                index: 90,
                front: "<h3>Spec'd Hazardous Material Responsibility</h3>",
                back: '<p>If contract docs require hazardous materials to be brought on site, owner is responsible, unless contractor is negligent in handling or using them</p>' 
            },
            {
                index: 91,
                front: '<h3>Minor Change in the Work</h3>',
                back: "<p>Ordered by architect alone, provided that the change doesn't impact time or budget</p>" 
            },
            {
                index: 92,
                front: '<h3>Record Drawings (GC)</h3>',
                back: '<p>Copies of all construction drawings, specs, etc, marked to record exactly how the project was built, noting any changes or deviations from the original</p>' 
            },
            {
                index: 93,
                front: '<h3>Contract Documents consist of:</h3>',
                back: '<p>- Contract between owner & contractor (A101)</br>- Conditions of the contract (A201)</br>- Drawings</br>- Specifications</br>- Addenda</br>- Modifications (Change Orders, CCDs, Minor Changes)</p>'
            },
            {
                index: 94,
                front: '<h3>Jurisdictions/Laws covering Disputes</h3>',
                back: '<p>- Project-related claims: state in which project is located</br>- Owner-architect claims: principal place of business of the architect</p>' 
            },
            {
                index: 95,
                front: '<h3>Construction Change Directive</h3>',
                back: '<p>Architect orders the GC to proceed with a change before adjustment in cost or time has been agreed on but must include a cost/time basis (issue may go to mediation later)</p>' 
            },
            {
                index: 96,
                front: '<h3>3 Methods for Determining CCD Adjustment Basis</h3>',
                back: '<p>- Lump sum, itemized and mutually accepted</br>- Unit prices previously agreed to in specifications/bid</br>- Costs to be determined by mutual agreement on a fixed or percentage fee</p>' 
            },
            {
                index: 97,
                front: '<h3>Force Majeure</h3>',
                back: '<p>unforeseeable circumstances that prevent someone from fulfilling a contract</p>' 
            },
            {
                index: 98,
                front: '<h3>Requisition Certificate (6)</h3>',
                back: '<p>- Original contract sum</br>- Changes that have been made</br>- Current contract sum</br>- Summary of work to date</br>- Payments to date</br>- Amount due</p>' 
            },
            {
                index: 99,
                front: '<h3>Notice of Proposed Change</h3>',
                back: '<p>Prepared by architect and sent to contractor; fully describes a change in the work; leads to a Proposed Change Order, then a Change Order</p>' 
            },
            {
                index: 100,
                front: "<h3>Owner's Right to File Claim for Damages</h3>",
                back: "<p>Within GC's warranty period (1 year after substantial completion) Owner must give the GC an opportunity to correct a problem or the Owner waives the right to file a claim for damages</p>" 
            },
            {
                index: 101,
                front: "<h3>Architect's Role with CMa & CMc</h3>",
                back: "<p>Cost estimating is not part of Architect's services with a CMa or CMc (B132/B133)</p>" 
            },
            {
                index: 102,
                front: '<h3>Differences Between CMa & CMc</h3>',
                back: '<p>CMa:</br>- Allows multiple prime contractors</br>- No guaranteed maximum price set by CM</br>- Requires bidding/negotiation phase</p>' 
            },
            {
                index: 103,
                front: '<h3>Add Alternates vs Deduct Alternates</h3>',
                back: '<p>Add is when proposed alternate is more expensive</br>Deduct is when proposed alternate is less expensive</p>' 
            },
            {
                index: 104,
                front: '<h3>Transitional Forms (IPD)</h3>',
                back: '<p>Modeled after existing construction manager agreements; Multi-Party Agreement is a single agreement that can be used to design and construct a project utilizing IPD</p>' 
            },
            {
                index: 105,
                front: '<h3>Agency Review (IPD)</h3>',
                back: '<p>Building code check by AHJs</p>' 
            },
            {
                index: 106,
                front: '<h3>Buyout (IPD)</h3>',
                back: "<p>Selecting suppliers and finalizing prices from remaining subcontractors/vendors that aren't part of the IPD process</p>" 
            },
            {
                index: 107,
                front: '<h3>Detailed Design Documents (IPD)</h3>',
                back: '<p>Design development set</p>' 
            },
            {
                index: 108,
                front: '<h3>Implementation Documents (IPD)</h3>',
                back: '<p>Construction documents set</p>' 
            },
            {
                index: 109,
                front: "<h3>6 Factors Influencing a GC's Bid</h3>",
                back: "<p>- Cost of subcontractor bids</br>- Cost of GC's labor and materials</br>- Equipment rental</br>- GC's indirect costs</br>- Overhead</br>- Profit</p>" 
            },
            {
                index: 110,
                front: '<h3>Unit Prices</h3>',
                back: '<p>Set costs for certain portions of work, based on an individual quantity; provides a basis for cost of changes to the contract</p>' 
            },
            {
                index: 111,
                front: '<h3>Control Estimate</h3>',
                back: '<p>Monitors the project during construction; establishes:</br>- Budget estimate for financing</br>- Budgeted cost after contracting but prior to construction</br>- Estimated cost to completion during the progress of construction</p>' 
            },
            {
                index: 112,
                front: "<h3>How frequent is the Architect's obligation to visit the site during construction?</h3>",
                back: "<p>As appropriate to the stage of the GC's operations</p>" 
            },
            {
                index: 113,
                front: '<h3>Protocol if Architect Observes Site Safety Violation</h3>',
                back: '<p>Violation should be called to attention of both GC and Owner, and followed up w/ a notice in writing; Architect should never suggest how the violation can be corrected</p>' 
            },
            {
                index: 114,
                front: '<h3>Sustainability Plan</h3>',
                back: '<p>Part of contract documents when B101/A201 SP (Sustainable Project) are used; describes:</br>- Targeted sustainable measures</br>- Implementation strategies</br>- Team member roles and responsibilities in achieving sustainability</br>- Details about reviews, testing, or metrics</p>' 
            },
            {
                index: 115,
                front: "<h3>Architect's CA Roles for Sustainable Projects</h3>",
                back: '<p>- Advise and consult w/ Owner about progress of sustainable measures, including changes that may affect sustainability</br>- Respond to RFIs about sustainable features of certain products/materials</br>- Registering the project with the Certifying Authority</br>- Collecting sustainability documentation from Owner/GC and submitting to Certifying Authority</br>- Preparing application for certification and answering questions from Certifying Authority</p>' 
            },
            {
                index: 116,
                front: '<h3>Directed Acceleration</h3>',
                back: '<p>Owner instructs GC to speed up and agrees to pay additional costs; directed through a Change Order</p>' 
            },
            {
                index: 117,
                front: '<h3>Voluntary Acceleration</h3>',
                back: '<p>GC may decide to accelerate the work because it has fallen behind, to collect and early finish bonus, or to move personnel to a new job</p>' 
            },
            {
                index: 118,
                front: '<h3>Constructive Acceleration</h3>',
                back: '<p>When an unavoidable (force majeure) situation occurs that causes a delay, but extra time is neither requested by GC or granted by Owner; GC must find a way to speed up construction or file a claim for damages if extra time is warranted but not given</p>' 
            },
            {
                index: 119,
                front: "<h3>Architect's 4 Submittal Responses</h3>",
                back: '<p>- Approved</br>- Approved w/ changes</br>- Revise and resubmit</br>- Rejected</p>' 
            },
            {
                index: 120,
                front: "<h3>GC's Applications for Payment</h3>",
                back: '<p>Must be received 10 days before date established for payment in O/GC agreement; includes:</br>- Value of work (labor & materials) completed up to date of application</br>- Value of materials purchased and in acceptable storage but not yet incorporated into the work</p>' 
            },
            {
                index: 121,
                front: "<h3>Subcontractor Requests for GC's Completion %</h3>",
                back: '<p>A201 allows Architect to provide the subcontractor with percentages of completion or amounts applied for by the GC if the sub suspects the GC has been paid but they have not</p>' 
            },
            {
                index: 122,
                front: '<h3>Earned Value Management Method (Earned Value Analysis)</h3>',
                back: '<p>Used to determine Schedule of Values; attempts to predict both the time and money (or % of project budget) that is required to complete certain tasks</p>' 
            },
            {
                index: 123,
                front: "<h3>Reasons to Withhold GC's Payment</h3>",
                back: '<p>- Amount of work/materials stored does not match application</br>- Defective work not remedied</br>- 3rd party claims</br>- Failure of GC to make payments to subs</br>- Evidence that work cannot be completed for the unpaid balance of the contract sum</br>- Damage to Owner or another contractor</br>- Evidence that work will not be completed on time</br>- Failure of the GC to carry out work in conformance with the contract documents</p>' 
            },
            {
                index: 124,
                front: "<h3>GC's 8 Submissions Before Final Payment (to Architect)</h3>",
                back: '<p>- Affidavit stating payrolls, materials, and debts for which Owner may be responsible are paid</br>- Certificate showing that insurance remaining in effect after final payment will not be canceled or expired without 30 days notice to Owner</br>- Statement that GC knows no reason insurance will not be renewable</br>- Consent of surety to final payment</br>- Warranties, maintenance contracts, instructions</br>- As-Built drawings, if required</br>- Certificate of Occupancy</br>- Attic stock</p>' 
            },
            {
                index: 125,
                front: "<h3>Owner's Right to Carry out the Work</h3>",
                back: '<p>Owner has the right to carry out the work if the GC fails to correctly do so and to charge these expenses to the GC</p>' 
            },
            {
                index: 126,
                front: '<h3>2 Most Common Claims</h3>',
                back: '<p>- Claims for additional time</br>- Claims for concealed or unknown conditions</p>' 
            },
            {
                index: 127,
                front: "<h3>GC's Project Schedule End Date</h3>",
                back: "<p>GC's schedule ends at Substantial Completion; early completion bonuses or liquidated damages are based on this date</p>" 
            },
            {
                index: 128,
                front: '<h3>Project Closeout</h3>',
                back: '<p>GC begins closeout by notifying Architect in writing and submitting a comprehensive list of items still to be completed or corrected; Architect verifies or adds to the list</p>' 
            },
            {
                index: 129,
                front: '<h3>Attic Stock</h3>',
                back: '<p>Extra materials for future repairs</p>' 
            },
            {
                index: 130,
                front: '<h3>Date of Final Completion</h3>',
                back: "<p>Documented by Architect's issuance of Final Certificate for Payment to GC (Architect's consultants may issue separate certificates of completion for their portions of the work)</p>" 
            },
            {
                index: 131,
                front: '<h3>Punch List</h3>',
                back: '<p>List of items still needing completion; created by GC and maintained by Architect</p>' 
            },
            {
                index: 132,
                front: "<h3>Owner's Project Requirements (OPR)</h3>",
                back: '<p>Summary of critical planning requirements and Owner expectations, used to determine system requirements for commissioning, turns into a BOD</p>' 
            },
            {
                index: 133,
                front: '<h3>Basis of Design (BOD)</h3>',
                back: '<p>Explains how the OPR have been satisfied by the proposed design</p>' 
            },
            {
                index: 134,
                front: '<h3>Commissioning Plan includes (8):</h3>',
                back: '<p>- Description of scope</br>- List of systems to be commissioned</br>- Responsibilities of team members</br>- Schedule</br>- Protocols</br>- Documentation</br>- Test procedures</br>- Checklists</p>' 
            },
            {
                index: 135,
                front: '<h3>Commissioning Report</h3>',
                back: '<p>Summarizes the results of the construction-phase commissioning tests and provides detailed operation and maintenance manuals/instructions for each system</p>' 
            },
            {
                index: 136,
                front: '<h3>Post-Commissioning Testing happens when?</h3>',
                back: '<p>1 year after initial occupancy to verify that systems continue to operate as intended</p>' 
            },
            {
                index: 137,
                front: '<h3>Commissioning Provider or Commissioning Agent (CxP/CxA)</h3>',
                back: '<p>Independent 3rd party who specializes in this service and is hired by the Owner</p>' 
            },
            {
                index: 138,
                front: '<h3>Post-Occupancy Evaluation (POE)</h3>',
                back: '<p>Review of a completed project after the client has occupied it for some time, usually 3-6 months, not a standard service</p>' 
            },
            {
                index: 139,
                front: '<h3>MasterFormat Division 01</h3>',
                back: '<p>General Requirements</p>' 
            },
            {
                index: 140,
                front: '<h3>MasterFormat Division 02</h3>',
                back: '<p>Existing Conditions</p>' 
            },
            {
                index: 141,
                front: '<h3>MasterFormat Division 03</h3>',
                back: '<p>Concrete</p>' 
            },
            {
                index: 142,
                front: '<h3>MasterFormat Division 04</h3>',
                back: '<p>Masonry</p>' 
            },
            {
                index: 143,
                front: '<h3>MasterFormat Division 05</h3>',
                back: '<p>Metals</p>' 
            },
            {
                index: 144,
                front: '<h3>MasterFormat Division 06</h3>',
                back: '<p>Wood, Plastics, and Composites</p>' 
            },
            {
                index: 145,
                front: '<h3>MasterFormat Division 07</h3>',
                back: '<p>Thermal & Moisture Protection</p>' 
            },
            {
                index: 146,
                front: '<h3>MasterFormat Division 08</h3>',
                back: '<p>Openings</p>' 
            },
            {
                index: 147,
                front: '<h3>MasterFormat Division 09</h3>',
                back: '<p>Finishes</p>' 
            },
            {
                index: 148,
                front: '<h3>MasterFormat Division 10</h3>',
                back: '<p>Specialties</p>' 
            },
            {
                index: 149,
                front: '<h3>MasterFormat Division 11</h3>',
                back: '<p>Equipment</p>' 
            },
            {
                index: 150,
                front: '<h3>MasterFormat Division 12</h3>',
                back: '<p>Furnishings</p>' 
            },
            {
                index: 151,
                front: '<h3>MasterFormat Division 13</h3>',
                back: '<p>Special Construction</p>' 
            },
            {
                index: 152,
                front: '<h3>MasterFormat Division 14</h3>',
                back: '<p>Conveying Equipment</p>' 
            },
            {
                index: 153,
                front: '<h3>Retainage</h3>',
                back: '<p>A percentage of the total contract sum withheld from the contractor by the owner until the project is complete; usually 10%</p>' 
            },
            {
                index: 154,
                front: '<h3>A-Series Documents</h3>',
                back: '<p>Owner-Contractor agreements</p>' 
            },
            {
                index: 155,
                front: '<h3>B-Series Documents</h3>',
                back: '<p>Owner-Architect agreements</p>' 
            },
            {
                index: 156,
                front: '<h3>C-Series Documents</h3>',
                back: '<p>Other agreements</p>' 
            },
            {
                index: 157,
                front: '<h3>D-Series Documents</h3>',
                back: '<p>Miscellaneous documents</p>' 
            },
            {
                index: 158,
                front: '<h3>E-Series Documents</h3>',
                back: '<p>Exhibits</p>' 
            },
            {
                index: 159,
                front: '<h3>G-Series Documents</h3>',
                back: '<p>Contract administration & project management forms</p>' 
            },
            {
                index: 160,
                front: '<h3>Parameter Method (Estimating)</h3>',
                back: '<p>Calculates an estimated cost per square foot for many types of materials so that the designer can understand cost implications of each</p>' 
            },
            {
                index: 161,
                front: '<h3>Area Method (Estimating)</h3>',
                back: '<p>Prepared when preliminary design is completed, average cost per unit of program area is used to estimate total cost (i.e. classroom space vs laboratory space), accurate to within 5-15%</p>' 
            },
            {
                index: 162,
                front: '<h3>Assembly Method (Estimating)</h3>',
                back: '<p>Cost estimate is based on major subsystems individually, such as foundations, superstructure, HVAC, etc., accurate to around 10%</p>' 
            },
            {
                index: 163,
                front: '<h3>Conformed Construction Documents</h3>',
                back: '<p>CD set + addenda</p>' 
            },
            {
                index: 164,
                front: '<h3>As-Designed Record Drawings</h3>',
                back: '<p>CD set, addenda, ASIs, change orders, construction change directives, and minor changes in the work</p>' 
            },
            {
                index: 165,
                front: '<h3>As-Constructed Record Drawings</h3>',
                back: '<p>Record of the project as constructed based on information the GC provides, consolidated and issued by Architect</p>' 
            },
            {
                index: 166,
                front: '<h3>7 Items in a Field Report:</h3>',
                back: '<p>- Date & time</br>- Weather & temperature</br>- Estimated % completion</br>- Conformance with schedule +/-- Work in progress</br>- Observations</br>- Action items</p>' 
            },
            {
                index: 167,
                front: "<h3>Pencil Draw Review</h3>",
                back: "<p>When Owner/Architect and GC meet to go over % complete and what to bill on the project prior to the GC fully developing their draw (invoice) for the month</p>" 
            },
            {
                index: 168,
                front: "<h3>Bulletin</h3>",
                back: "<p>Same as an Addendum, but after contract has been awarded</p>" 
            },
            {
                index: 169,
                front: "<h3>Testing, Adjusting, and Balancing (TAB)</h3>",
                back: "<p>3 major steps used to achieve proper operation of HVAC (heating, ventilation, and air conditioning) systems</p>" 
            },
            {
                index: 170,
                front: "<h3>Typical GC Overhead and Profit %</h3>",
                back: "<p>15-40%</p>" 
            },
            {
                index: 171,
                front: "<h3>Architect's Role in Design-Build (As Consultant to Design-Builder)</h3>",
                back: "<p>- If estimating services aren't selected, Architect is only obligated to base the design on the design-build documents, schedule, and budget provided by DB</br>- If DB's estimate exceeds the budget for the Architect's portion of the work, Architect may be entitled to additional compensation for revisions</p>" 
            },
            {
                index: 172,
                front: "<h3>Design-Build Documents</h3>",
                back: "<p>- Project criteria established by the Owner and Design-Builder</br>- Budget established by Design-Builder</p>" 
            },
            {
                index: 173,
                front: "<h3>Total Float</h3>",
                back: "<p>Total of all individual float times added together; does not influence the critical path time interval</p>" 
            },
            {
                index: 174,
                front: "<h3>U-Factor</h3>",
                back: "<p>Coefficient of heat transmittance; lower U-Value = better insulator</p>" 
            },
            {
                index: 175,
                front: "<h3>Solar Heat Gain Coefficient (SHGC)</h3>",
                back: "<p>How much radiation is admitted through a window, higher SHGC = more solar heat</p>" 
            },
            {
                index: 176,
                front: "<h3>Impact Hammer Test</h3>",
                back: "<p>Spring-loaded plunger is snapped against a concrete surface to measure the amount of rebound determining concrete strength</p>" 
            },
            {
                index: 177,
                front: "<h3>Cylinder Test</h3>",
                back: "<p>Sample of concrete is taken from the mix and poured into a test cylinder for analysis in a lab</p>" 
            },
            {
                index: 178,
                front: "<h3>Core Cylinder Test</h3>",
                back: "<p>Core is drilled out of a slab (destructive) and analyzed in a lab</p>" 
            },
            {
                index: 179,
                front: "<h3>Kelly Ball Test</h3>",
                back: '<p>Measures workability by determining the depth to which a 6" diameter metal 30lb weight will sink into fresh concrete</p>' 
            },
            {
                index: 180,
                front: "<h3>Polyethylene Sheet Test</h3>",
                back: "<p>Uses a plastic sheet taped tightly to a concrete floor; after 16 hours the underside of sheet is inspected for moisture</p>" 
            },
            {
                index: 181,
                front: "<h3>Electrical Resistance Test</h3>",
                back: "<p>Determines moisture by measuring electrical conductivity of the concrete between 2 meter probes</p>" 
            },
            {
                index: 182,
                front: "<h3>Quantitative Calcium Chloride Test</h3>",
                back: "<p>Uses calcium chloride sealed under a plastic dome placed on concrete for 60-72 hours; amount of moisture absorbed is measured</p>" 
            },
            {
                index: 183,
                front: "<h3>Hygrometer (Relative Humidity) Test</h3>",
                back: "<p>Measures relative humidity of atmosphere confined adjacent to the concrete floor</p>" 
            },
            {
                index: 184,
                front: "<h3>Efflorescence</h3>",
                back: "<p>White deposit of water-soluble salts on the surface of masonry and sometimes concrete</p>" 
            },
            {
                index: 185,
                front: "<h3>Hydration</h3>",
                back: "<p>Chemical process of hardening concrete when water mixes with cement</p>" 
            },
            {
                index: 186,
                front: "<h3>Segregation</h3>",
                back: "<p>Separation of constituent parts of concrete when dropped too far or moved excessively in the horizontal direction</p>" 
            },
            {
                index: 187,
                front: "<h3>Laitance</h3>",
                back: "<p>Surface deposit of low strength material containing cement and fine aggregates; caused when concrete mixture has too much water</p>" 
            },
            {
                index: 188,
                front: "<h3>Cold-Weather Construction</h3>",
                back: "<p>Construction switches into cold-weather mode at 40°F; concrete can still be poured, but must be heated to stop freezing during pouring and 7 days of hardening; temp sensitive materials such as sealants should not be applied</p>" 
            },
            {
                index: 189,
                front: "<h3>Convenience Substitutions</h3>",
                back: "<p>If GC requests a substitution during construction due to shorter lead-times, etc, benefiting them, they pay the difference of the change order</p>" 
            },
            {
                index: 190,
                front: "<h3>Substitutions Post-Bid</h3>",
                back: "<p>Substitutions are often not accepted after the bid period, Division 1 of specs gives guidelines for when substitutions can be proposed</p>" 
            },
            {
                index: 191,
                front: "<h3>IDM Response Timeframe</h3>",
                back: "<p>IDM must respond within 10 days of notification of a claim by the GC</p>" 
            },
            {
                index: 192,
                front: "<h3>Architect's Basic Services for Project Closeout (5)</h3>",
                back: "<p>- Forwarding documents from GC to Owner</br>- Issuing Certificate of Substantial Completion</br>- Issuing Final Certificate for Payment</br>- Meeting with Owner to determine need for facility operation services</br>- Post-occupancy walk through within 1 year</p>" 
            },
            {
                index: 193,
                front: "<h3>Max Distance of Travel for Fire Extinguishers</h3>",
                back: "<p>75'</p>" 
            },
            {
                index: 194,
                front: "<h3>Coordination Between Separate Contractors</h3>",
                back: "<p>Owner is responsible for coordinating the activities of the Owner's own forces and those of each separate Contractor hired directly by the Owner with the work of the GC</p>" 
            },
            {
                index: 195,
                front: "<h3>Architect vs Consultant's Right to Uncover Work</h3>",
                back: "<p>Consultants may be responsible for site observations, but only the Architect has the contractual right to require work to be uncovered and corrected</p>" 
            },
            {
                index: 196,
                front: "<h3>Issuing Payment for Stored Materials</h3>",
                back: "<p>Payment for stored materials should only be issued if the materials are stored safely ON site, unless otherwise authorized by Owner</p>" 
            },
            {
                index: 197,
                front: "<h3>Responsible Bidder</h3>",
                back: "<p>One capable of performing the work; determined by Owner's values, may have a legal meaning depending on state</p>" 
            },
            {
                index: 198,
                front: "<h3>Responsive Bidder</h3>",
                back: "<p>Submits a bid that satisfies all of the requirements and follows all of the instructions outlined in the bidding documents</p>" 
            },
            {
                index: 199,
                front: "<h3>Certified Value Specialist (CSV)</h3>",
                back: "<p>Works with design team to facilitate explorations into a full range of VE solutions</p>" 
            },
            {
                index: 200,
                front: "<h3>Bid Protest</h3>",
                back: "<p>When a losing bidder challenges the award of the contract for construction to another bidder</p>" 
            },
            {
                index: 201,
                front: "<h3>Letter of Intent (Memorandum of Understanding/Agreement)</h3>",
                back: "<p>Owner may use this to give the successful bidder authorization to begin work before a formal contract has been signed</p>" 
            },
            {
                index: 202,
                front: "<h3>Notice to Proceed</h3>",
                back: "<p>Construction begins with a notice to proceed; Initiated by Owner or Architect on Owner's behalf</p>" 
            },
            {
                index: 203,
                front: "<h3>Action Submittals</h3>",
                back: "<p>Require the approval of the Architect (shop drawings, samples, cut sheets)</p>" 
            },
            {
                index: 204,
                front: "<h3>Informational Submittals</h3>",
                back: "<p>Do not require approval of the Architect (Safety Data Sheets, etc.)</p>" 
            },
            {
                index: 205,
                front: "<h3>Bill of Materials</h3>",
                back: "<p>List of raw materials, sub-assemblies, intermediate assemblies, sub-components, parts and the quantities of each needed to construct the project</p>" 
            },
            {
                index: 206,
                front: "<h3>Quantity Surveyor</h3>",
                back: "<p>Professional with expert knowledge on construction costs and contracts</p>" 
            },
            {
                index: 207,
                front: "<h3>Submittal Schedule</h3>",
                back: "<p>Must be approved by Architect; coordinated and concurrent with construction schedule, also provides a basis for knowing how long substitutions may be proposed</p>" 
            },
            {
                index: 208,
                front: "<h3>Final Change Order</h3>",
                back: "<p>All variables in the value of the work must be reconciled through a final change order including:</br>- Allowances (including contingency)</br>- Alternates</br>- CCDs</br>- Owner-accepted non-conforming work</p>" 
            },
            {
                index: 209,
                front: "<h3>Vapor Barrier Placement</h3>",
                back: "<p>Placed on the warm (interior) side of thermal insulation to prevent water vapor (humidity) from diffusing into the insulation where it could condensed into liquid</p>" 
            },
            {
                index: 210,
                front: "<h3>Bid Shopping</h3>",
                back: "<p>Revealing the sub-bid of one subcontractor to obtain a lower price from another subcontractor</p>" 
            },
            {
                index: 211,
                front: "<h3>Minority/Disadvantaged Business Enterprise</h3>",
                back: "<p>Public authorities might be required to set aside a percentage of a project for minority or disadvantaged business participation</p>" 
            },
            {
                index: 212,
                front: "<h3>Cutting and Patching</h3>",
                back: "<p>Cutting into existing construction to provide for the installation or performance of other work and subsequent fitting and patching required to restore surfaces to their original condition</p>" 
            },
            {
                index: 213,
                front: "<h3>Duration for Bids to be Held Open</h3>",
                back: "<p>Bidder agrees to continue to honor the bid price for a stated period of time; usually 30 days for private, 60-90 days for public</p>" 
            },
            {
                index: 214,
                front: "<h3>Notice of Award</h3>",
                back: "<p>Written notice from the Owner to inform bidders of the Owner's intent to award a contract to the successful bidder</p>" 
            },
            {
                index: 215,
                front: "<h3>Steiner Tunnel Test</h3>",
                back: "<p>Method of testing interior wall and ceiling finishes for ability to support and propagate fire and tendency to emit smoke</p>" 
            },
            {
                index: 216,
                front: "<h3>Concrete Curing Time</h3>",
                back: "<p>Gains most compressive strength in 0-3 days, full strength in 28</p>" 
            },
            {
                index: 217,
                front: "<h3>Grade Stakes</h3>",
                back: "<p>Used to indicate how much cut or fill is required at a specific location to reach finish grade</p>" 
            },
            {
                index: 218,
                front: "<h3>Batter Boards</h3>",
                back: "<p>Temporary supports erected to hold wires that indicate the excavation line for a building site</p>" 
            },
            {
                index: 219,
                front: "<h3>Nanometer</h3>",
                back: "<p>Measures differences in pressure between two spaces</p>" 
            },
            {
                index: 220,
                front: "<h3>Flow Hood</h3>",
                back: "<p>Placed over a register or diffuser to measure output</p>" 
            },
            {
                index: 221,
                front: "<h3>Duct Blower</h3>",
                back: "<p>Fan attached directly to ductwork to check for leaks</p>" 
            },
            {
                index: 222,
                front: "<h3>Blower Door</h3>",
                back: "<p>Fan that mounts to a door frame used to pressurize or depressurize a building to measure air infiltration</p>" 
            },
            {
                index: 223,
                front: "<h3>Sick Building Syndrome</h3>",
                back: "<p>When building occupants exhibit physical symptoms (dizziness, skin irritation, nausea, etc.) for at least 2 weeks; caused by polluted outdoor air, not enough circulation, or mold growth</p>" 
            },
            {
                index: 224,
                front: "<h3>Legionnaire's Disease</h3>",
                back: "<p>Pneumonia caused by bacteria spread through mist, such as from air-conditioning units for large building</p>" 
            },
            {
                index: 225,
                front: "<h3>Submittal Chain of Command</h3>",
                back: "<p>Subcontractors and suppliers > GC > architect > consultants > architect > GC</p>" 
            },
            {
                index: 226,
                front: "<h3>Bid Amount Discrepancy</h3>",
                back: "<p>Bids must be submitted with the amount in words and numbers; when there is a discrepancy, words prevail</p>" 
            },
            {
                index: 227,
                front: "<h3>Pre-bid substitutions must be submitted at least ___ days before receipt of bids</h3>",
                back: "<p>10 days; if accepted Architect must issue addendum to all bidders at least 4 days before receipt of bids</p>" 
            },
            {
                index: 228,
                front: "<h3>Withholding Payment</h3>",
                back: "<p>Architect may withhold all or part of GC's application for payment and must notify the Owner and GC; Architect can also nullify a previous certificate to protect Owner</p>" 
            },
            {
                index: 229,
                front: "<h3>Project Monitoring Chart</h3>",
                back: "<p>Used to predict both time and money needed to complete certain tasks</p>" 
            },
            {
                index: 230,
                front: "<h3>Allowances</h3>",
                back: "<p>Include cost of materials only; GC must include overhead and profit in the overall contract sum</p>" 
            },
            {
                index: 231,
                front: "<h3>Substitutions for Lower-Cost Products</h3>",
                back: "<p>A credit Change Order should be issued to the Owner; however, this only includes the reduction in the price of materials, not GC overhead and profit</p>" 
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

    backToCEStart() {
        this.index = 0;
        this.currentCECard = this.CEcards[this.index];
    },

    shuffleCECards() {
        for (let i = this.CEcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.CEcards[i], this.CEcards[j]] = [this.CEcards[j], this.CEcards[i]];
        }
        this.index = 0;
        this.currentCECard = this.CEcards[this.index];

        this.CEcards.forEach(card => {
            card.index = this.CEcards.indexOf(card)
        })
    },
    
  })
})
