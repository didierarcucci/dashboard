export class Estimate {
    EstimateId: number;
    EstimateName: string;
    Cost: number;
    AddOnCost: number;
    TotalCost: number;
    Effort: number;
    ComponentsCount: number;
    CreationDate: Date;
    UpdateDate: Date;
    CreatedBy: string;
    UpdatedBy: string;
    Assumptions: string;
    InScope: string;
    OutOfScope: string;
    InitiativeName: string;

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
        this.CreatedBy = 'Didier Arcucci';
        this.UpdatedBy = 'Didier Arcucci';
    }
}