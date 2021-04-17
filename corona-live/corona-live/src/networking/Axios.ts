import axios from 'axios'

export const request = (
    url: string,
    method: 'POST' | 'GET',
    data: object | number | string,
) => {
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const option = {
        url, method, header, data
    }
    axios(option).then(
        response => console.log(response.data)
    )
}