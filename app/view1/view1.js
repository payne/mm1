'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
    console.log("Making the http request for the json data....");
    this.simple="An M&M pairing project.";
        this.companies=
[
    {
        "address": "423 South 13th Street, Omaha, NE 68102, USA",
        "category": "Beauty",
        "lat": 41.2556889,
        "lng": -95.932918,
        "name": "The Imaginarium",
        "number": 1
    },
    {
        "address": "8600 Cass Street, Omaha, NE 68114, USA",
        "category": "Bar",
        "lat": 41.263615,
        "lng": -96.046358,
        "name": "Personal Threads Boutique",
        "number": 2
    },
    {
        "address": "2518 South 132nd Street, Omaha, NE 68144, USA",
        "category": "Bar",
        "lat": 41.2353747,
        "lng": -96.11960210000001,
        "name": "It's Yours Pottery",
        "number": 3
    },
    {
        "address": "8600 Cass Street, Omaha, NE 68114, USA",
        "category": "Bookstore",
        "lat": 41.263615,
        "lng": -96.046358,
        "name": "Lewis Art Gallery",
        "number": 4
    },
    {
        "address": "301 North 78th Street, Omaha, NE 68114, USA",
        "category": "Bookstore",
        "lat": 41.261745,
        "lng": -96.035759,
        "name": "Malibu Gallery",
        "number": 5
    },
    {
        "address": "1115 Harney Street, Omaha, NE 68102, USA",
        "category": "Bank",
        "lat": 41.256183,
        "lng": -95.93137600000001,
        "name": "MANGELSEN - Images of Nature Gallery",
        "number": 6
    },
    {
        "address": "1034 Howard Street, Omaha, NE 68102, USA",
        "category": "Bar",
        "lat": 41.2556388,
        "lng": -95.9302458,
        "name": "Old Market Artists Gallery",
        "number": 7
    },
    {
        "address": "417 South 11th Street, Omaha, NE 68102, USA",
        "category": "Bank",
        "lat": 41.2557974,
        "lng": -95.9302688,
        "name": "Passageway Gallery",
        "number": 8
    },
    {
        "address": "2340 South 156th Circle, Omaha, NE 68130, USA",
        "category": "Bank",
        "lat": 41.2363892,
        "lng": -96.15960989999999,
        "name": "Smiling Turtle Art Spot",
        "number": 9
    },
    {
        "address": "1032 Howard Street, Omaha, NE 68102, USA",
        "category": "Dining",
        "lat": 41.2554708,
        "lng": -95.9302328,
        "name": "White Crane Gallery",
        "number": 10
    },
    {
        "address": "10918 J Street, Omaha, NE 68137, USA",
        "category": "Bar",
        "lat": 41.21432250000001,
        "lng": -96.0831564,
        "name": "Omaha Glass",
        "number": 11
    },
    {
        "address": "5015 Underwood Avenue, Omaha, NE 68132, USA",
        "category": "Beauty",
        "lat": 41.2648052,
        "lng": -95.99125,
        "name": "Dundee Bank",
        "number": 12
    },
    {
        "address": "518 South 10th Street, Omaha, NE 68102, USA",
        "category": "Bar",
        "lat": 41.2550625,
        "lng": -95.9292624,
        "name": "Curb Appeal Salon & Spa",
        "number": 13
    },
    {
        "address": "1026 Jackson Street, Omaha, NE 68102, USA",
        "category": "Bookstore",
        "lat": 41.2544037,
        "lng": -95.9294742,
        "name": "Soul Desires at Urban Abbey",
        "number": 14
    },
    {
        "address": "2501 South 90th Street, Omaha, NE 68124, USA",
        "category": "Bookstore",
        "lat": 41.235785,
        "lng": -96.052104,
        "name": "The Bookworm",
        "number": 15
    },
    {
        "address": "2718 South 123rd Court, Omaha, NE 68144, USA",
        "category": "Bar",
        "lat": 41.2333687,
        "lng": -96.1062534,
        "name": "Candy Wrappers",
        "number": 16
    },
    {
        "address": "1105 Howard Street, Omaha, NE 68102, USA",
        "category": "Dining",
        "lat": 41.25514,
        "lng": -95.931001,
        "name": "Spaghetti Works",
        "number": 17
    },
    {
        "address": "Rockbrook Village Shopping Center, 10915 Prairie Brook Road, Omaha, NE 68144, USA",
        "category": "Bakery",
        "lat": 41.2330652,
        "lng": -96.0832562,
        "name": "Baby Junk",
        "number": 18
    },
    {
        "address": "3510 North 167th Circle, Omaha, NE 68116, USA",
        "category": "Dining",
        "lat": 41.2906171,
        "lng": -96.176705,
        "name": "Bigwheels 2 Butterflys",
        "number": 19
    },
    {
        "address": "16909 Burke Street #131, Omaha, NE 68118, USA",
        "category": "Bookstore",
        "lat": 41.2584831,
        "lng": -96.17993849999999,
        "name": "Fat Brain Toys",
        "number": 20
    },
    {
        "address": "421 South 11th Street, Omaha, NE 68102, USA",
        "category": "Dining",
        "lat": 41.2557812,
        "lng": -95.9305351,
        "name": "Le Wonderment",
        "number": 21
    },
    {
        "address": "2283 South 67th Street, Omaha, NE 68106, USA",
        "category": "Beauty",
        "lat": 41.2385042,
        "lng": -96.0140912,
        "name": "Learning HQ",
        "number": 22
    },
    {
        "address": "717 North 114th Street, Omaha, NE 68154, USA",
        "category": "Bakery",
        "lat": 41.2655616,
        "lng": -96.0894921,
        "name": "Bel Air Fashions",
        "number": 23
    },
    {
        "address": "Bel Air Plaza, 12100 West Center Road, Omaha, NE 68144, USA",
        "category": "Bar",
        "lat": 41.2362752,
        "lng": -96.1032487,
        "name": "Bliss Boutique",
        "number": 24
    },
    {
        "address": "4914 Underwood Avenue, Omaha, NE 68132, USA",
        "category": "Bar",
        "lat": 41.26529600000001,
        "lng": -95.989182,
        "name": "Denim Saloon",
        "number": 25
    },
    {
        "address": "8014 Dodge Street, Omaha, NE 68114, USA",
        "category": "Bookstore",
        "lat": 41.2596845,
        "lng": -96.0385014,
        "name": "Glamour Up",
        "number": 26
    },
    {
        "address": "521 North 33rd Street, Omaha, NE 68131, USA",
        "category": "Bookstore",
        "lat": 41.2641405,
        "lng": -95.9613504,
        "name": "Maud Boutique",
        "number": 27
    },
    {
        "address": "1118 Howard Street, Omaha, NE 68102, USA",
        "category": "Bank",
        "lat": 41.2554775,
        "lng": -95.9315427,
        "name": "The Tea Smith",
        "number": 28
    },
    {
        "address": "11110 Fort Street #103, Omaha, NE 68164, USA",
        "category": "Beauty",
        "lat": 41.30713739999999,
        "lng": -96.0849865,
        "name": "Accessibility.net",
        "number": 29
    },
    {
        "address": "6825 Pine Street, Omaha, NE 68106, USA",
        "category": "Beauty",
        "lat": 41.243385,
        "lng": -96.017697,
        "name": "Interface Web School",
        "number": 30
    },
    {
        "address": "2110 South 67th Street, Omaha, NE 68106, USA",
        "category": "Bookstore",
        "lat": 41.2396585,
        "lng": -96.01548830000002,
        "name": "Aksarben Cinema",
        "number": 31
    },
    {
        "address": "7300 Q Street, Ralston, NE 68127, USA",
        "category": "Bar",
        "lat": 41.2070094,
        "lng": -96.02637130000001,
        "name": "Ralston Arena",
        "number": 32
    },
    {
        "address": "Omaha, NE 68104, USA",
        "category": "Bookstore",
        "lat": 41.2954735,
        "lng": -95.99383390000001,
        "name": "Sgt. Peffer's",
        "number": 33
    },
    {
        "address": "3157 Farnam Street #7112, Omaha, NE 68131, USA",
        "category": "Bank",
        "lat": 41.2574766,
        "lng": -95.95915529999999,
        "name": "Callahan Financial Planning Company",
        "number": 34
    },
    {
        "address": "Papillion, NE 68046, USA",
        "category": "Beauty",
        "lat": 41.1319017,
        "lng": -96.0573302,
        "name": "Comprehensive Financial Services, LLC",
        "number": 35
    },
    {
        "address": "13314 I Street, Omaha, NE 68137, USA",
        "category": "Beauty",
        "lat": 41.2167164,
        "lng": -96.1217434,
        "name": "Integrated Merchant Alliance",
        "number": 36
    },
    {
        "address": "4901 Charles Street, Omaha, NE 68132, USA",
        "category": "Dining",
        "lat": 41.272967,
        "lng": -95.9881379,
        "name": "Janousek Florist",
        "number": 37
    },
    {
        "address": "16827 Q Street, Omaha, NE 68135, USA",
        "category": "Dining",
        "lat": 41.2043588,
        "lng": -96.17812630000002,
        "name": "The Laurel Tree",
        "number": 38
    },
    {
        "address": "1416 Howard Street, Omaha, NE 68102, USA",
        "category": "Dining",
        "lat": 41.2557761,
        "lng": -95.93531879999999,
        "name": "Patrick's Market",
        "number": 39
    },
    {
        "address": "3253 Dodge Street, Omaha, NE 68131, USA",
        "category": "Dining",
        "lat": 41.2595232,
        "lng": -95.9610416,
        "name": "Wohlner's Midtown Neighborhood Grocery & Deli",
        "number": 40
    },
    {
        "address": "12900 I Street, Omaha, NE 68137, USA",
        "category": "Beauty",
        "lat": 41.217478,
        "lng": -96.1141856,
        "name": "Millard Lumber",
        "number": 41
    },
    {
        "address": "4117 South 120th Street, Omaha, NE 68137, USA",
        "category": "Bookstore",
        "lat": 41.2191369,
        "lng": -96.10071579999999,
        "name": "Better Bodies Fitness & Training",
        "number": 42
    },
    {
        "address": "Rockbrook Village Shopping Center, 10912 Prairie Brook Road, Omaha, NE 68144, USA",
        "category": "Bakery",
        "lat": 41.233477,
        "lng": -96.0829976,
        "name": "Body Basics",
        "number": 43
    },
    {
        "address": "409 North 78th Street, Omaha, NE 68114, USA",
        "category": "Bakery",
        "lat": 41.2627075,
        "lng": -96.0363266,
        "name": "Malbar Vision",
        "number": 44
    },
    {
        "address": "8530 Blondo Street, Omaha, NE 68134, USA",
        "category": "Bakery",
        "lat": 41.27832799999999,
        "lng": -96.04651199999999,
        "name": "Dee-sign Garden Shop and Landscaping",
        "number": 45
    },
    {
        "address": "Montclair Shopping Center, 12965 West Center Road, Omaha, NE 68144, USA",
        "category": "Bakery",
        "lat": 41.2324384,
        "lng": -96.11665529999999,
        "name": "House of J",
        "number": 46
    },
    {
        "address": "5001 Underwood Avenue, Omaha, NE 68132, USA",
        "category": "Beauty",
        "lat": 41.26483349999999,
        "lng": -95.99046399999999,
        "name": "eCreamery",
        "number": 47
    },
    {
        "address": "120 Regency Parkway, Omaha, NE 68114, USA",
        "category": "Bank",
        "lat": 41.259412,
        "lng": -96.071623,
        "name": "Borsheims",
        "number": 48
    },
    {
        "address": "13013 West Center Road, Omaha, NE 68144, USA",
        "category": "Beauty",
        "lat": 41.2340041,
        "lng": -96.1170647,
        "name": "Silver of Oz",
        "number": 49
    },
    {
        "address": "4229 South 120th Street, Omaha, NE 68137, USA",
        "category": "Bar",
        "lat": 41.21621409999999,
        "lng": -96.1006628,
        "name": "Schloeman's Lamp Shop",
        "number": 50
    },
    {
        "address": "7634 Pierce Street, Omaha, NE 68124, USA",
        "category": "Bakery",
        "lat": 41.2477284,
        "lng": -96.03186799999999,
        "name": "Emspace Group",
        "number": 51
    },
    {
        "address": "Omaha, NE 68124, USA",
        "category": "Bank",
        "lat": 41.2373947,
        "lng": -96.0520363,
        "name": "MetroMagazine",
        "number": 52
    },
    {
        "address": "Nebraska, USA",
        "category": "Bank",
        "lat": 41.4925374,
        "lng": -99.9018131,
        "name": "Mystery Rose",
        "number": 53
    },
    {
        "address": "Elkhorn, NE 68022, USA",
        "category": "Bank",
        "lat": 41.2819478,
        "lng": -96.2482149,
        "name": "population-we LLC",
        "number": 54
    },
    {
        "address": "Omaha, NE 68107, USA",
        "category": "Beauty",
        "lat": 41.2123169,
        "lng": -95.956825,
        "name": "The Reader",
        "number": 55
    },
    {
        "address": "2617 South 167th Circle, Omaha, NE 68130, USA",
        "category": "Bakery",
        "lat": 41.234853,
        "lng": -96.174864,
        "name": "Advanced Home Health Care and Nursing",
        "number": 56
    },
    {
        "address": "724 South 12th Street, Omaha, NE 68102, USA",
        "category": "Dining",
        "lat": 41.252634,
        "lng": -95.932362,
        "name": "Bemis Center for Contemporary Arts",
        "number": 57
    },
    {
        "address": "1210 Howard Street, Omaha, NE 68102, USA",
        "category": "Bank",
        "lat": 41.2557194,
        "lng": -95.9324635,
        "name": "Homer's",
        "number": 58
    },
    {
        "address": "980 South 72nd Street, Omaha, NE 68114, USA",
        "category": "Bakery",
        "lat": 41.2500007,
        "lng": -96.0249231,
        "name": "Oriental Rug Palace",
        "number": 59
    },
    {
        "address": "2717 South 108th Street, Omaha, NE 68144, USA",
        "category": "Beauty",
        "lat": 41.2335935,
        "lng": -96.0810017,
        "name": "Rockbrook Camera",
        "number": 60
    },
    {
        "address": "17142 Shirley Street, Omaha, NE 68130, USA",
        "category": "Bar",
        "lat": 41.24189,
        "lng": -96.18243900000002,
        "name": "Printing Plus",
        "number": 61
    },
    {
        "address": "Nebraska, USA",
        "category": "Bakery",
        "lat": 41.4925374,
        "lng": -99.9018131,
        "name": "RSVP",
        "number": 62
    },
    {
        "address": "6109 Irvington Road, Omaha, NE 68134, USA",
        "category": "Bakery",
        "lat": 41.313108,
        "lng": -96.0524772,
        "name": "Stickman Graphics & Signs",
        "number": 63
    },
    {
        "address": "1218 South 119th Street, Omaha, NE 68144, USA",
        "category": "Bookstore",
        "lat": 41.2472045,
        "lng": -96.0991062,
        "name": "Absolutely Fresh & Shucks Fish House",
        "number": 64
    },
    {
        "address": "5007 Underwood Avenue, Omaha, NE 68132, USA",
        "category": "Bookstore",
        "lat": 41.2648826,
        "lng": -95.99066409999999,
        "name": "Dundee Dell",
        "number": 65
    },
    {
        "address": "Rockbrook Village Shopping Center, 10922 Elm Street, Omaha, NE 68144, USA",
        "category": "Dining",
        "lat": 41.2328688,
        "lng": -96.08335319999999,
        "name": "Jaipur Brew House",
        "number": 66
    },
    {
        "address": "2820 South 123rd Court, Omaha, NE 68144, USA",
        "category": "Bookstore",
        "lat": 41.233112,
        "lng": -96.1061433,
        "name": "Julio's",
        "number": 67
    },
    {
        "address": "422 South 11th Street, Omaha, NE 68102, USA",
        "category": "Bookstore",
        "lat": 41.2557458,
        "lng": -95.93081409999999,
        "name": "M's Pub",
        "number": 68
    },
    {
        "address": "715 North Saddle Creek Road, Omaha, NE 68132, USA",
        "category": "Bank",
        "lat": 41.2667227,
        "lng": -95.9805008,
        "name": "Mama's Pizza",
        "number": 69
    },
    {
        "address": "521 South 13th Street, Omaha, NE 68102, USA",
        "category": "Beauty",
        "lat": 41.2546515,
        "lng": -95.9329066,
        "name": "Nicola's Italian Wine & Faire",
        "number": 70
    },
    {
        "address": "8709 Shamrock Road, Omaha, NE 68114, USA",
        "category": "Bank",
        "lat": 41.25017740000001,
        "lng": -96.0473216,
        "name": "Village Needleworks",
        "number": 71
    },
    {
        "address": "Bel Air Plaza, 12100 West Center Road #610, Omaha, NE 68144, USA",
        "category": "Bakery",
        "lat": 41.2362752,
        "lng": -96.1032487,
        "name": "K 9 Lives Rescue Boutique and Gifts",
        "number": 72
    },
    {
        "address": "8457 West Center Road, Omaha, NE 68124, USA",
        "category": "Bank",
        "lat": 41.23299249999999,
        "lng": -96.046388,
        "name": "Canfield's",
        "number": 73
    },
    {
        "address": "3629 Q Street, Omaha, NE 68107, USA",
        "category": "Bar",
        "lat": 41.2051387,
        "lng": -95.96884879999999,
        "name": "Villains Tattoo",
        "number": 74
    },
    {
        "address": "7517 Pacific Street, Omaha, NE 68114, USA",
        "category": "Dining",
        "lat": 41.2482564,
        "lng": -96.0298131,
        "name": "Spirit World",
        "number": 75
    }
];
}]);


