// app
//creates vars to use in list 
let wList = []
let item = [
"Crocheted Dog Toy", 
"Slow Feeder Bowl", 
"Pawz Grey Treat Jar", 
"Blue Sweet Dreams Thermal Pajamas", 
"Checker Chewy Vuiton Bowl", 
"Red Heart Sweater Dress", 
"Velvet Hair Bow - Sun Kissed", 
"Into the Wild Leash"
]
let price = [10, 14, 20, 30, 32, 27,]


inputItem.onimput=function(){
let wishList = inputItem.value
wList.push(item[wishList])
wList.push(price[wishList])
}
btnViewList.oneclick=function(){
alert(`$(wList)`)



