export class hBarView {
    constrctor(container, model){
        this.parent = container;
        this.model = model;

        this.init();
        this.model.addObserver(this);
    }

    init(){
        //creating progress bar div
        this.pBarDiv = document.createElement('div');
        this.pBarDiv.classList.add('progress-div');
        this.parent.append(this.pBarDiv);

        //creating progress bar exterior
        this.pBarExterior = document.createElement('div');
        this.pBarExterior.classList.add('bar-exterior');
        this.pBarDiv.append(this.pBarExterior);

        //creating progress bar fill
        this.fill = document.createElement('div');
        this.fill.classList.add('bar-fill');
        this.extPCircle.append(this.fill);
    }

    update(roundInfo){
        console.log(roundInfo);
        
    }
}