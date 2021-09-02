export interface Mail{
    _id: string,
    recipient: string[],
    sender: string,
    subject: string,
    body: string,
    date: string,
    readStatus: boolean
}