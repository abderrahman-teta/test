//@ts-nocheck
import faker from "faker";

type DropdownItem = {
    label: string; 
    value: string;
}

type DropdownList = Array<DropdownItem>;


interface DropdownListResponse {
    items: DropdownList;
}

const getDropdownItems = (numberOfItems: number = 10): DropdownListResponse => {
    return {
        items: Array(numberOfItems).fill(null).map(item => ({
            label: faker.company.companyName(1),
            value: faker.datatype.uuid()
        }))
    }
}

const LIST_RESPONSE =  getDropdownItems(10);

export default LIST_RESPONSE