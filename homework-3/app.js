var fs = require('fs');
var superagent=require('superagent');

module.exports.execute = function(option) {
      var eval = new Evaluation(option);
      eval.init();
};

function Evaluation(option)
{
     this.option = option;

}

 Evaluation.prototype.init = function() {

 if (this.option.math) 
     if(this.option.save)
       this.write();
      else
        this.math();

else
  if (this.option.trivia) 
     if(this.option.save)
        this.write();
     else
        this.trivia();
  else            
  if(this.option.date)
     if(this.option.save)
         this.write();
     else
         this.date();
      
};


           
 Evaluation.prototype.math=function()
{
   superagent.get('http://numbersapi.com/'+this.option.math+'/math?json=true/')
  .end(function (err, response) {
        console.log('Math :'+ response.body.text);
       });
}


Evaluation.prototype.trivia=function()
{
  superagent.get('http://numbersapi.com/'+this.option.trivia+'/trivia?json=true/')
    .end(function (err, response) {
        console.log('Trivia : '+ response.body.text);
      });
    }

 Evaluation.prototype.date=function()
{
   var type='year';
    try{
          if(this.option.date.includes('/'))
                  type='date';
      }catch(error){}
              
    superagent.get('http://numbersapi.com/'+this.option.date+'/'+type+'?json=true/')
    .end(function (err, response) {
              
    console.log(type+' : '+ response.body.text);
    });}
             
            

Evaluation.prototype.write=function()
{
 
  var rescult;
  
  var type='';
  var url='http://numbersapi.com/';
 
  if(this.option.math!==undefined)
    url+=this.option.math+'/math?json=true/';
  else
    if(this.option.trivia!==undefined)
      url+=this.option.trivia+'/trivia?json=true/';
    else{ 

          try
          {
            if(this.option.date.includes('/'))
              url+=this.option.date+'/date?json=true';
          }catch(err)
          {
          url+=this.option.date+'/year?json=true';
          }
    }
 
 superagent.get(url).end(function (err, response) 
{

 fs.readFile("facts.json", 'utf8', function(err, data) {
 if(data===undefined)
 {
      var jsonObj=[];
      var item={};
       item=response.body;
       var date=new Date();
       item["saved"]=date.toString();
       jsonObj.push(item);
      
       fs.writeFile("facts.json", JSON.stringify(jsonObj,null,'\t'), function(err) {
          if (err) throw err;
      });
  }
 else
 {

  var jsonObj = JSON.parse(data);
  var item={};
     item=response.body;
    var date=new Date();
      item["saved"]=date.toString();
       jsonObj.push(item);
      fs.writeFile("facts.json", JSON.stringify(jsonObj,null,'\t'), function(err) {
                if (err) throw err;
      });
  }
});
 });
}  
