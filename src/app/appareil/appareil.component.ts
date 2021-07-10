import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	@Input() appareilName: string = '';
 	@Input() appareilStatus: string = '';
	@Input() indexOfAppareil: number = 0;
	@Input() id: number = 0;

  	constructor(private appareilService: AppareilService) { }

  	ngOnInit(): void {
  	}

	getStatus(){
	    return this.appareilStatus;
	}

	getColor(){
	    if(this.appareilStatus === 'allumé'){
	      	return 'green';
		} else if(this.appareilStatus === 'éteint'){
	      	return 'red';
	    }
	    else{
	      	return 'black';
	    }
	}

	onSwitchOn(){
		this.appareilService.switchOnOne(this.indexOfAppareil);
	}
	
	onSwitchOff(){
		this.appareilService.switchOffOne(this.indexOfAppareil);
	}

}
