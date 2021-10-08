import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootishop',
  templateUrl: './bootishop.component.html',
  styleUrls: ['./bootishop.component.css']
})
export class BootishopComponent implements OnInit {
  art={
    a:null,
    b:null,
    c:null,
    id:null,
    d:null,
    e:null
  }
  // articulos =[];
  articulos =[ 
    {a:'b (1).jpg', b:'b (1a).jpg', c:'blusa',id:'1', d:35000 ,  e:67000},
    {a:'b (2).jpg', b:'b (2a).jpg', c:'blusa',id:'2', d:35000 ,  e:67000},
    {a:'b (3).jpg', b:'b (3a).jpg', c:'blusa',id:'3', d:35000 ,  e:67000},
    {a:'b (4).jpg', b:'b (4a).jpg', c:'blusa',id:'4', d:35000 ,  e:67000},
    {a:'b (5).jpg', b:'b (5).jpg', c:'blusa',id:'5', d:35000 ,  e:67000},
    {a:'b (6).jpg', b:'b (6a).jpg', c:'blusa',id:'6', d:35000 ,  e:67000},
    {a:'b (7).jpg', b:'b (7).jpg', c:'blusa',id:'7', d:35000 ,  e:67000},
    {a:'b (8).jpg', b:'b (8).jpg', c:'blusa',id:'8', d:35000 ,  e:67000},
    {a:'b (9).jpg', b:'b (9).jpg', c:'blusa',id:'9', d:35000 ,  e:67000},
    {a:'b (10).jpg', b:'b (10a).jpg', c:'blusa',id:'10', d:35000 ,  e:67000},
    {a:'b (11).jpg', b:'b (11).jpg', c:'blusa',id:'11', d:35000 ,  e:67000},
    {a:'b (12).jpg', b:'b (12).jpg', c:'blusa',id:'12', d:35000 ,  e:67000},
    {a:'b (13).jpg', b:'b (13).jpg', c:'blusa',id:'13', d:35000 ,  e:67000},
    {a:'b (14).jpg', b:'b (14).jpg', c:'blusa',id:'14', d:35000 ,  e:67000},
    {a:'b (15).jpg', b:'b (15).jpg', c:'blusa',id:'15', d:35000 ,  e:67000},
    {a:'b (16).jpg', b:'b (16).jpg', c:'blusa',id:'16', d:35000 ,  e:67000},
    {a:'b (17).jpg', b:'b (17).jpg', c:'blusa',id:'17', d:35000 ,  e:67000},
    {a:'b (18).jpg', b:'b (18).jpg', c:'blusa',id:'18', d:35000 ,  e:67000},
    {a:'b (19).jpg', b:'b (19).jpg', c:'blusa',id:'19', d:35000 ,  e:67000},
    {a:'b (20).jpg', b:'b (20).jpg', c:'blusa',id:'20', d:35000 ,  e:67000},
    {a:'b (21).jpg', b:'b (21).jpg', c:'blusa',id:'21', d:35000 ,  e:67000},
    {a:'b (22).jpg', b:'b (22).jpg', c:'blusa',id:'22', d:35000 ,  e:67000},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
