import { Process } from "./process"
import { Injectable } from '@angular/core';
/*var util = require('util')
const sleep = util.promysify(setTimeout)
*/
@Injectable({
    providedIn: 'root'
  })
  
export class ProcessManager {

    public processes: Process[] = []

    constructor() {
        
    }

    public enqueueProcess(process:Process){
        let contain: boolean = false;
        for (let i = this.processes.length - 1 ; i > -1 ; i--) {
            if(this.processes[i].landingTime < process.landingTime){
                this.processes.splice(i,0,process)
                contain = true
                break
            }
        }

        if(!contain){
            this.processes.push(process)   
        }

        
    }

    public dequeueProcess(){
        return this.processes.shift()
    }

    public getFrontProcess() {
        return this.processes[0]
    }

    public async runProcesses(){
        let sumWaitTime = 0;
        for (let i = this.processes.length-1; i > -1 ; i--) {
            //await this.sleep(this.processes[i].cpuBurst*1000)
            sumWaitTime += this.processes[i].cpuBurst
            let inter = await this.sleepInterval(this.processes[i].cpuBurst)
            .then((response:number)=>{
                clearInterval(response)
            })
            console.log(`Ha pasado ${this.processes[i].cpuBurst}`)           
        }
    }
    
    sleep(ms: number) {
        return new Promise(resolve =>setTimeout(resolve, ms));
    }

    sleepInterval(ms: number) {
        let count = 0
        let interval
        return new Promise((resolve,reject) => 
            interval = setInterval(()=>{
            count ++;
            console.log(count)
            if(count == ms){
                resolve(interval)
            }            
        },1000));    

        
    }

}