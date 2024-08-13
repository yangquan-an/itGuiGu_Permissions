// 按钮权限
export const isButton = (app:any) =>{
    // 自定义按钮权限
    app.directive('has',{
        mounted(el:any,options:any) {
            if(options.value == 'add'){
                el.parentNode.removeChild(el)
            }
        },
    })
}