export default class PromiseService {
    getDataAsPromise(data, errorMsg) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.length > 0) {
                    resolve(data);
                } else { 
                    reject(errorMsg);
                }
            }, 1500);
        });
    }
}