export const getProduct = async() =>{
    const res = await fetch('https://suncart-one.vercel.app/data.json')
    const data = res.json()
    return data
}