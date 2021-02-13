const LotCodeData = [
  {
    lotCode: "11YVCHAR001",
    volume: 1000.0,
    description: "2011 Yarra Valley Chardonnay",
    tankCode: "T25-01",
    productState: "Ready for bottling",
    ownerName: "YV Wines Pty Ltd",
    components: [
      {
        percentage: 5.0,
        year: 2011,
        variety: "Pinot Noir",
        region: "Mornington",
      },
      {
        percentage: 80.0,
        year: 2011,
        variety: "Chardonnay",
        region: "Yarra Valley",
      },
      {
        percentage: 5.0,
        year: 2010,
        variety: "Pinot Noir",
        region: "Macedon",
      },
      {
        percentage: 10.0,
        year: 2010,
        variety: "Chardonnay",
        region: "Macedon",
      },
    ],
  },
  {
    lotCode: "11YVCHAR002",
    volume: 5077.0,
    description: null,
    tankCode: "T25-06",
    productState: null,
    ownerName: "YV Wines P/L and Vintage Kerr Joint Venture",
    components: [
      {
        percentage: 5.0,
        year: 2011,
        variety: "Pinot Noir",
        region: "Mornington",
      },
      {
        percentage: 80.0,
        year: 2011,
        variety: "Chardonnay",
        region: "Yarra Valley",
      },
      {
        percentage: 5.0,
        year: 2010,
        variety: "Pinot Noir",
        region: "Macedon",
      },
      {
        percentage: 10.0,
        year: 2010,
        variety: "Chardonnay",
        region: "Macedon",
      },
    ],
  },
  {
    lotCode: "15MPPN002-VK",
    volume: 100000.0,
    description:
      "2015 Mornington Peninsula Pinot Noir - Vintage Kerr special batch",
    tankCode: "T100-03",
    productState: "Filtered",
    ownerName: "Vintage Kerr",
    components: [
      {
        percentage: 60.0,
        year: 2015,
        variety: "Pinot Noir",
        region: "Mornington",
      },
      {
        percentage: 2.0,
        year: 2015,
        variety: "Pinot Noir",
        region: "Yarra Valley",
      },
      {
        percentage: 5.0,
        year: 2014,
        variety: "Pinot Noir",
        region: "Yarra Valley",
      },
      {
        percentage: 3.0,
        year: 2015,
        variety: "Merlot",
        region: "Yarra Valley",
      },
      {
        percentage: 1.0,
        year: 2015,
        variety: "Shiraz",
        region: "Mornington",
      },
      {
        percentage: 2.0,
        year: 2015,
        variety: "Zinfandel",
        region: "Macedon",
      },
      {
        percentage: 2.0,
        year: 2014,
        variety: "Malbec",
        region: "Port Phillip",
      },
      {
        percentage: 10.0,
        year: 2014,
        variety: "Pinot Noir",
        region: "Mornington",
      },
      {
        percentage: 10.0,
        year: 2015,
        variety: "Pinot Noir",
        region: "Mornington",
      },
      {
        percentage: 5.0,
        year: 2013,
        variety: "Cabernet",
        region: "Heathcote",
      },
    ],
  },
];

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

function getMovies() {
  return movies;
}

function getLot(lotCode) {
  return LotCodeData.find((m) => m.lotCode === lotCode);
}

function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

function getLot(lotCode, breakdownType) {
  //let breakdown = { brakedownType: `${breakdownType}` };

  data = LotCodeData.find((m) => m.lotCode === lotCode);
  //console.log(data);
  let components = data.components;
  //   console.log("components: ", components);

  let breakdown = [
    { percentage: components[0].percentage, key: components[0][breakdownType] },
  ];
  //   console.log(breakdown);
  for (let index = 1; index < components.length; index++) {
    //console.log(component[breakdownType]);
    isNew = true;

    for (let i = 0; i < breakdown.length; i++) {
      //   console.log(breakdown[i].key);
      //   console.log(components[index][breakdownType]);
      if (breakdown[i].key === components[index][breakdownType]) {
        isNew = false;
        breakdown[i].percentage += components[index].percentage;
      }
    }

    // console.log(isNew);
    if (isNew) {
      breakdown.push({
        percentage: components[index].percentage,
        key: components[index][breakdownType],
      });
    } else {
      //breakdown.find((c) => c[breakdownType] === component[breakdownType]);
    }
  }

  let sortedBreakdown = breakdown.sort((c1, c2) =>
    c1.percentage < c2.percentage ? 1 : c1.percentage > c2.percentage ? -1 : 0
  );

  //console.log("sortedBreakdown: ", sortedBreakdown);
  return sortedBreakdown;
}

//getLot("15MPPN002-VK", "year");
// console.log("hi again");
module.exports.getLot = getLot;
