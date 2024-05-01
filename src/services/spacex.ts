import { type Doc, type APISpaceXRespose} from   '../type/api'

export const getLaunchBy = async ({id} : {id : string}) =>{
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launch  = (await res.json()) as Doc
    console.log(launch)
    return launch
}

export const getLatestLaunches = async () =>{
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            options: {
                limit: 12,
            },
        }),
    })

    const {docs : launches}  = (await res.json()) as APISpaceXRespose
    return launches
}

