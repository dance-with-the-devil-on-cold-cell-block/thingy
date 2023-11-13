import connection from "@/app/db/shapi"
import Sususer from "@/app/models/testmodel"

interface WEtheSusUser {
    save(testmodel:Sususer):Promise<Sususer>;
    retrieveAll(searchParams: {username:string, email:string}): Promise<Sususer>;
    
}