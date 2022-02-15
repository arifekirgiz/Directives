import { Component, OnInit } from '@angular/core';
import { FotoModul } from 'src/app/modul/foto/foto.module';
import {AlbumsService} from '../../service/albums.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  
  list : FotoModul[] = []
  currentPage : number = 1

 

  constructor(private service : AlbumsService) { }

  ngOnInit(): void {
    this.getData()
  
  
  } 
  getData() {
    
    this.service.getService().subscribe(data=> {
      this.list = data.filter(num => num.albumId == 37)
       
    
    }
       
 ) 
     
     return this.list
     
    
  }
   

}
