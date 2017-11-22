export interface ApiResponse<T> {
    wasSuccessful: boolean,
    message?: string,
    data?: T
}
