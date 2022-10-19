import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
   username:string='';
   
  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    
  
    const temp_username=sessionStorage.getItem("username");
    if(temp_username)
    {
      this.username=temp_username;
    }
    
    this.getUserByUsername(this.username);


  }


  getUserByUsername(username:string)
    {
        this.httpClient.get('http://localhost:8080/api/users/'+username).subscribe(
            data=>{    
                this.user=data;
                console.log(this.user);
            }
        )
    }

    onSubmit()
    {
      const temp_username=sessionStorage.getItem("username");
    if(temp_username)
    {
      this.username=temp_username;
    }


        this.httpClient.put('http://localhost:8080/api/users/'+this.username,this.user).subscribe(
            data=>{    
                this.user=data;
                Swal.fire('Suceessfully Updated !!');
                this.router.navigate(['userpage'])
            }
        )
    }
}
