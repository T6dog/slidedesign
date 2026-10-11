// Original MIT-licensed layouts. Requires an environment providing @oai/artifact-tool.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

export const colors = { ink:'#17313B', teal:'#187F79', orange:'#C97035', muted:'#53656C', rule:'#CCD7D9', wash:'#F2F6F5', paper:'#FFFFFF' };
const font = 'DejaVu Sans';
export function buildPresentation() {
  const p = Presentation.create({slideSize:{width:1280,height:720}});
  function box(s,x,y,w,h,fill) {
    return s.shapes.add({geometry:'rect',position:{left:x,top:y,width:w,height:h},fill,line:{fill:'none',width:0}});
  }
  function text(s,txt,x,y,w,h,size=23,bold=false,color=colors.ink) {
    const sh=box(s,x,y,w,h,'none'); sh.text=txt;
    sh.text.style={typeface:font,fontSize:size,bold,color,verticalAlignment:'middle'};
    return sh;
  }
  function base(n,label,title,subtitle) {
    const s=p.slides.add(); s.background.fill=colors.paper;
    text(s,label.toUpperCase(),64,28,1100,26,13,true,colors.muted);
    text(s,title,64,68,1152,95,35,true);
    text(s,subtitle,64,169,1152,34,18,false,colors.muted);
    box(s,64,214,1152,2,colors.rule);
    box(s,64,663,1152,1,colors.rule);
    text(s,'SYNTHETIC EXAMPLE  |  Replace evidence, owners and sources before use',64,674,1070,25,12,false,colors.muted);
    text(s,String(n).padStart(2,'0'),1155,674,60,25,12,true,colors.muted);
    s.speakerNotes.text='Original slidedesign layout. All data, targets and organizations on this slide are fictional placeholders. No corporate template or logo used. Before delivery replace title, evidence, source locator, period, population and uncertainty. General design references: https://slideworks.io/resources/how-to-write-action-titles-like-mckinsey and https://deckary.com/blog/consulting-quality-slides .';
    return s;
  }
  let s=base(1,'Executive summary','Approve a focused pilot before wider rollout','A one-page answer, supported by evidence and an explicit decision request');
  text(s,'RECOMMENDATION',64,246,340,28,14,true,colors.teal);
  text(s,'Test the onboarding change in one service team',64,291,360,148,32,true);
  text(s,'Bound the commitment. Define the learning goal and the condition for scaling.',64,461,350,100,21,false,colors.muted);
  const reasons=[['Evidence','The illustrative pilot lifts completion from 40% to 60%.'],['Trade-off','A smaller launch limits exposure while preserving a comparison.'],['Decision needed','Name an accountable owner and agree the review criteria.']];
  reasons.forEach((r,i)=>{const y=244+i*116;box(s,470,y,4,90,colors.teal);text(s,r[0],494,y,685,30,22,true);text(s,r[1],494,y+40,685,62,22);});

  s=base(2,'Evidence comparison','The pilot gains 20 percentage points in completion','Completion rate, % of eligible users; illustrative comparison, not a causal estimate');
  const chart=s.charts.add('bar',{position:{left:64,top:242,width:740,height:380},categories:['Current','Pilot'],series:[{name:'Completion',values:[40,60],fill:colors.teal}],barOptions:{direction:'column',grouping:'clustered',gapWidth:160},hasLegend:false,dataLabels:{showValue:true,position:'outEnd',numberFormatCode:'0"%"',textStyle:{typeface:font,fontSize:18,fill:colors.ink,bold:true}},xAxis:{textStyle:{typeface:font,fontSize:17,fill:colors.ink},line:{fill:colors.rule,width:1}},yAxis:{min:0,max:100,majorUnit:20,numberFormatCode:'0"%"',textStyle:{typeface:font,fontSize:14,fill:colors.muted},majorGridlines:{fill:colors.rule,width:1}}});
  for(const a of [chart.xAxis?.textStyle,chart.yAxis?.textStyle,chart.dataLabels?.textStyle,chart.legend?.textStyle]) if(a) a.typeface=font;
  box(s,852,254,364,332,colors.wash);
  text(s,'+20 pp',880,280,307,75,50,true,colors.teal);
  text(s,'Observed difference',880,362,307,38,22,true);
  text(s,'Validate sample size, user mix and measurement period before attributing the gain to the change.',880,422,303,125,21);
  s.speakerNotes.text+=' Chart data: Current 40%, Pilot 60%; difference 20 percentage points, relative increase 50%. Do not confuse percentage points with relative percent. Values are synthetic. Native editable chart and a generated workbook snapshot are provided.';

  s=base(3,'Options','A focused pilot balances learning and commitment','Compare every option against the same decision criteria');
  const vals=[['Criterion','Keep current','Focused pilot','Full rollout'],['Learning speed','Low','High','High'],['Initial commitment','Low','Medium','High'],['Reversibility','High','High','Low'],['Evidence required','Monitor baseline','Define test and review','Prove repeatability']];
  const table=s.tables.add({rows:5,columns:4,left:64,top:249,width:1152,height:298,columnWidths:[258,280,310,304],values:vals});
  table.borders.assign({fill:colors.rule,width:1,style:'solid'});
  for(let r=0;r<5;r++)for(let c=0;c<4;c++){const cell=table.getCell(r,c);cell.fill=r===0?colors.ink:c===2?colors.wash:colors.paper;cell.text.style={typeface:font,fontSize:20,bold:r===0||c===0,color:r===0?colors.paper:colors.ink};}
  text(s,'Decision rule: scale only after repeatable gains and an agreed operating owner.',64,579,1152,58,23,true);

  s=base(4,'Logic and hypotheses','Test whether friction or relevance drives abandonment','A mechanism map organizes hypotheses; it does not establish causality');
  box(s,64,352,282,125,colors.ink);text(s,'Why do users stop?',84,374,242,78,27,true,colors.paper);
  box(s,346,412,90,3,colors.rule);box(s,434,297,3,232,colors.rule);
  const hypotheses=[['Friction','Too many steps before the first useful result','Test: time to completion'],['Relevance','The first result does not fit the user need','Test: perceived usefulness']];
  hypotheses.forEach((r,i)=>{const y=254+i*232;box(s,434,y+43,54,3,colors.rule);box(s,488,y,300,115,colors.wash);text(s,r[0],510,y+18,254,32,24,true);text(s,r[2],510,y+63,254,45,17,false,colors.muted);text(s,r[1],839,y+18,352,88,24);});

  s=base(5,'Delivery plan','Use three review gates to control the rollout','Replace durations and owners with the actual operating plan');
  const phases=[['01','DESIGN','Weeks 1–2','Define the test','Owner: service lead','Gate: measures agreed'],['02','PILOT','Weeks 3–6','Run and compare','Owner: delivery lead','Gate: evidence reviewed'],['03','DECIDE','Week 7','Scale, adapt or stop','Owner: sponsor','Gate: decision recorded']];
  phases.forEach((r,i)=>{const x=64+i*394;text(s,r[0],x,249,100,65,48,true,colors.teal);box(s,x,330,358,3,colors.teal);text(s,r[1],x,356,358,29,16,true,colors.muted);text(s,r[2],x,399,358,38,28,true);text(s,r[3],x,455,358,36,23);text(s,r[4],x,511,358,36,19,false,colors.muted);text(s,r[5],x,574,358,47,20,true);});

  s=base(6,'Decision record','Approve the pilot scope and assign a review owner','Draft decision request; no approval is implied by this example');
  const labels=[['DECISION','Run one bounded pilot before a wider commitment.'],['CONDITIONS','Agree success criteria, comparison group and stop conditions.'],['ACCOUNTABILITY','Name one sponsor and one operating owner.'],['NEXT REVIEW','Review the evidence at the agreed gate; record scale, adapt or stop.']];
  labels.forEach((r,i)=>{const y=248+i*94;text(s,r[0],64,y,248,50,15,true,colors.teal);text(s,r[1],326,y,884,68,24);if(i<3)box(s,64,y+79,1152,1,colors.rule);});
  return p;
}

export async function exportDeck(outputDir) {
  await fs.mkdir(outputDir,{recursive:true});
  const p=buildPresentation();
  await (await PresentationFile.exportPptx(p)).save(path.join(outputDir,'candidate.pptx'));
  for(const [i,s] of p.slides.items.entries()){
    const b=await p.export({slide:s,format:'png',scale:1});
    await fs.writeFile(path.join(outputDir,`slide-${String(i+1).padStart(2,'0')}.png`),new Uint8Array(await b.arrayBuffer()));
  }
  return p;
}
if(process.argv[1] && import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) await exportDeck(path.resolve(process.argv[2]||'output'));
