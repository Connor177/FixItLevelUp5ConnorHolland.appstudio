
let results2 = []
addCustomer.onshow=function(){
  

  //fills list
let query = "SELECT  name  FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
if (req1.status = 200) {
  results2 = JSON.parse(req1.responseText)
  
  if (results2 == 0) {
} else {

  for (i = 0; i <= results2.length - 1; i++) {
    lstNames.addItem(results2[i][0])
    }
  }
  } else {
        }

hamMenu3.clear()
  hamMenu3.addItem("See Customers")
  hamMenu3.addItem("Edit Customers")
  hamMenu3.addItem("Delete Customers")
  hamMenu3.addItem("Add Customers")

}





btnAdd.onclick=function(){
  
 let name = inptName.value
 let state = inptState.value
 let zipcode = inptZipcode.value
 let city = inptCity.value
 let street = inptStreet.value

let queryInsert = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('"+name+"', '"+street+"', '"+city+"','"+ state+"'," +zipcode+")"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + queryInsert)
  
  if (req2.status == 200) {
  
  if (req2.responseText == 500) {
  
NSB.MsgBox("You have successfully added the customer")
 let query = "SELECT name FROM customer"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
 
 if (req2.status == 200) {
 lstNames.clear()
 
 results2 = JSON.parse(req2.responseText)
 
//insert loop
 if (results2 == 0) {
} else {

  for (i = 0; i <= results2.length - 1; i++) {
    lstNames.addItem(results2[i][0])
    }
  }



 
 
 
} else {
  
}

  
  
} else {
  }
  
  
} else {
  }
  
  
  
  
  
 
 
 
 
 
 
 
 
 
}














hamMenu3.onclick=function(s){
   if (typeof(s) == "object") {
       return
    }
    switch(s) {
      case "See Customers":
          ChangeForm(seeCustomers)
          break
       case "Edit Customers":
          ChangeForm(deleteUpdateCustomer)
          break
       case "Delete Customers":
          ChangeForm(deleteUpdateCustomer)
          break
      case "Add Customers":
          ChangeForm(addCustomer)
          break
     }
}
