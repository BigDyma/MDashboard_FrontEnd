export const returnCityWeather = async(city: string) => {
    const options:object = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        'Access-Control-Allow-Origin': '*'
    }

    const fetchResult = await fetch(`https://localhost:5001/api/City/${city}`);

    type myType = {
        name: number,
        meteo: object,
    }

    if (fetchResult.ok)
    {
        const data:myType = await fetchResult.json();

        return data;
    }
    else
    {
        throw new Error("Something went wrong in City Service. FetchResult is not OK");
    }

}