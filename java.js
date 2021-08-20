

//  com.comeback.data
Java.perform(function() {
    console.log(123);

    var JSONObjectClass = Java.use("org.json.JSONObject");
    var StringClass = Java.use("java.lang.String");
    var ArrayListClass = Java.use("java.util.ArrayList");
    console.log(12312)
    var hookClass = Java.use('f.e.a.e');
    hookClass.a.overload('java.lang.String').implementation = function(p1){
        console.log("&&&&&&&&&&&&&&&&&");
        console.log(p1);
        var result = this.a(p1);
        console.log('111result ' + result);
        printStack("打印加密字符串堆栈")
        return result;
    }


    var hookClass = Java.use('c.a.a.b.g.e');
    hookClass.a.overload('android.content.Context', 'java.lang.String').implementation = function(p1, p2){
//        console.log("&&&&&&&&&&&&&&&&&");
//        console.log(p1);
        var result = this.a(p1);
//        console.log('111result ' + result);
//        printStack("打印加密字符串堆栈")
        return true;
    }




});



  function printStack(name)
  {
    Java.perform(function ()
    {
        var Exception = Java.use("java.lang.Exception");
        var ins = Exception.$new("Exception");
        var straces = ins.getStackTrace();
        if (straces != undefined && straces != null)
        {
            var strace = straces.toString();
            var replaceStr = strace.replace(/,/g, "\\n");
            console.log("=============================" + name + " Stack strat=======================");
            console.log(replaceStr);
            console.log("=============================" + name + " Stack end=======================\r\n");
            Exception.$dispose();
        }
    });
}