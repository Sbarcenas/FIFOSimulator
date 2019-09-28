import { Injectable } from '@angular/core'
import { Process } from "../models/Process"
import { Observable, BehaviorSubject } from 'rxjs'

/* El decorador @injectable, obedece al patron de diseño,
Singlenton, donde la clase devuelve la misma instancia
sin importar donde se llame */

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    // Declaración de variables para la comunicación con las vistas
    private processes$ = new BehaviorSubject([])  // Un comodín que pude actuar como oberver y oservable
    private processes: Process[] = [] // ¡Array de procesos con sus respectivas propiedades!

    private log$ = new BehaviorSubject([])  // Un comodín que pude actuar como oberver y oservable
    private log: String[] = [] // LOG



    constructor() {
    }

    public getTask() {
        
    /* Devolvemos  un observable con la variable Processes
    Que sera nuestro Stream de datos!
    */
        return this.processes$.asObservable()
    }

    public getLog(){
        return this.log$.asObservable()
    }


    private refresh() {
        // Emitir los nuevos valores para que todos los que dependan se actualicen.
        this.processes$.next(this.processes)
        this.log$.next(this.log)
    }

    public enqueueProcess(process: Process, log:boolean = true) {
        /*Agregar un elemento nuevo a la cola!*/

        let contain: boolean = false
        for (let i = 0; i < this.processes.length; i++) {
            if (this.processes[i].landingTime > process.landingTime) {
                if(log){
                    this.log.unshift(`Se añadio el proceso ${process.name}, antes que el proceso ${this.processes[i].name}`)
                    }
                this.processes.splice(i, 0, process)
                
                contain = true
                this.refresh()
                break
            }

        }

        if (!contain) {
            this.processes.push(process)
            if(log){
            this.log.unshift(`Se añadio el proceso: ${process.name}, al final de la cola`)
            }
            this.refresh()

        }

        this.refresh()

    }

    public dequeueId(pId: Process, log:boolean = true) {
        /*Eliminar un elemento de la cola por id*/
        let index = this.processes.indexOf(pId)

        if (index > -1) {
            this.processes.splice(index, 1)
            if(log){
            this.log.unshift(`Eliminamos el proceso ${pId.name}`)
            }
        }

    }

    public update(pId: Process,nProcess: Process){
        /*Actualizar un elemento de la cola*/
        this.dequeueId(pId,false)
        this.enqueueProcess(nProcess,false)
        this.log.unshift(`Se actualizo un proceso con exito`)

        this.refresh();
    }

    public dequeueProcess() {
        /* Sacar un elemento de la cola, cuando para 
        simular ejecución */
        let shift = this.processes.shift()
        this.log.unshift(`Se ha ejecutado el proceso ${shift.name}`)
        this.refresh();
        return shift
    }

    public async runProcesses() {
        /* Proceso forsozamente sincrono para la ejecución de la simulación*/
        for (let i = 0; i < this.processes.length;) {
        
            this.log.unshift(`Inicia la ejecución del proceso: ${this.processes[i].name}`)
            let inter = await this.sleepInterval(this.processes[i])
                .then((response: number) => {
                    clearInterval(response)
                })
            this.dequeueProcess()
            this.refresh()
        }

    }


    sleepInterval(process: Process) {
        // SetInterval Sincrono!
        let count = 0
        let interval
        return new Promise((resolve, reject) =>
            interval = setInterval(() => {
                count++
                process.vCpuBurst -= 0.50
                if (count == process.cpuBurst*2) {
                    resolve(interval)
                }
            }, 250))



    }

    public clearLog(){
        this.log = []
        this.refresh()
    }
}