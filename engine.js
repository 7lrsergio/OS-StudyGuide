/* Pure session logic, shared by both practice modes. */
(function(root){
  function shuffle(items, random=Math.random){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  class Session {
    constructor(bank,{mode='study',minutes=15,now=Date.now,random=Math.random}={}){
      if(!bank.length)throw new Error('Empty question pool');
      this.bank=bank;this.mode=mode;this.now=now;this.random=random;this.started=now();this.deadline=mode==='timed'?this.started+minutes*60000:null;
      this.order=shuffle(bank,random);this.cursor=0;this.round=1;this.records=[];this.ended=false;this.load();
    }
    load(){this.question=this.order[this.cursor];this.choices=shuffle(this.question.options.map((text,index)=>({text,index})),this.random);this.record={id:this.question.id,topic:this.question.topic,attempts:0,wrong:0,correct:false,rejected:[]};this.records.push(this.record);}
    remaining(){return this.deadline===null?null:Math.max(0,this.deadline-this.now());}
    checkTime(){if(!this.ended&&this.deadline!==null&&this.now()>=this.deadline)this.finish('Time is up');return this.ended;}
    answer(index){
      if(this.checkTime()||this.record.correct||this.record.rejected.includes(index))return null;
      if(!Number.isInteger(index)||index<0||index>=this.question.options.length)return null;
      this.record.attempts++;
      if(index===this.question.correct){this.record.correct=true;return true;}
      this.record.wrong++;this.record.rejected.push(index);return false;
    }
    next(){
      if(this.checkTime()||!this.record.correct)return false;
      this.cursor++;
      if(this.cursor>=this.order.length){
        if(this.mode!=='timed'){this.finish('Practice complete');return false;}
        this.round++;this.order=shuffle(this.bank,this.random);this.cursor=0;
        if(this.order.length>1&&this.order[0].id===this.question.id)[this.order[0],this.order[1]]=[this.order[1],this.order[0]];
      }
      this.load();return true;
    }
    finish(reason='Session ended'){if(!this.ended){this.ended=true;this.reason=reason;this.finished=this.deadline===null?this.now():Math.min(this.now(),this.deadline);}}
    stats(){
      const attempted=this.records.filter(r=>r.attempts>0),completed=attempted.filter(r=>r.correct),first=completed.filter(r=>r.attempts===1).length;
      const topics={};for(const r of attempted){const t=topics[r.topic]??={attempted:0,completed:0,first:0,wrong:0};t.attempted++;t.completed+=+r.correct;t.first+=+(r.correct&&r.attempts===1);t.wrong+=r.wrong;}
      return {attempted:attempted.length,completed:completed.length,first,wrong:attempted.reduce((n,r)=>n+r.wrong,0),accuracy:attempted.length?first/attempted.length*100:null,elapsed:Math.max(0,(this.finished??this.now())-this.started),topics,missed:[...new Set(attempted.filter(r=>r.wrong>0).map(r=>r.id))]};
    }
  }
  const api={Session,shuffle};if(typeof module!=='undefined')module.exports=api;else root.Practice=api;
})(typeof window!=='undefined'?window:globalThis);
