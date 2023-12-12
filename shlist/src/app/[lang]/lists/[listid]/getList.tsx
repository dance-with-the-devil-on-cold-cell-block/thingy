export default async function getList(id:number) {
    const deets = await fetch("http://localhost:3000/api/listdeetz", {
        mode:'no-cors',
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            next: { revalidate:60 },
            body: JSON.stringify({id: id})})
    return deets

}