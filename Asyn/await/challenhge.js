
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(api_url){
    const response = await fetch(api_url)
    const data = await response.json()
    return data
}

const anotherFunction = async(api_url) => {
    try{
        const products = await fetchData(`${api_url}/products`)
        const product = await fetchData(`${api_url}/products/${products[0].id}`)
        const category = await fetchData(`${api_url}/categories/${product.category.id}`)

        console.log(products)
        console.log(product.title)
        console.log(category.name)
    }catch (error){
        console.error(error)
    }
}

anotherFunction(API)