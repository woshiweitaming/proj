/**
 * 父级代理
 */
const agentMixins = {
	data(){
		return {
			isShowParent: true
		}
	},
	onLoad(opt){
		if(opt.parentId){
			this.form.parentId = opt.parentId
			this.isShowParent = false
		}else{
			this.isShowParent = true
		}
	}
}

export default agentMixins