let configData = {
    "components":[{
        "type":"input",
        "attribute":{
            id:'',
            data:{
                placeholder:"用户名"
            }
        }
    },{
        "type":"input",
        "attribute":{
            data:{
                placeholder:"年龄"
            }
        }
    },{
        "type":"select",
        "attribute":{
            data:{
                "options":[{
                    value:'apple', name:'苹果',
                },{
                    value:'pineapple', name:'菠萝',
                },{
                    value:'banana', name:'香蕉',
                }]
            }

        }
    }]
}

export default configData;