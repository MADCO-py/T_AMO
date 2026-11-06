// Anniversary starts at midnight in Guatemala (UTC−06:00), on every device.
const DAY=86400000;
export function anniversaryCountdown(now=Date.now()){
 const time=Number(now);const local=new Date(time-6*3600000);let year=local.getUTCFullYear();
 let target=Date.UTC(year,7,13,6);const celebrating=time>=target&&time<target+DAY;
 if(time>=target+DAY){year++;target=Date.UTC(year,7,13,6)}
 const seconds=Math.max(0,Math.ceil((target-time)/1000));
 const previous=Date.UTC(year-1,7,14,6);
 return {year,celebrating,days:Math.floor(seconds/86400),hours:Math.floor(seconds/3600)%24,minutes:Math.floor(seconds/60)%60,seconds:seconds%60,progress:Math.min(100,Math.max(0,(time-previous)/(target-previous)*100))};
}
