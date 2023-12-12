export default async function addAnItem(iName:string, quantitty:string, stor:string, listid:number) {
    const swag = await fetch("http://localhost:3000/api/additem", {
        method:"POST",
        body: JSON.stringify({
            iName: iName,
            quant: quantitty,
            buds: stor,
            lisid: listid
        })
    })
}