const common_mixins = {
    data(){
        return {
            form: {}
        }
    },
    methods: {
        layerMsg(msg){
            layui.use('layer', () => {
                layui.layer.msg(msg)   
            })
        },
        layerOpen(opt){
            layui.use('layer', () => {
                layui.layer.open({
                    title: opt.title || '系统提示',
                    content: opt.content || '<p>暂无内容'
                })
            })
        },
        initForm(){
            layui.use('form', function(){
                this.form = layui.form;
            });
        }
    },
}

export default common_mixins