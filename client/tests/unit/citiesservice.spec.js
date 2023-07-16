import mockAxios from 'axios'
import CitiesService from '@/CitiesService'

describe('CitiesService.js', () => {

    it('should mock first element in result array from getCitis function, number of calls, and api url it is called with', async () => {
        // override what's in __mock__->axios.js file
        mockAxios.get.mockImplementationOnce(() => Promise.resolve({
            data: {
                cities: [
                    {
                        "name": "Sydney",
                        "name_native": "Sydney",
                        "country": "Australia",
                        "continent": "Australia",
                        "latitude": "-33.865143",
                        "longitude": "151.209900",
                        "population": "5312000",
                        "founded": "1788",
                        "landmarks": [
                          "Sydney Opera House",
                          "Sydney Harbour Bridge",
                          "Queen Victoria Building"
                        ]
                      },
                ]
            }
        }))
    
        const response = await CitiesService.getCities()
    
        expect(response).toEqual({
            cities: [
                {
                    "name": "Sydney",
                    "name_native": "Sydney",
                    "country": "Australia",
                    "continent": "Australia",
                    "latitude": "-33.865143",
                    "longitude": "151.209900",
                    "population": "5312000",
                    "founded": "1788",
                    "landmarks": [
                      "Sydney Opera House",
                      "Sydney Harbour Bridge",
                      "Queen Victoria Building"
                    ]
                  },
            ]
        })
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
        expect(mockAxios.get).toHaveBeenCalledWith(
            'http://localhost:3000/api/cities/'
        )
    })
})
