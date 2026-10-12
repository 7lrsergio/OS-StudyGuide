const assert=require('node:assert/strict');
const fs=require('node:fs'); const vm=require('node:vm');const path=require('node:path');
const root=path.resolve(__dirname,'..');const sandbox={window:{}};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(path.join(root,'bank.js'),'utf8'),sandbox);const bank=JSON.parse(JSON.stringify(sandbox.window.QUESTION_BANK));
const {Session}=require('../engine.js');
assert.equal(bank.length,104);assert.equal(new Set(bank.map(q=>q.id)).size,104);assert.equal(new Set(bank.map(q=>q.prompt)).size,104);
for(const q of bank){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.options[q.correct]);assert.ok(q.source&&q.explanation.length>40);}
assert.deepEqual(Object.fromEntries([...new Set(bank.map(q=>q.topic))].map(t=>[t,bank.filter(q=>q.topic===t).length])),{'Foundations':16,'Processes & threads':26,'Scheduling':30,'Concurrency':32});
let clock=1000;const now=()=>clock;let s=new Session(bank.slice(0,3),{now});
assert.equal(s.next(),false);const wrong=(s.question.correct+1)%4;assert.equal(s.answer(wrong),false);assert.equal(s.answer(wrong),null);assert.equal(s.stats().wrong,1);assert.equal(s.next(),false);assert.equal(s.answer(s.question.correct),true);assert.equal(s.answer(s.question.correct),null);assert.equal(s.stats().first,0);assert.equal(s.stats().accuracy,0);assert.equal(s.next(),true);s.answer(s.question.correct);s.next();s.answer(s.question.correct);s.next();assert.ok(s.ended);assert.equal(s.stats().completed,3);assert.equal(s.stats().first,2);assert.equal(s.stats().missed.length,1);
clock=0;s=new Session(bank.slice(0,4),{mode:'timed',minutes:15,now});let ids=[];for(let i=0;i<4;i++){ids.push(s.question.id);s.answer(s.question.correct);s.next();}assert.equal(new Set(ids).size,4);assert.equal(s.round,2);assert.equal(s.stats().completed,4);assert.ok(!s.ended);const last=s.question.id;s.answer((s.question.correct+1)%4);clock=900001;assert.equal(s.answer(s.question.correct),null);assert.ok(s.ended);assert.equal(s.stats().elapsed,900000);assert.equal(s.stats().attempted,5);assert.equal(s.stats().accuracy,80);assert.ok(s.stats().missed.includes(last));
for(const minutes of [15,20,30]){clock=0;s=new Session(bank,{mode:'timed',minutes,now});clock=minutes*60000;assert.equal(s.checkTime(),true);assert.equal(s.stats().completed,0);assert.equal(s.stats().accuracy,null);}
// Independent unit-time scheduling reference, separate from the question data.
function schedule(jobs,policy){let t=0,current=null;const finish={},start={},remaining=Object.fromEntries(jobs.map(j=>[j.id,j.b]));while(Object.keys(finish).length<jobs.length){let ready=jobs.filter(j=>j.a<=t&&remaining[j.id]>0);if(policy==='SRT'||!current||remaining[current.id]===0){ready.sort((a,b)=>policy==='FCFS'?a.a-b.a:policy==='SJF'?a.b-b.b||a.a-b.a:remaining[a.id]-remaining[b.id]||(current?.id===a.id?-1:current?.id===b.id?1:a.a-b.a));current=ready[0];}if(current){start[current.id]??=t;remaining[current.id]--;if(!remaining[current.id])finish[current.id]=t+1;}t++;if(t>1000)throw Error('Bad simulator');}return {finish,start};}
const J=a=>a.map(([a,b],i)=>({id:'ABC'[i],a,b}));
assert.deepEqual(schedule(J([[0,7],[2,2],[1,4]]),'FCFS').finish,{A:7,C:11,B:13});
assert.deepEqual(schedule(J([[0,8],[1,4],[2,2]]),'SJF').finish,{A:8,C:10,B:14});
assert.deepEqual(schedule(J([[0,8],[1,4],[2,2]]),'SRT').finish,{C:4,B:7,A:14});
assert.deepEqual(schedule(J([[0,6],[2,4],[3,1]]),'SRT').finish,{C:4,A:7,B:11});
function rr(bursts,Q){let queue=bursts.map((b,i)=>({id:i,b})),t=0,finish=[];while(queue.length){const j=queue.shift(),d=Math.min(Q,j.b);t+=d;j.b-=d;if(j.b)queue.push(j);else finish[j.id]=t;}return finish;}
assert.deepEqual(rr([5,3,1],2),[9,8,5]);
assert.equal(.25*4+.75*(.25*12+.75*8),7.75);
assert.ok(Math.abs(1/(.25+.75/4)-16/7)<1e-10);
assert.equal((90-40)+(90-10),130);
console.log('PASS: bank schema, module distribution, retry gating, first-attempt scoring, missed sets, nonrepeat exhaustion, all timer durations, expiry rejection, independent scheduling/math checks.');
