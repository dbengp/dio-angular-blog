import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {dataFake} from '../../data/datafake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit {

  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id:string|null = "0";

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( value => this.id = value.get("id") );
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0];
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }

}
