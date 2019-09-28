export class Process {
    
    public static PrevID: number = 0
    public pId: number
    public cpuBurst: number
    public landingTime: number
    public vCpuBurst:number
    public name: string


    constructor(name: string, cpuBurst: number, landingTime: number, pId?:number) {
        this.cpuBurst = cpuBurst
        this.landingTime = landingTime
        
        this.vCpuBurst = cpuBurst
        this.name = name
        if(pId){
            this.pId = pId
        }else{
            this.pId = Process.PrevID++
        }
    }

    
}