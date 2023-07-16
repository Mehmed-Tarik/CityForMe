const { findCities } = require('../controllers/findCities')


describe('Find particular cities based on given parameters', () => {

    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    };

    it('should return status 200 and appropriate cities for given continent', async () => {
        const req = {
            params: {
                continent: 'North America',
                country: 'none',
                populationTo: 'null',
                populationFrom: 'null'
            }
        }

        await findCities(req,res)

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith([
        {
          name: 'New York City',
          name_native: 'New York City',
          country: 'USA',
          continent: 'North America',
          latitude: '40.730610',
          longitude: '-73.935242',
          population: '8419000',
          founded: '1624',
          landmarks: [
            'Chrysler Building',
            'Brooklyn Bridge',
            'Madison Square Garden',
          ],
        },
      ]);
    })
    it('should return status 200 and appropriate cities for given continent and country', async () => {
        const req = {
            params: {
                continent: 'Africa',
                country: 'Nigeria',
                populationTo: 'null',
                populationFrom: 'null'
            }
        }

        await findCities(req,res)

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith([ 
        {
          name: "Lagos",
          name_native: "Lagos",
          country: "Nigeria",
          continent: "Africa",
          latitude: "6.465422",
          longitude: "3.406448",
          population: "14800000",
          founded: "1914",
          landmarks: [
              "Iga Idungaran",
              "Freedom Park",
              "The Cathedral Church of Christ"
          ]
        },
      ]);
    })
    it('should return status 200 and appropriate cities for given continent,country and population', async () => {
        const req = {
            params: {
                continent: 'Asia',
                country: 'Japan',
                populationFrom: 1000000,
                populationTo: 5000000
            }
        }

        await findCities(req,res)

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith( [] );
    })
    it('should return status 200 and appropriate cities for given continent and population', async () => {
        const req = {
            params: {
                continent: 'Europe',
                country: 'none',
                populationFrom: 3000000,
                populationTo: 15000000
            }
        }

        await findCities(req,res)

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith( [
            {
                name: "Madrid",
                name_native: "Madrid",
                country: "Spain",
                continent: "Europe",
                latitude: "40.416775",
                longitude: "-3.703790",
                population: "3223000",
                founded: "1083",
                landmarks: [
                  "Royal Palace",
                  "Plaza Mayor",
                  "Plaza de Cibeles"
                ]
              },
              {
                name: "Moscow",
                name_native: "Москва",
                country: "Russia",
                continent: "Europe",
                latitude: "55.751244",
                longitude: "37.618423",
                population: "11920000",
                founded: "1147",
                landmarks: [
                  "Saint Basil's Cathedral",
                  "Kremlin",
                  "Bolshoi Theatre"
                ]
              },
        ] );
    })
})