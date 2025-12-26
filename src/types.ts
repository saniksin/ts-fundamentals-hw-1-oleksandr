// TODO: оголоси та експортуй потрібні типи згідно ТЗ:
// - BookId: string
// - Genre: один із літералів "fiction" | "science" | "history" | "fantasy" | "dystopian"
// - LoanStatus: "available" | "borrowed"

type BookId = string;
type Genre = "fiction" | "science" | "history" | "fantasy" | "dystopian";
type LoanStatus = "available" | "borrowed";

export type { BookId, Genre, LoanStatus };