
export default function ListaItem(hlutur:any) {
        return(<li key={hlutur.id}><div className="bg-white hover:bg-white/90 text-black/90 border-b-2 border-black/20 p-2">{hlutur.name}: {hlutur.count}</div></li>)
}