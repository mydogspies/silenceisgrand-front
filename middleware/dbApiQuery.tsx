export const dbApiQuery: any = async (url: string, method: string) => {
    try {

        // const res = await fetch(url,  {
        //     method: method
        //     // headers: new Headers({
        //     //     'Authorization': 'Bearer ' + token
        //     // })
        // });
        // return await res.json();

        return {
            "success": true,
            "online": false
        }

    } catch (error) {
        const returnError = {
            "success": false,
            "message": "API TIMEOUT"
        }
        console.log('Mydogspies API error: ' + error);
        return returnError;
    }
}
