export interface User {
    name: string;
    address: string;
    account: {
        email: string;
        confirm: string;
    }
}