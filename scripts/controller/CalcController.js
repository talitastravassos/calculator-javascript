class CalcController{

    constructor(){

        this.locate = 'pt-BR'
        this.displayCalcEl = document.querySelector("#display");
        this.dateEl = document.querySelector("#data");
        this.timeEl = document.querySelector("#hora");
        this.currentDateEl;


        this.initialize(); 

    }

    initialize(){

        /* date and time auto update */
        setInterval(()=>{
            this.displayDate = this.currentDate.toLocaleDateString(this.locate, {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this.locate);
        })

    }
    
    
    get displayCalc(){

        return this.displayCalcEl.innerHTML;
    }

    set displayCalc(value){

        this.displayCalcEl.innerHTML = value;
    }

    get displayDate(){
        return this.dateEl.innerHTML;

    }

    set displayDate(value){
        return this.dateEl.innerHTML = value;
    }

    get displayTime(){
        return this.timeEl.innerHTML;
    }

    set displayTime(value){
        return this.timeEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this.currentDateEl.innerHTML = value;

    }


}