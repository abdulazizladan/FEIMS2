export interface Notification{
    _id: string,
    sender: string,
    recipient: string[],
    subject: string,
    body: string,
    date: Date
}