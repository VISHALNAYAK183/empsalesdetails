using { employee.db as db } from '../db/schema';

service EmpSalesDetails @(requires: 'authenticated-user'){

    @odata.draft.enabled
    entity Employees as projection on db.Employees;
}