import { useState } from "react";
import React from "react";
export default function Array() {
const[array ,setArray]= useState(["one","two","three"])
const [user, setUser]  = useState([{ Firstname: "Rohan", Lastname: "matthew",Firstname: "Shalby", Lastname: "Shaji"  }]);
const [employee, setEmployee] = useState([{ Firstname: "Rohan", Lastname: "matthew", emailid: "iop@gmail.com", password: "contract", repassword: "contract" }, 
{ Firstname: "Shalby", Lastname: "Shaji", emailid: "lkj@gmail.com", password: "contract", repassword: "contract" }]) 
   
   
   
   return <>
        <label>  Employee </label><br />
{employee.map((item,index)=> {

    return<>

{JSON.stringify(item)} <br />
                {item.Firstname}<br />
                {index}<br />
            
        </>
})}
{
            user.map(
                (itm, indx) => {
                    return <>{indx}- {JSON.stringify(itm)} # {itm.Firstname} #{itm.Lastname} <br /></>
                }
            )
        }
{
            array[0]
        }
        <br/>
        {
            user[0].Firstname
        }

    </>

}