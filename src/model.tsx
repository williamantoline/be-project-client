export interface Note {
    id: string,
    userId: string,
    title: string,
    content: string,
    isLiked: boolean,
    isArchived: boolean,
    createdAt: Date,
    updatedAt: Date
}