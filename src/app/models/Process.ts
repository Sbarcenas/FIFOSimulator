export class Process {
    
    public static PrevID: number = 0;
    public pId: number;
    public cpuBurst: number;
    public landingTime: number;

    constructor(cpuBurst: number, landingTime: number) {
        this.cpuBurst = cpuBurst;
        this.landingTime = landingTime;
        this.pId = Process.PrevID++;
    }

    
}