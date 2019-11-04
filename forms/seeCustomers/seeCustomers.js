



seeCustomers.onshow=function(){
let query = "SELECT name  FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
if (req1.status = 200) {
  results = JSON.parse(req1.responseText)
  
  if (results == 0) {
} else {
drpNames.clear()
  for (i = 0; i <= results.length - 1; i++) {
    drpNames.addItem(results[i][0])
    }
  }
  } else {
        }
  
  hamMenu.clear()
 hamMenu.addItem("See Customers")
  hamMenu.addItem("Edit Customers")
  hamMenu.addItem("Delete Customers")
  hamMenu.addItem("Add Customers")
  
}






drpNames.onclick=function(s){


if (typeof(s) == "object") {
return
} else {
  
  drpNames.value = s
  //retreives data
let query = "SELECT name, street, city, state, zipcode FROM customer WHERE name = " + '"' + drpNames.selection + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status = 200) {
        results = JSON.parse(req1.responseText)
          if (results == 0) {
        } else {
          txtCompInfo.value = results + "\n"
            }
  } else {
    }
  }
}














hamMenu.onclick=function(s){
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
