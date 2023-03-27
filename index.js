// exercise  string and number
let data1 = true
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)



let data3 = data1.toString() + parseFloat(data2)
console.log(data3, typeof data3)

// Array
let data = ["one", 2, true]
console.log(data[2], typeof data[2])

// object
let user = {
    name: " wanno cantik sangat",
    faculty : "fkekk",
    phone: { 
       office:  " 0123456789", 
       mobile:  " 0222222222"
    },
    email: " b022110103@gmail.com"
}
console.log( user.faculty )
console.log(user.phone.mobile)