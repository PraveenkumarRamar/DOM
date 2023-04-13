function createEle (tagn,attrn,attrv,cont){
    let ele = document.createElement(tagn);
    ele.setAttribute(attrn,attrv);
    // ele.setAttribute(attrn1,attrv1);
    ele.innerHTML = cont;
    return ele;

}

function createInput(tagn,attrn,attrv,attrn1,attrv1){
    let ele = document.createElement(tagn);
    ele.setAttribute(attrn,attrv);
    ele.setAttribute(attrn1,attrv1);
    // ele.innerHTML = cont;
    return ele;
}

function createBreak(tagn){
    let ele = document.createElement(tagn)
    return ele
}


var label1 = createEle("label","for","firstName","FirstName");
var break1 = createBreak("br");
var input1 = createInput("input","type" , "name","id" ,"firstName");
var break2 = createBreak("br");
var label2 = createEle("label","for","middleName","MiddleName");
var break3 = createBreak("br");
var input2 = createInput("input","type" , "name","id" ,"middleName")
var break4 = createBreak("br")
var label3 = createEle("label","for","lastName","LastName");
var break5 = createBreak("br");
var input3 = createInput("input","type" , "name","id" ,"lastName")
var break6 = createBreak("br")
var label4 = createEle("label","for","email","E-mail Address");
var break7 = createBreak("br");
var input4 = createInput("input","type" , "email","id" ,"email")
var break8 = createBreak("br")
var label5 = createEle("label","for","state","State");
var break9 = createBreak("br");
var input5 = createInput("input","type" , "name","id" ,"state")
var break0 = createBreak("br")
// var div = createEle("div","class" , "main" ,"Hi Praveen : )");


document.body.append(label1,break1,input1,break2,label2,break3,input2,break4,label3,break5,input3,break6,label4,break7,input4,break8,label5,break9,input5,break0)
