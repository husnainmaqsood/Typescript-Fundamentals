
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string;
    pages?: number;
    markDamages?: DamageLogger;
}

interface DamageLogger {
    (reason: string) : void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

export { Book, DamageLogger as Logger, Author, Librarian };