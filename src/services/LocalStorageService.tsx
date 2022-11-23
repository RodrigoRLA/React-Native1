import EncryptedStorage from 'react-native-encrypted-storage';

cosnt storeLocalData = async (key:string, value:any) => {
    try {
        await EncryptedStorage.setItem(
            key,
            value
        );
    } catch (error) {
        console.log(`Erro ao armazenar dados(key: ${key}) no LocalStorage: ${error}`)
    }
}

cosnt retrieveLocalData = async (key:string) => {
    try {   
        const data = await EncryptedStorage.getItem(key);
    
        if (data !== undefined) {
            return data;
        }
    } catch (error) {
        console.log(`Erro ao recuperar dados(key: ${key}) no LocalStorage: ${error}`)
    }
}

cosnt removeLocalData = async (key:string) => {
    try {
        await EncryptedStorage.removeItem(key);
    } catch (error) {
        console.log(`Erro ao remover dados(key: ${key}) no LocalStorage: ${error}`)
    }
}

export {storeLocalData, retrieveLocalData, removeLocalData};