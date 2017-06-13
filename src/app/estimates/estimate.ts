export class Estimate {
    EstimateId: number;
    EstimateName: string;
    InitiativeId: number;
    InitiativeName: string;
    AddOnCost: number;
    Assumptions: string;
    InScope: string;
    OutOfScope: string;
    CreationDate: Date;
    UpdateDate: Date;
    CreatedBy: number;
    CreatedByName: string;
    UpdatedBy: number;
    UpdatedByName: string;
    ComponentsCount: number;
    Effort: number;
    Cost: number;
    TotalCost: number;

    constructor(
        pEstimateName: string,
        pAssumptions?: string,
        pInScope?: string,
        pOutOfScope?: string
    ) {
        this.EstimateName = pEstimateName;
        this.Assumptions = pAssumptions;
        this.InScope = pInScope;
        this.OutOfScope = pOutOfScope;
        //
        this.CreationDate = new Date();
        this.UpdateDate = this.CreationDate;
        //
        // will need to retrieve the user id through the login
        this.CreatedBy = 1;
        this.UpdatedBy = 1;
    }
}