window.onload=function(){
    let Sum=document.getElementById('inp-sum');
    let inpSum=Sum.querySelectorAll("input[type=text]");
    let SumRes=document.getElementById('sumRes');
    let base=document.getElementById('base');
    let dailyWork=document.getElementById('dailyWork');
    let weekWork=document.getElementById('weekWork');
    let yearsGrade=document.getElementById('yearsGrade');
    let slpOut=document.getElementById('slpOut');
    let fullMonth=document.getElementById('fullMonth');
    let socialSecurity=document.getElementById('socialSecurity');
    let SocialInsuranceFunds=document.getElementById('SocialInsuranceFunds');
    var list=[];
    class SumFinalRes{
        constructor(){
        }
        WorringEvents(currentValue) {
           this.value=currentValue;
            if(this.value==""||this.value===undefined||this.value<0||isNaN(parseFloat(this.value))){
                document.getElementById('demoShowTip').innerText="您输入的内容有误，请从新输入!"
            }else{
               document.getElementById('demoShowTip').innerText="请输入完成后点击计算按钮!" 
            }
          }
          sum(){
            let daily=Number(parseFloat(base.value)/21.75/8);
            let sum=(parseFloat(base.value))+(daily*parseFloat(dailyWork.value)*1.5)+(daily*parseFloat(weekWork.value)*2)+(parseFloat(yearsGrade.value))+(parseFloat(slpOut.value))+(parseFloat(fullMonth.value))-(parseFloat(socialSecurity.value))-(parseFloat(SocialInsuranceFunds.value));
            if(isNaN(sum)){
                return 0;
            }
            return parseFloat(sum);
          }
          pushItems(){
              for(let i=0;i<inpSum.length;i++){
                 list[i]=inpSum[i].value;

              }
              return list;
              
          }
     }
     for(let m=0;m<inpSum.length;m++){
        inpSum[m].oninput=function(){
         new SumFinalRes().WorringEvents(this.value);
           return;
        }

     }
     base.onblur=function(){
       new SumFinalRes().WorringEvents(this.value);
       // this.style.border="3px solid yellow";
    };
    dailyWork.onblur=function(){
        new SumFinalRes().WorringEvents(this.value);
        // this.style.border="3px solid yellow";
        
     };
     weekWork.onblur=function(){
        new SumFinalRes().WorringEvents(this.value);
        // this.style.border="3px solid yellow";
      
     };
     yearsGrade.onblur=function(){
        new SumFinalRes().WorringEvents(this.value);
        // this.style.border="3px solid yellow";
      
     };
     slpOut.onblur=function(){
        new SumFinalRes().WorringEvents(this.value);
        // this.style.border="3px solid yellow";
        //
     };
     fullMonth.onblur=function(){
        new SumFinalRes().WorringEvents(this.value);
        // this.style.border="3px solid yellow";
        //
     };
     socialSecurity.onblur=function(){
        new SumFinalRes().WorringEvents(this.value);
        // this.style.border="3px solid yellow";
       
     };
     SocialInsuranceFunds.onblur=function(){
        new SumFinalRes().WorringEvents(this.value);
        // this.style.border="3px solid yellow";
        //
     };
     SumRes.onclick=function(){
        new SumFinalRes().pushItems();
        // console.log(new SumFinalRes().pushItems());
        for(let j=0;j<list.length;j++){
            if(list[j]==""||list[j]<=0||isNaN(parseFloat(list[j]))){
                document.getElementById('demoShowTip').innerText="您输入的内容有误，请从新输入!";
                return false;
            }else{
                new SumFinalRes().sum();
                // alert(new SumFinalRes().sum());
                document.getElementById('demoShowTip').innerText="您本月的工资为："+new SumFinalRes().sum()+"元!";
                return true;
            }
        }
     }
//     function sum(){
//     let daily=Number(parseFloat(base.value)/21.75/8);
//     let sum=(parseFloat(base.value))+(daily*parseFloat(dailyWork.value)*1.5)+(daily*parseFloat(weekWork.value)*2)+(parseFloat(yearsGrade.value))+(parseFloat(slpOut.value))+(parseFloat(fullMonth.value))-(parseFloat(socialSecurity.value))-(parseFloat(SocialInsuranceFunds.value));
//     if(isNaN(sum)){
//         return 0;
//     }
//     return parseFloat(sum);
//    }
//    function innerTips(){
//     document.getElementById('demoShowTip').innerHTML="请输入正确的内容!"
//    }
   
};
