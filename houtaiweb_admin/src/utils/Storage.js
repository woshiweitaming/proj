const LOCAL_PRIMARY_KEY = 'DBS_ADMIN_DES82821_'

/**
 * 本地储存
 */
class Storage{
    //设置数据
    static setLocalData(key, value){
        localStorage.setItem(LOCAL_PRIMARY_KEY + key, value);
    }
    //取出数据
    static getLocalData(key){
        return localStorage.getItem(LOCAL_PRIMARY_KEY + key);
    }
    //移除数据
    static removeLocalData(key){
        return localStorage.removeItem(LOCAL_PRIMARY_KEY + key);
    }
    //清理数据
    static clearLocalData = () => {
        localStorage.clear();
    }
}

export default Storage