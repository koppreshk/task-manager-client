class ServiceClient {
    private serverURL: string | undefined;

    constructor() {
        this.serverURL = process.env.REACT_APP_REST_SERVER_URL
    }

    public getData = (path: string) => {
        return fetch(`${this.serverURL}${path}`)
    }
    public postData = (path: string, method: 'POST' | 'PATCH', body: object) => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return fetch(`${this.serverURL}${path}`, {
            method,
            headers,
            body: JSON.stringify(body)
        })
    }

    public deleteData = (path: string) => {
        return fetch(`${this.serverURL}${path}`, {
            method: 'DELETE',
        })
    }
}

export const useServiceClient = () => new ServiceClient();