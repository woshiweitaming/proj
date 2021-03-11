class TabMenu {
    constructor(menuList){
        this.menuList = menuList
        this.tabList = []
    }
    /**
     * 移除Tab数据
     * @param {path} string 移除的数据 
     */
    remove(path){
        if(this.tabList.length === 1) return {
            data: this.tabList,
            curPathIndex: 0
        }
        const isExist = this.tabList.findIndex(res => {
            return res.path === path
        })
        if(isExist < 0 || isExist === 'undefined'){
            return this.tabList
        }else{
            this.tabList.splice(isExist, 1)
        }
        return {
            data: this.tabList,
            curPathIndex: isExist - 1 < 0 ? 0 : isExist - 1
        }
    }
    /**
     * 添加项目
     * @param {path} string 添加的数据 
     */
    add(path){
        const isExist = this.tabList.filter(res => {
            return res.path === path
        })
        if(isExist.length > 0) return this.tabList
        const _obj = {}
        this.menuList.forEach((items, index) => {
            if(items.path === path){
                _obj.name = items.name
                _obj.path = items.path
            }else{
                items.children.forEach((el, key) => {
                    if(el.path === path){
                        _obj.name = el.name
                        _obj.path =  el.path
                    }
                })
            }
        })
        this.tabList.push(_obj)
        return this.tabList
    }
    /**
     * 添加子项目
     * @param {name} string 添加的数据 
     * @param {path} string 添加的数据 
     */
    addSub(name, path){
        const res = this.tabList.filter(res => {
            return res.name === name
        })
        if(res.length !== 0) return this.tabList
        this.tabList.push({name: name, path: path})
        return this.tabList
    }
}

export default TabMenu