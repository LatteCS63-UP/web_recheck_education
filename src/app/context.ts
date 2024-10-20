import { createContext } from "react";

type ViewOrgPersonInformationType = {
    OrganizationID: number;
    OrganizationPersonID: number;
}

export const ViewOrgPersonInformation_Value = createContext<ViewOrgPersonInformationType | undefined>(undefined);