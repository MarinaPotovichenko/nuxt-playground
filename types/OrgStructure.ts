interface OrgEmployee {
    _id: number;
    name: string;
    email: string;
}

interface OrgEmployeeGroup {
    _id: number;
    lead: OrgEmployee;
    employees: OrgEmployee[];
}

interface OrgDepartment {
    _id: string;
    guid: string;
    title: string;
    users?: OrgEmployeeGroup;
    child?: OrgDepartment[];
}
