class Utils{
    static trim(str){ 
        if(typeof str !== 'string') return str
        return str.replace(/(^\s*)|(\s*$)/g, ""); 
    }
}

export default Utils