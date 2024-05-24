import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'nit', 'age'];
  getData: any = [];
  dataTable: MatTableDataSource<{}>;

  clientForm = this.formBuilder.group({
    name: [''],
    nit: [''],
    age: ['']
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.dataTable = new MatTableDataSource<{}>();
  }

  ngOnInit(): void {
    this.getAll()
  }

  onSubmit() {
    this.createClient(this.clientForm.value);
  }

  getAll(){
    this.http.get('http://localhost:3000/all-client').subscribe((data) => {
      console.log(data);
      this.getData = data;
      this.dataTable = new MatTableDataSource(this.getData);
    })
  }

  createClient(data: any){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(data)

    this.http.post('http://localhost:3000/client', data, {headers: headers}).subscribe((data) => {
      console.log(data);
      this.getAll();
    })
  }

}
