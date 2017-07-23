import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Domain } from './domain';
import { DomainService } from './domain.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css'],
  providers: [DomainService]
})
export class DomainComponent implements OnInit {
domains: Domain[];

  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  domain= new Domain();
  errorMessage: String;
  constructor(
    private domainService: DomainService ) { }

  ngOnInit() {
this.getDomains();
  }

  getDomains(): void {
this.domainService.getFomains()
  .subscribe(
                data => this.domains = data,
                error =>  this.errorMessage = <any>error);


  }
 add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.domainService.create(name)
      .then(hero => {
        console.log(hero);

      });
  }

  addDomain(): void {
        console.log( this.domain.id);
        console.log( this.domain.domainName);
         this.domainService.create(this.domain.domainName)
      .then(hero => {
        console.log(hero);
        this.domainService = null;
      });
  }
}
