
let results = []
deleteUpdateCustomer.onshow=function(){
//fills Name DropDown
let query = "SELECT  name  FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
if (req1.status = 200) {
  results = JSON.parse(req1.responseText)
  
  if (results == 0) {
} else {
drpNameList.clear()
  for (i = 0; i <= results.length - 1; i++) {
    drpNameList.addItem(results[i][0])
    }
  }
  } else {
        }
  
  hamMenu2.clear()
  hamMenu2.addItem("See Customers")
  hamMenu2.addItem("Edit Customers")
  hamMenu2.addItem("Delete Customers")
  hamMenu2.addItem("Add Customers")
  
}










btnSubmit.onclick=function(){
  
  
let nameDel = drpNameList.selection

if (typeof(s) == "object") {
} else {
  
  
  //radio options
if (rdoChoices.value == 0) {  //option 1 of radio

 let found = false
    for (i = 0; i <= results.length - 1; i++) {
        if (drpNameList.selection == results[i][0])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
      let query = "DELETE FROM customer WHERE name = " + '"' + nameDel + '"'
 req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
      if (req1.status == 200) { //transit worked
        if (req1.responseText == 500) {    // means the insert succeeded
            NSB.MsgBox("You have successfully deleted the customer named " + nameDel)
            

 let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status == 200) { //transit worked.
            allNames = JSON.parse(req1.responseText)
                    if (allNames == 0) {
} else {
drpNameList.clear()
  for (i = 0; i <= results.length - 1; i++) {
    drpNameList.addItem(results[i][0]) 
    }
    
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
    
    
     } else {
            NSB.MsgBox("There was a problem deleting " + nameDel + " from the database.")
            }
      } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
      }  
  } // count if








} else { //option 2
   
let newName = inpNewName.value

   var query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + nameDel + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
if (req1.status == 200) {
      if (req1.responseText == 500) {
      NSB.MsgBox("The name has been updated.")
  
  
  //updates current list
       let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status == 200) { //transit worked.
            allNames = JSON.parse(req1.responseText)
                    if (results == 0) {
} else {
  drpNameList.clear()
  for (i = 0; i <= results.length - 1; i++) {
    drpNameList.addItem(results[i][0]) 
    }
  
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
      
      
      
    } else {
      
      }

} else {
  }
  }
  }
}

hamMenu2.onclick=function(s){
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
